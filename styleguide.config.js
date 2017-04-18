const path = require('path');
const camelCase = require('lodash.camelcase');
const fs = require('fs');
// const docgen = require('react-docgen');
const config = require('./webpack.config')('styleguidist');

const dir = path.join(__dirname, 'src');

const portedComponents = [
  'badge',
  'labeled-value',
  'icon',
  'logo',
  'flag',
  'avatar',
  'radio-group',
  'input',
  'legend',
  'dropdown',
  'pane',
  'horizontal-nav',
  'tooltip',
  'button',
  'search',
  'table',
  'tbody',
  'thead',
  'tfoot',
  'tr',
  'th',
  'td',
  'widget',
  'spinner',
  'ratio-bar',
];

const quickFixedComponents = [
  'graph-tooltip',
  'alert',
  'nav-bar',
  'select',
  'range-selector',
];

const allComponents = [...portedComponents, ...quickFixedComponents];

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  title: 'Nordnet UI Kit',
  styleguideDir: path.join(__dirname, 'documentation/dist'),
  // components: 'src/components/**/*.jsx',
  components() {
    const folders = fs.readdirSync(`${dir}/components`);
    return folders.filter(c => allComponents.indexOf(c) !== -1).map(folder => `${dir}/components/${folder}/${folder}.jsx`);
  },
  template: path.join(__dirname, 'documentation/template.html'),
  getComponentPathLine(componentPath) {
    const fileName = path.basename(componentPath, '.jsx');
    const componentName = capitalize(camelCase(fileName));

    const isQuickFixed = quickFixedComponents.indexOf(fileName) !== -1;
    const extra = isQuickFixed ? ' // ⚠️ NOTE: This component is quick fixed (no styles)' : '';

    return `import { ${componentName} } from 'nordnet-ui-kit';${extra}`;
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
  webpackConfig: Object.assign({}, config, {
    resolve: {
      alias: {
        'rsg-components/Wrapper': path.join(__dirname, 'documentation', 'wrapper.jsx'),
      },
    },
  }),
};
