const path = require('path');
const camelCase = require('lodash').camelCase;
const fs = require('fs');
const MiniHtmlWebpackPlugin = require('mini-html-webpack-plugin');

const { generateCSSReferences, generateJSReferences } = MiniHtmlWebpackPlugin;

const dir = path.join(__dirname, 'src');

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  title: 'Nordnet UI Kit',
  styleguideDir: path.join(__dirname, 'documentation/dist'),
  skipComponentsWithoutExample: true,
  template: ({ css, js, title, publicPath }) =>
    `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        ${generateCSSReferences(css, publicPath)}
        <link href="https://fonts.googleapis.com/css?family=Bitter:400,700|Open+Sans:300,400,600,700,800" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
      </head>
      <body>
        <div id="rsg-root"></div>
        ${generateJSReferences(js, publicPath)}
      </body>
    </html>
    `,
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
  moduleAliases: {
    'nordnet-ui-kit': path.resolve(__dirname, 'src', 'index.js'),
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
