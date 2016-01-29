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
    library: 'NordnetUiKit',
    libraryTarget: 'umd',
  },
  externals: [{
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  }, {
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  }],
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
