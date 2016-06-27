import variables from './variables';

export default {
  navigator: {
    enabled: false,
  },

  rangeSelector: {
    enabled: false,
  },

  plotOptions: {
    series: {
      fillColor: {
        linearGradient: ['0%', '0%', '0%', '100%'],
        stops: [
          ['0%', 'rgba(255, 255, 255, 0.7)'],
          ['100%', 'rgba(255, 255, 255, 0.7)'],
        ],
      },
      marker: {
        enabled: false,
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
      color: '#000000',
      marker: {
        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },

    area: {
      color: '#000000',
      marker: {
        states: {
          hover: {
            fillColor: '#01709f',
            radius: 5,
            lineWidth: 2,
            lineColor: variables.colorBase,
            enabled: true,
          },
        },
      },
      states: {
        hover: {
          lineWidth: 1,
          halo: {
            size: 0,
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
