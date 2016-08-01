import variables from './variables';

const tickStyle = {
  tickColor: variables.colorGrayDark,
  tickLength: 4,
  tickPosition: 'outside',
  tickWidth: 1,
};

const tickLabelStyle = {
  color: variables.colorGrayDark,
  fontSize: '10px',
  fontWeight: '400',
};

export default {
  navigator: {
    enabled: false,
  },

  rangeSelector: {
    enabled: false,
  },

  chart: {
    spacingLeft: 14,
  },

  yAxis: [{
    lineWidth: 1,
    lineColor: variables.colorGray,
    gridLineDashStyle: 'Dash',
    gridLineColor: variables.colorGrayLight,
    opposite: false,
    labels: {
      align: 'right',
      x: -6,
      style: tickLabelStyle,
    },
    ...tickStyle,
  }],

  xAxis: [{
    lineWidth: 1,
    lineColor: variables.colorGray,
    ...tickStyle,
    labels: {
      style: tickLabelStyle,
      y: 14,
    },
    crosshair: {
      color: variables.colorGray,
    },
  }],

  colors: [
    variables.colorInfo,
    variables.colorPrimary,
    variables.colorWarning,
  ],

  plotOptions: {
    series: {
      fillColor: 'none',
      marker: {
        fillColor: variables.colorBase,
        lineColor: null,
        symbol: 'circle',
      },
      animation: false,
      threshold: null,
      lineWidth: 2,
      turboThreshold: 50,
    },

    column: {
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0)',
      color: 'rgba(255, 255, 255, 1)',
      states: {
        hover: {
          borderColor: variables.colorPrimary,
          color: variables.colorPrimary,
        },
      },
    },

    line: {
      enableMouseTracking: false,
      marker: {
        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },

    candlestick: {
      lineColor: '#B4001D',
      color: 'rgba(224, 0, 36, 0.75)',
      upLineColor: '#0082B6',
      upColor: 'rgba(0, 169, 236, 0.75)',
      pointPadding: 0.3,
      states: {
        hover: {
          lineWidth: 2,
          halo: {
            size: 0,
          },
        },
      },
    },
  },
};
