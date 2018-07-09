import { mapValues } from 'lodash';

export const wrapInMobileMediaQuery = (mixins, style) =>
  mapValues(style, val => ({
    [mixins.maxMedia('md')]: val,
  }));

export const wrapInDesktopMediaQuery = (mixins, style) =>
  mapValues(style, val => ({
    [mixins.media('md')]: val,
  }));
