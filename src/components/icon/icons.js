import { camelCase } from 'lodash';
const icons = require.context('./../../icons/', false, /\.svg$/).keys();

export default icons.reduce((prev, curr) => {
  const icon = curr.replace(/\.\//, '');
  const iconName = camelCase(icon.replace(/\.svg$/, ''));
  prev[iconName] = require(`!!svg-icon-template-loader!../../icons/${icon}`); // eslint-disable-line
  return prev;
}, {});
