import React, { PropTypes } from 'react';
import ReactHighstocks from 'react-highcharts/dist/ReactHighstock.src';
import defaultTheme from './themes/default.js';
import kebabCase from 'lodash.kebabcase';
import merge from 'lodash.merge';
import classNames from 'classnames';
import './graph.scss';

export default function Graph({
  variant,
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

  config = merge({}, defaultTheme, variantTheme, config);
  console.log('config', config);

  return (
    <ReactHighstocks { ...rest } config={ config } className={ classes } />
  );
}

Graph.defaultProps = {
  variant: 'dark',
  decimals: 2,
  config: {}
};

Graph.propTypes = {
  className: PropTypes.string,
  decimals: PropTypes.number,
  /** Theme variant of the chart. */
  variant: React.PropTypes.oneOf(['dark', 'light']),
  /** Highstocks config object, overrides default themes per setting, see API documentation [here](http://api.highcharts.com/highstock). */
  config: PropTypes.object,
};
