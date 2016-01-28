var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var pkg = require('./package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: pkg.name + '.js',
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!postcss!sass'),
    }],
  },
  postcss: [
    autoprefixer,
  ],
  sassLoader: {
    outputStyle: 'compact',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin(pkg.name + '.css'),
  ],
};
