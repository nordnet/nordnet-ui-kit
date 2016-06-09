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

  renderChart(config, translations) {
    if (!config) {
      throw new Error(`Config must be specified for the Highcharts${this.props.chartType} component`);
    }

    // Need to apply translations before chart is created.
    if (translations) {
      this.Highcharts.setOptions(translations);
    }

    const chartConfig = config.chart;
    this.chart = new this.Highcharts[this.props.chartType]({
      ...config,
      chart: {
        ...chartConfig,
        renderTo: this.refs.chart,
      },
    }, this.props.callback);

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
  callback: () => {},
};

ChartsFactory.propTypes = {
  chartType: PropTypes.string.isRequired,
  highcharts: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  translations: PropTypes.object,
  isPureConfig: PropTypes.bool,
  neverReflow: PropTypes.bool,
  callback: PropTypes.func,
};

export default ChartsFactory;
