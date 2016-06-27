import merge from 'lodash.merge';
import base from './base';
import light from './light';
import dark from './dark';

module.exports = {
  baseTheme: base,
  lightTheme: merge({}, base, light),
  darkTheme: merge({}, base, dark),
};
