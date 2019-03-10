const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'production',
  //devtool: 'cheap-module-source-map',
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
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
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    })
  ],

};
