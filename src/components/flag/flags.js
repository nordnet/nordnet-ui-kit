import { camelCase } from 'lodash';
const icons = require.context('./../../flags/', false, /\.svg$/).keys();

export default icons.reduce((prev, curr) => {
  const icon = curr.replace(/\.\//, '');
  const iconName = camelCase(icon.replace(/\.svg$/, ''));
  prev[iconName] = require(`../../flags/${icon}`); // eslint-disable-line
  return prev;
}, {});
