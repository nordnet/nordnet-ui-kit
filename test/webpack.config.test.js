const nodeExternals = require('webpack-node-externals');

module.exports = {
  module: {
    loaders: [{
      test: /.jsx?$/,
      use: 'babel-loader',
    }],
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
