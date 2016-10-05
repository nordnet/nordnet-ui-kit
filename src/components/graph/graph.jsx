import React, { PropTypes } from 'react';
import ReactHighstocks from 'react-highcharts/dist/ReactHighstock';
import merge from 'lodash.merge';
import { baseTheme, lightTheme, darkTheme, mutedTheme } from './themes';
import RangeSelector from '../range-selector/';
import dateMath from 'date-arithmetic';
import './graph.scss';

const counts = {
  '1m': 30,
  '3m': 90,
  '6m': 180,
  '1y': 365,
};

class Graph extends React.Component {
  constructor(props) {
    super(props);

    this.setZoom = this.setZoom.bind(this);
  }

  setZoom({ type }) {
    const chart = this.chart.getChart();
    const { max, dataMin, dataMax } = chart.xAxis[0];

    switch (type) {
      case 'all':
        chart.xAxis[0].setExtremes(dataMin, dataMax);
        break;
      case 'ytd':
        chart.xAxis[0].setExtremes(
          dateMath.startOf(new Date(dataMax), 'year').getTime()
        , dataMax);
        break;
      default:
        chart.xAxis[0].setExtremes(
          dateMath.startOf(dateMath.subtract(max, counts[type] || 30, 'day'), 'day').getTime()
        , max);
    }
  }

  mergeConfig(variant, config, other) {
    switch (variant) {
      case 'light':
        return merge({}, other, lightTheme, config);
      case 'dark':
        return merge({}, other, darkTheme, config);
      case 'muted':
        return merge({}, other, mutedTheme, config);
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

    return (
      <div>
        <RangeSelector clickHandler={ this.setZoom } variant={ this.props.variant } />
        <ReactHighstocks
          { ...rest }
          config={ this.mergeConfig(variant, config) }
          ref={ (chart) => { this.chart = chart; } }
        />
      </div>
    );
  }
}

Graph.defaultProps = {
  variant: 'dark',
  config: {},
};

Graph.propTypes = {
  /** Theme variant of the chart. */
  variant: PropTypes.oneOf(['light', 'dark', 'muted']),
  /** Highstocks config object, overrides default themes per setting, see API documentation [here](http://api.highcharts.com/highstock). */
  config: PropTypes.object,
};

export default Graph;
