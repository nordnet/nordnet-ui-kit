import React, { PropTypes } from 'react';
import ReactHighstocks from 'react-highcharts/dist/ReactHighstock';
import merge from 'lodash.merge';
import { baseTheme, lightTheme, darkTheme } from './themes';

class Graph extends React.Component {
  mergeConfig(variant, config, other) {
    switch (variant) {
      case 'light':
        return merge({}, other, lightTheme, config);
      case 'dark':
        return merge({}, other, darkTheme, config);
      default:
        return merge({}, other, baseTheme, config);
    }
  }

  render() {
    const {
      variant,
      config,
      ...rest,
    } = this.props;

    const labelStyle = {
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
    };

    const labels = {
      labels: {
        items: [{
          html: 'High',
          style: labelStyle,
        }, {
          html: 'Low',
          style: labelStyle,
        }, {
          html: 'Close',
          style: labelStyle,
        }],
      },
    };

    const _config = this.mergeConfig(variant, config, labels);
    console.log(_config);

    return <ReactHighstocks { ...rest } config={ _config } />;
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
