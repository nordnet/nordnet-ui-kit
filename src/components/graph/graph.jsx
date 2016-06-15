import React, { PropTypes } from 'react';
import ReactHighstocks from 'react-highcharts/dist/ReactHighstock';
import merge from 'lodash.merge';
import {
  baseTheme,
  lightTheme,
  darkTheme,
} from './index';

class Graph extends React.Component {
  mergeConfig(variant, config) {
    switch (variant) {
      case 'light':
        return merge({}, lightTheme, config);
      case 'dark':
        return merge({}, darkTheme, config);
      default:
        return merge({}, baseTheme, config);
    }
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
  variant: React.PropTypes.oneOf(['light', 'dark']),
  /** Highstocks config object, overrides default themes per setting, see API documentation [here](http://api.highcharts.com/highstock). */
  config: PropTypes.object,
};

export default Graph;
