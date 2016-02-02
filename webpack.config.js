var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var argv = require('minimist')(process.argv.slice(2));

var entry = {
  bundle: './src/index.js',
  individual: {
    alert: './src/components/alert/alert.jsx',
    button: './src/components/button/button.jsx',
    checkbox: './src/components/checkbox/checkbox.jsx',
    collapsible: './src/components/collapsible/collapsible.jsx',
    dropdown: './src/components/dropdown/dropdown.jsx',
    icon: ['./src/components/icon/icon.jsx'],
    input: './src/components/input/input.jsx',
    pane: './src/components/pane/pane.jsx',
    radio: './src/components/radio/radio.jsx',
  },
};

var output = {
  bundle: {
    filename: 'nordnet-ui-kit',
    cssFilename: 'nordnet-ui-kit',
    library: 'NordnetUiKit',
  },
  individual: {
    filename: '[name]/index',
    cssFilename: '[name]/[name]',
    library: 'NordnetUiKit.[name]',
  },
};

module.exports = {
  entry: entry[argv.type],
  output: {
    path: './dist',
    filename: output[argv.type].filename + '.js',
    library: output[argv.type].library,
    libraryTarget: 'commonjs2',
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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin(output[argv.type].cssFilename + '.css'),
  ],
};
