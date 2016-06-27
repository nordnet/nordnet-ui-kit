import variables from './variables';
import chroma from 'chroma-js';

export default {
  navigator: {
    enabled: true,
  },

  rangeSelector: {
    enabled: true,
  },

  chart: {
    zoomType: 'x',
    marginBottom: 5,
    backgroundColor: variables.colorInfo,
    borderColor: '#D6D6D6',
    spacingLeft: 8,
    spacingRight: 8,
    animation: false,
    style: {
      fontFamily: variables.fontPrimary,
      fontSize: '10px',
    },
    resetZoomButton: {
      position: {
        x: 0,
        y: -42,
      },
      theme: {
        fill: '#EBEAEA',
        stroke: variables.colorBase,
        r: 0,
        states: {
          hover: {
            fill: variables.colorBase,
            stroke: variables.colorBase,
            style: {
              color: variables.colorBase,
            },
          },
        },
      },
    },
  },

  plotOptions: {
    series: {
      // fillColor: {
      //   linearGradient: ['0%', '0%', '0%', '100%'],
      //   stops: [
      //     ['0%', chroma(variables.colorInfo).alpha(0.7).css()],
      //     ['100%', chroma(variables.colorInfo).alpha(0.7).css()],
      //   ],
      // },
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
      color: variables.colorBase,
      marker: {
        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },

    area: {
      color: variables.colorBase,
      fillColor: chroma(variables.colorBase).alpha(0.3).css(),
      marker: {
        states: {
          hover: {
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
      lineColor: variables.colorDanger,
      color: chroma(variables.colorDanger).alpha(0.75).css(),
      upLineColor: variables.colorPrimary,
      upColor: chroma(variables.colorPrimary).alpha(0.75).css(),
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

  yAxis: [{
    labels: {
      style: {
        fontSize: 10,
        color: variables.colorBase,
      },
    },
    tickPosition: 'inside',
    gridLineColor: chroma(variables.colorBase).alpha(0.2).css(),
    lineColor: variables.colorBase,
    lineWidth: 1,
  }],

  xAxis: {
    labels: {
      style: {
        color: variables.colorBase,
      },
    },
    lineColor: variables.colorBase,
    lineWidth: 1,
  },
};
