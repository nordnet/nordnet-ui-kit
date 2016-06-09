import React, { PropTypes } from 'react';
import ReactHighstocks from './react-highstocks';
import defaultTheme from './themes/default';
import kebabCase from 'lodash.kebabcase';
import merge from 'lodash.merge';
import classNames from 'classnames';
import './graph.scss';

class Graph extends React.Component {
  mergeConfig(variant, config) {
    // Override default theme with variant and then custom config.
    const variantTheme = require(`./themes/${variant}.js`).theme; // eslint-disable-line
    return merge({}, defaultTheme, variantTheme, config);
  }

  render() {
    const {
      variant,
      lang,
      className,
      config,
      ...rest,
    } = this.props;

    const classes = classNames(
      'graph',
      `graph--${kebabCase(variant)}`,
      className
    );

    // Get translations from language file
    const translations = require(`./i18n/${lang}.js`);  // eslint-disable-line

    return (
      <ReactHighstocks
        { ...rest }
        config={ this.mergeConfig(variant, config) }
        className={ classes }
        translations={ translations }
      />
    );
  }
}

Graph.defaultProps = {
  variant: 'dark',
  lang: 'sv',
  decimals: 2,
  config: {},
};

Graph.propTypes = {
  className: PropTypes.string,
  lang: React.PropTypes.oneOf(['sv', 'da', 'no', 'fi', 'en']),
  decimals: PropTypes.number,
  /** Theme variant of the chart. */
  variant: React.PropTypes.oneOf(['dark', 'light']),
  /** Highstocks config object, overrides default themes per setting, see API documentation [here](http://api.highcharts.com/highstock). */
  config: PropTypes.object,
};

export default Graph;
