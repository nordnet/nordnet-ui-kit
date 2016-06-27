let variables;

if (typeof __STYLEGUIDE__ !== 'undefined' && __STYLEGUIDE__) {
  // Require variables like normal if building styleguide
  variables = require('../../../utilities/variables').default;
} else {
  // Require variables using underlying functions of sass-variable-loader if building for release
  const fs = require('fs');
  const getVariables = require('sass-variable-loader/dist/get-variables').default;
  const parseVariables = require('sass-variable-loader/dist/parse-variables').default;
  const src = fs.readFileSync(`${__dirname}/../../../_variables.scss`, 'utf8');
  variables = parseVariables(getVariables(src));
}

export default variables;
