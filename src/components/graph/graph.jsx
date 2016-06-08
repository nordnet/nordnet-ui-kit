import React, { PropTypes } from 'react';
import ReactHighstocks from 'react-highcharts/dist/ReactHighstock.src';
import defaultTheme from './themes/default.js';
import kebabCase from 'lodash.kebabcase';
import merge from 'lodash.merge';
import classNames from 'classnames';
import './graph.scss';

export default function Graph({
  variant,
  language,
  className,
  config,
  ...rest,
}) {

  const classes = classNames(
    'graph',
    `graph--${kebabCase(variant)}`,
    className
  );

  // Override default theme with variant and then custom config.
  const variantTheme = require(`./themes/${variant}.js`).theme;
  console.log('variantTheme', variantTheme);

  const translations = require(`./i18n/${language}.js`);
  console.log('translations', translations);

  config = merge({}, defaultTheme, translations, variantTheme, config);
  console.log('config', config);

//  ReactHighstocks.getChart().setOptions();


  return (
    <ReactHighstocks { ...rest } config={ config } className={ classes } lang={ translations } />
  );
}

Graph.defaultProps = {
  variant: 'dark',
  language: 'sv',
  decimals: 2,
  config: {}
};

Graph.propTypes = {
  className: PropTypes.string,
  language: React.PropTypes.oneOf(['sv', 'da', 'no', 'fi', 'en']),
  decimals: PropTypes.number,
  /** Theme variant of the chart. */
  variant: React.PropTypes.oneOf(['dark', 'light']),
  /** Highstocks config object, overrides default themes per setting, see API documentation [here](http://api.highcharts.com/highstock). */
  config: PropTypes.object,
};
