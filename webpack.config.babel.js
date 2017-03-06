const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const NODE_ENV = process.env.NODE_ENV;

module.exports = args => {
  let env;
  if (args === 'development' || args === 'production') {
    // its styleguidist
    env = {
      'use-rem': true,
      type: 'bundle',
    };
  } else {
    env = args;
  }
  const useRem = !!env['use-rem'];
  const remSuffix = useRem ? '' : '.px';
  const libraryTarget = env.libraryTarget || 'commonjs2';
  const libraryTargetSuffix = libraryTarget === 'umd' ? '.umd' : '';
  const fileSuffix = `${remSuffix}${libraryTargetSuffix}`;
  const entry = {
    bundle: './src/index.js',
    individual: {
      alert: './src/components/alert/alert.jsx',
      badge: './src/components/badge/badge.jsx',
      button: './src/components/button/button.jsx',
      dropdown: './src/components/dropdown/dropdown.jsx',
      flag: ['./src/components/flag/flag.jsx'],
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
      tooltip: './src/components/tooltip',
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

  const externals = [{
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
  }];

  const babel = {
    test: /.jsx?$/,
    use: 'babel-loader',
    exclude: /node_modules/,
  };

  const scssPlugins = [autoprefixer()];

  if (NODE_ENV === 'production') {
    scssPlugins.push(cssnano({
      zindex: false,
      convertValues: false,
      reduceIdents: false,
    }));
  }

  const scss = {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [{
        loader: 'css-loader',
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: scssPlugins,
        },
      }, {
        loader: 'sass-loader',
        options: {
          data: `$use-rem: ${useRem};`,
        },
      }],
    }),
  };

  const svg = {
    test: /\.svg$/,
    use: [{
      loader: 'raw-loader',
    }, {
      loader: 'svgo-loader',
      options: {
        plugins: [
          { removeTitle: true },
          { removeComments: true },
          { removeDesc: true },
          { removeDimensions: true },
          { convertColors: { shorthex: true } },
          { cleanupIDs: false },
        ],
      },
    }],
  };

  const plugins = [
    new ExtractTextPlugin(`${output[env.type].cssFilename}.css`),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      __USE_REM__: JSON.stringify(useRem),
      __STYLEGUIDE__: false,
    }),
    new LodashModuleReplacementPlugin({
      deburring: true, // used by camelCase and kebabCase
      coercions: true, // used by deburring
    }),
  ];

  if (process.env.ANALYZE === 'true') {
    plugins.push(new BundleAnalyzerPlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin()); // Also minify code to get prod-like stats
  }

  return {
    entry: entry[env.type],
    output: {
      path: './dist',
      filename: `${output[env.type].filename}.js`,
      library: output[env.type].library,
      libraryTarget,
    },
    externals,
    resolve: {
      extensions: [
        '.js',
        '.jsx',
      ],
    },
    module: {
      rules: [babel, scss, svg],
    },
    plugins,
  };
};
