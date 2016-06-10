import React, { PropTypes } from 'react';

class ChartsFactory extends React.Component {
  constructor(props) {
    super(props);
    this.Highcharts = props.highcharts;
  }

  componentDidMount() {
    this.renderChart(this.props.config, this.props.translations);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.neverReflow || (nextProps.isPureConfig && this.props.config === nextProps.config)) {
      return true;
    }
    this.renderChart(nextProps.config);
    return false;
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  getChart() {
    if (!this.chart) {
      throw new Error('getChart() should not be called before the component is mounted');
    }
    return this.chart;
  }

  renderChart(config) {
    if (!config) {
      throw new Error(`Config must be specified for the Highcharts${this.props.chartType} component`);
    }

    const chartConfig = config.chart;
    this.chart = new this.Highcharts[this.props.chartType]({
      ...config,
      chart: {
        ...chartConfig,
        renderTo: this.refs.chart,
      },
    }, this.props.callback);

    // Need this later for the formatters
    this.chart.decimals = this.props.decimals;
    this.chart.translations = this.props.translations;

    if (global.requestAnimationFrame && this.chart && this.chart.options) {
      requestAnimationFrame(() => { this.chart.reflow(); });
    }
  }

  render() {
    let props = this.props;
    props = {
      ...props,
      ref: 'chart',
    };
    return <div {...props} />;
  }
}

ChartsFactory.defaultProps = {
  decimals: 2,
  callback: () => {},
};

ChartsFactory.propTypes = {
  chartType: PropTypes.string.isRequired,
  highcharts: PropTypes.object.isRequired,
  decimals: PropTypes.number,
  config: PropTypes.object.isRequired,
  translations: PropTypes.object,
  isPureConfig: PropTypes.bool,
  neverReflow: PropTypes.bool,
  callback: PropTypes.func,
};

export default ChartsFactory;
