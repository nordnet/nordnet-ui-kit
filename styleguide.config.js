const path = require('path');
const camelCase = require('lodash').camelCase;
const fs = require('fs');

const dir = path.join(__dirname, 'src');

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  title: 'Nordnet UI Kit',
  styleguideDir: path.join(__dirname, 'documentation/dist'),
  skipComponentsWithoutExample: true,
  template: path.resolve(__dirname, './documentation/template.html'),
  sections: [
    {
      name: 'Components',
      components: () => {
        const componentPath = `${dir}/components`;
        const folders = fs.readdirSync(componentPath);
        return folders
          .filter(c => fs.statSync(path.join(componentPath, c)).isDirectory()) // Filter out directories
          .map(folder => `${dir}/components/${folder}/${folder}.jsx`);
      },
    },
    {
      name: 'Theme',
      components: './documentation/theme/*.jsx',
    },
  ],
  getComponentPathLine(componentPath) {
    if (componentPath.indexOf('documentation') !== -1) {
      return '';
    }

    const fileName = path.basename(componentPath, '.jsx');
    const componentName = capitalize(camelCase(fileName));

    return `import { ${componentName} } from 'nordnet-ui-kit';`;
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.md');
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'documentation', 'wrapper.jsx'),
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    devServer: {
      disableHostCheck: true,
    },
  },
};
