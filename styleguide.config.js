const path = require('path');
const camelCase = require('lodash.camelcase');
const fs = require('fs');
// const docgen = require('react-docgen');

const dir = path.join(__dirname, 'src');

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  title: 'Nordnet UI Kit',
  styleguideDir: path.join(__dirname, 'documentation/dist'),
  // components: 'src/components/**/*.jsx',
  components() {
    const folders = fs.readdirSync(`${dir}/components`);
    // SparkGraph is not yet fixed, leaving here for now!
    return folders.filter(c => c !== 'spark-graph').map(folder => `${dir}/components/${folder}/${folder}.jsx`);
  },
  template: path.join(__dirname, 'documentation/template.html'),
  getComponentPathLine(componentPath) {
    const fileName = path.basename(componentPath, '.jsx');
    const componentName = capitalize(camelCase(fileName));

    return `import { ${componentName} } from 'nordnet-ui-kit';`;
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.md');
  },
  // propsParser(filePath, source) {
  //   if (filePath === `${dir}/components/input/input.jsx`) {
  //     const inputPath = `${dir}/components/input/input-default.jsx`;
  //     return docgen.parse(fs.readFileSync(inputPath, { encoding: 'UTF-8' }));
  //   }
  //
  //   return docgen.parse(source);
  // },
  webpackConfig: {
    module: {
      rules: [{
        test: /.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }],
    },
    resolve: {
      alias: {
        'rsg-components/Wrapper': path.join(__dirname, 'documentation', 'wrapper.jsx'),
      },
    },
  },
};
