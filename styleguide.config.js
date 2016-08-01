const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const docgen = require('react-docgen');
const dir = path.join(__dirname, 'src');
const webpack = require('webpack');

module.exports = {
  title: 'Nordnet UI Kit',
  serverPort: 4000,
  styleguideDir: path.join(__dirname, 'documentation/dist'),
  components() {
    const folders = fs.readdirSync(`${dir}/components`);
    return folders.map(folder => `${dir}/components/${folder}/${folder}.jsx`);
  },
  template: path.join(__dirname, 'documentation/template.html'),
  getComponentPathLine(componentPath) {
    const fileName = path.basename(componentPath, '.jsx');
    const name = fileName.replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
    return `import { ${name.replace('-', '')} } from 'nordnet-ui-kit'`;
  },
  getExampleFilename(componentpath) {
    return componentpath.replace(/\.jsx?$/, '.md');
  },
  propsParser(filePath, source) {
    if (filePath === `${dir}/components/input/input.jsx`) {
      const inputPath = `${dir}/components/input/input-default.jsx`;
      return docgen.parse(fs.readFileSync(inputPath, { encoding: 'UTF-8' }));
    }

    return docgen.parse(source);
  },
  updateWebpackConfig(webpackConfig, env) {
    const config = webpackConfig;

    const svgoConfig = JSON.stringify({
      plugins: [
        { removeTitle: true },
        { removeDimensions: true },
        { convertColors: { shorthex: true } },
      ],
    });

    const loaderDirs = [dir, path.join(__dirname, 'documentation')];

    const loaders = {
      js: {
        test: /.jsx?$/,
        loader: 'babel',
        include: loaderDirs,
      },
      sass: {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass',
        include: loaderDirs,
      },
      svg: {
        test: /\.svg$/,
        loader: `raw!svgo?${svgoConfig}`,
        include: loaderDirs,
      },
    };

    config.module.loaders.push(loaders.js, loaders.svg);

    const postcss = [
      autoprefixer,
    ];

    if (env === 'development') {
      config.module.loaders.push(loaders.sass);
    }

    if (env === 'production') {
      postcss.push(cssnano);

      config.module.loaders.push(Object.assign({}, loaders.sass, {
        loader: ExtractTextPlugin.extract('css!postcss!sass'),
      }));

      config.plugins.push(new ExtractTextPlugin('build/styles.css'));
    }

    config.plugins.push(new webpack.DefinePlugin({ __STYLEGUIDE__: true }));

    config.postcss = postcss;

    config.entry.push(path.join(__dirname, 'documentation/documentation.scss'));

    config.resolve.alias['rsg-components/Layout/Renderer'] = path.join(__dirname, 'documentation/rsg-components/Layout/Renderer');

    config.plugins.push(new webpack.DefinePlugin({ __USE_REM__: true }));

    return config;
  },
};
