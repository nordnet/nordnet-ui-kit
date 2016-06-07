const nodeExternals = require('webpack-node-externals');

module.exports = {
  output: {
    // sourcemap support for IntelliJ/Webstorm
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel',
    }, {
      test: /\.scss$/,
      loader: 'null-loader',
    }, {
      test: /\.svg$/,
      loader: 'null-loader',
    }],
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: 'cheap-module-source-map', // faster than 'source-map'
};
