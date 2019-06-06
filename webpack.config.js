const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      path.resolve(__dirname, './'),
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'Redux': 'react-redux',
      'PropTypes': 'prop-types',
    }),
    new HtmlWebpackPlugin({
      title: 'Boilerplate App',
      favicon: './assets/img/favicon.png',
      template: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    publicPath: '/',
    contentBase: './src',
    compress: true,
    inline: true,
    index: 'index.html',
    open: true,
    overlay: true,
    historyApiFallback: true,
    //proxy: {},
    stats: {
      assets: false,
      builtAt: true,
      children: false,
      chunks: false,
      depth: false,
      errors: true,
      hash: true,
      modules: false,
      publicPath: true,
      timings: true,
      version: true,
      warnings: true,
      colors: true,
    },
  },
};
