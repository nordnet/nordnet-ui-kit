const path = require('path');
const fs = require('fs');
const docgen = require('react-docgen');
const dir = path.join(__dirname, 'src');

module.exports = {
  title: 'Nordnet UI Kit',
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
  webpackConfigFile: './webpack.config.babel.js',
  webpackConfig: {
    entry: ['babel-polyfill', path.join(__dirname, 'documentation/documentation.scss')],
  },
};
