import webpack from 'webpack';
import Config from 'webpack-configurator';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import minimist from 'minimist';
const argv = minimist(process.argv.slice(2));
const NODE_ENV = process.env.NODE_ENV;
const useRem = !!argv['use-rem'];
const fileSuffix = useRem ? '' : '.px';

const entry = {
  bundle: './src/index.js',
  individual: {
    alert: './src/components/alert/alert.jsx',
    badge: './src/components/badge/badge.jsx',
    button: './src/components/button/button.jsx',
    'date-picker': './src/components/date-picker',
    dropdown: './src/components/dropdown/dropdown.jsx',
    graph: './src/components/graph',
    'graph-tooltip': './src/components/graph-tooltip',
    icon: ['./src/components/icon/icon.jsx'],
    input: './src/components/input/input.jsx',
    'labeled-value': './src/components/labeled-value/labeled-value.jsx',
    logo: './src/components/logo/logo.jsx',
    pane: './src/components/pane/pane.jsx',
    'ratio-bar': './src/components/ratio-bar/',
    select: './src/components/select/select.jsx',
    'spark-graph': ['./src/components/spark-graph'],
    spinner: './src/components/spinner',
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
      libraryTarget: 'commonjs2',
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
    postcss.push(cssnano);
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

  const svgoConfig = JSON.stringify({
    plugins: [
      { removeTitle: true },
      { removeDimensions: true },
      { convertColors: { shorthex: true } },
    ],
  });

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

  return config.resolve();
})();
