import webpack from 'webpack';
import Config from 'webpack-configurator';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import minimist from 'minimist';
const argv = minimist(process.argv.slice(2));

const entry = {
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

const output = {
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

module.exports = (() => {
  const config = new Config();

  // //// //
  // Base //
  // //// //

  config.merge({
    entry: entry[argv.type],
    output: {
      path: './dist',
      filename: `${ output[argv.type].filename }.js`,
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
    resolve: {
      extensions: [
        '',
        '.js',
        '.jsx',
      ],
    },
  });

  // ////////// //
  // Javascript //
  // ////////// //

  config.loader('js', {
    test: /.jsx?$/,
    loader: 'babel',
    exclude: /node_modules/,
  });

  // ////// //
  // Styles //
  // ////// //

  config.loader('sass', {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css!postcss!sass'),
  });

  config.merge({
    postcss: [
      autoprefixer,
    ],
    sassLoader: {
      outputStyle: 'compact',
    },
  });

  config.plugin('extract-css', ExtractTextPlugin, [
    `${ output[argv.type].cssFilename }.css`,
  ]);

  // ////// //
  // Images //
  // ////// //

  const svgoConfig = JSON.stringify({
    plugins: [
      { removeTitle: true },
      { removeDimensions: true },
      { convertColors: { shorthex: true } },
    ],
  });

  config.loader('svg', {
    test: /\.svg$/,
    loader: `raw!svgo?${ svgoConfig }`,
  });

  // ////// //
  // Define //
  // ////// //

  config.plugin('webpack-define', webpack.DefinePlugin, [{
    'process.env': {
      'NODE_ENV': '"production"',
    },
  }]);

  return config.resolve();
})();
