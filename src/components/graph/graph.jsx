import React, { PropTypes } from 'react';
import ReactHighstocks from 'react-highcharts/dist/ReactHighstock';
import defaultTheme from './themes/default';
import merge from 'lodash.merge';

class Graph extends React.Component {
  mergeConfig(variant, config) {
    // Override default theme with variant and then custom config.
    let variantTheme;
    try {
      variantTheme = require(`./themes/${variant}.js`).theme; // eslint-disable-line
    } catch (e) {
      variantTheme = {};
    }
    return merge({}, defaultTheme, variantTheme, config);
  }

  render() {
    const {
      variant,
      config,
      ...rest,
    } = this.props;

    return (
      <ReactHighstocks
        { ...rest }
        config={ this.mergeConfig(variant, config) }
      />
    );
  }
}

Graph.defaultProps = {
  variant: 'dark',
  config: {},
};

Graph.propTypes = {
  /** Theme variant of the chart. */
  variant: React.PropTypes.oneOf(['dark', 'light']),
  /** Highstocks config object, overrides default themes per setting, see API documentation [here](http://api.highcharts.com/highstock). */
  config: PropTypes.object,
};

export default Graph;
