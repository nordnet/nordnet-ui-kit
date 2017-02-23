const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  output: {
    // sourcemap support for IntelliJ/Webstorm
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      use: 'babel-loader',
    }, {
      test: /\.scss$/,
      use: 'null-loader',
    }, {
      test: /\.svg$/,
      use: 'null-loader',
    }],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __USE_REM__: true,
    }),
  ],
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: 'cheap-module-source-map', // faster than 'source-map'
};
