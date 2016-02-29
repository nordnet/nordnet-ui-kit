import webpack from 'webpack';
import Config from 'webpack-configurator';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';

const paths = ['/'];

module.exports = (() => {
  const config = new Config();

  // //// //
  // Base //
  // //// //

  config.merge({
    entry: {
      bundle: './src/index.jsx',
      // vendor: ['react', 'react-dom'],
    },
    output: {
      path: './dist',
      filename: '[name].js',
      libraryTarget: 'umd',
    },
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

  config.loader('css', {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('css!postcss'),
  });

  config.loader('sass', {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css!postcss!sass'),
  });

  config.merge({
    postcss: [
      autoprefixer,
      cssnano,
    ],
    sassLoader: {
      outputStyle: 'compact',
    },
  });

  config.plugin('extract-css', ExtractTextPlugin, [
    'styles.css',
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
      NODE_ENV: '"production"',
    },
  }]);

  // ////// //
  // Vendor //
  // ////// //

  // config.plugin('webpack-common-chunks', webpack.optimize.CommonsChunkPlugin, [
  //   'vendor', 'vendor.bundle.js',
  // ]);

  // ///////////////////// //
  // Static site generator //
  // ///////////////////// //

  config.plugin('static-site-generator', StaticSiteGeneratorPlugin, [
    'bundle',
    paths,
  ]);

  return config.resolve();
})();
