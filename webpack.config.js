const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pkg = require('./package.json');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    './index.js',
    './assets/scss/main.scss',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
  },
  module: {
    rules: [
      {
				enforce: 'pre',
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: 'eslint-loader',
				options: {
					fix: true,
				},
			},
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, 'modules'),
    ],
  },
  plugins: [
		new Dotenv(),
    new CleanWebpackPlugin({
			verbose: true,
			protectWebpackAssets: true,
		}),
    new webpack.ProvidePlugin({
      'React': 'react',
      'Redux': 'react-redux',
      'PropTypes': 'prop-types',
    }),
		new HtmlWebpackPlugin({
			title: 'Boilerplate',
			template: './index.html',
			favicon: './assets/img/favicon.png',
			filename: 'index.html',
			hash: true,
			meta: {
				buildTime: `${Date.now()}`,
				version: `${pkg.version}`,
			},
		}),
  ],
  devServer: {
    host: 'localhost',
		port: 'auto',
    hot: true,
    open: true,
    //proxy: {},
    static: {
      directory: path.resolve(__dirname, "static"),
      staticOptions: {},
      publicPath: './public',
      serveIndex: true,
      watch: true,
    },
    client: {
      logging: 'info',
      overlay: true,
      progress: true,
    },
    devMiddleware: {
      index: true, 
      publicPath: '/',
      stats: {
        preset: 'errors-warnings',
        builtAt: true,
        colors: true,
        performance: true,
        timings: true,
        version: true,
      },
    }
  },
};
