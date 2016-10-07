import merge from 'lodash.merge';
import base from './base';
import light from './light';
import dark from './dark';
import muted from './muted';

module.exports = {
  baseTheme: base,
  lightTheme: merge({}, base, light),
  darkTheme: merge({}, base, dark),
  mutedTheme: merge({}, base, muted),
};
