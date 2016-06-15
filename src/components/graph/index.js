import baseTheme from './themes/base';
import light from './themes/light';
import dark from './themes/dark';
import merge from 'lodash.merge';

function mergeConfig(variantTheme) {
  return merge({}, baseTheme, variantTheme);
}

const lightTheme = mergeConfig(light);
const darkTheme = mergeConfig(dark);

export {
  baseTheme,
  lightTheme,
  darkTheme,
};
