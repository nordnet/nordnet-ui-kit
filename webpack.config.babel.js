import webpack from 'webpack';
import Config from 'webpack-configurator';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import minimist from 'minimist';
import svgoConfig from './svgo.config';
const argv = minimist(process.argv.slice(2));
const NODE_ENV = process.env.NODE_ENV;
const useRem = !!argv['use-rem'];
const remSuffix = useRem ? '' : '.px';
const libraryTarget = argv.libraryTarget || 'commonjs2';
const libraryTargetSuffix = libraryTarget === 'umd' ? '.umd' : '';
const fileSuffix = `${remSuffix}${libraryTargetSuffix}`;

const entry = {
  bundle: './src/index.js',
  individual: {
    alert: './src/components/alert/alert.jsx',
    badge: './src/components/badge/badge.jsx',
    button: './src/components/button/button.jsx',
    'date-picker': './src/components/date-picker',
    dropdown: './src/components/dropdown/dropdown.jsx',
    flag: ['./src/components/flag/flag.jsx'],
    graph: './src/components/graph',
    'graph-tooltip': './src/components/graph-tooltip',
    'horizontal-nav': './src/components/horizontal-nav',
    icon: ['./src/components/icon/icon.jsx'],
    input: './src/components/input/input.jsx',
    'labeled-value': './src/components/labeled-value/labeled-value.jsx',
    legend: './src/components/legend',
    logo: './src/components/logo/logo.jsx',
    pane: './src/components/pane/pane.jsx',
    'radio-group': './src/components/radio-group/radio-group.jsx',
    'range-selector': './src/components/range-selector',
    'ratio-bar': './src/components/ratio-bar',
    search: './src/components/search',
    select: './src/components/select/select.jsx',
    'spark-graph': ['./src/components/spark-graph'],
    spinner: ['./src/components/spinner'],
    table: './src/components/table',
    tbody: './src/components/tbody',
    td: './src/components/td',
    tfoot: './src/components/tfoot',
    th: './src/components/th',
    thead: './src/components/thead',
    tr: './src/components/tr',
    variables: ['./src/utilities/variables.js'],
    widget: ['./src/components/widget/widget'],
  },
};

const output = {
  bundle: {
    filename: `nordnet-ui-kit${fileSuffix}`,
    cssFilename: `nordnet-ui-kit${fileSuffix}`,
    library: 'NordnetUiKit',
  },
  individual: {
    filename: `[name]/index${fileSuffix}`,
    cssFilename: `[name]/[name]${fileSuffix}`,
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
      filename: `${output[argv.type].filename}.js`,
      library: output[argv.type].library,
      libraryTarget,
    },
    externals: [{
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
      'react-addons-css-transition-group': {
        root: 'ReactCSSTransitionGroup',
        commonjs2: 'react-addons-css-transition-group',
        commonjs: 'react-addons-css-transition-group',
        amd: 'react-addons-css-transition-group',
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

  // config.plugin('uglify', webpack.optimize.UglifyJsPlugin);

  // ////// //
  // Styles //
  // ////// //

  config.loader('sass', {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css!postcss!sass'),
  });

  const postcss = [
    autoprefixer,
  ];

  if (NODE_ENV === 'production') {
    postcss.push(cssnano({
      zindex: false,
      convertValues: false,
      reduceIdents: false,
    }));
  }

  config.merge({
    postcss,
    sassLoader: {
      data: `$use-rem: ${useRem};`,
    },
  });

  config.plugin('extract-css', ExtractTextPlugin, [
    `${output[argv.type].cssFilename}.css`,
  ]);

  // ////// //
  // Images //
  // ////// //

  config.loader('svg', {
    test: /\.svg$/,
    loader: `raw!svgo?${svgoConfig}`,
  });

  // ////// //
  // Define //
  // ////// //

  config.plugin('webpack-define', webpack.DefinePlugin, [{
    'process.env': {
      NODE_ENV: JSON.stringify(NODE_ENV),
    },
    __USE_REM__: JSON.stringify(useRem),
    __STYLEGUIDE__: false,
  }]);

  config.plugin('webpack-provide', webpack.ProvidePlugin, [{
    'Object.assign': 'lodash.assign',
  }]);

  return config.resolve();
})();
