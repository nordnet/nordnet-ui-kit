const nodeExternals = require('webpack-node-externals');
const path = require('path');

const isCoverage = process.env.NODE_ENV === 'coverage';

const loaders = [{
  test: /.jsx?$/,
  use: 'babel-loader',
}];

if (isCoverage) {
  loaders.unshift({
    test: /.jsx?$/,
    include: path.resolve('src'), // instrument only testing sources with Istanbul
    loader: 'istanbul-instrumenter-loader',
  });
}

module.exports = {
  module: {
    loaders,
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: 'cheap-module-source-map', // faster than 'source-map'
};
