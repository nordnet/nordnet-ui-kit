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
    backgroundColor: 'rgba(60, 81, 148, 1)',
    borderColor: '#D6D6D6',
    spacingLeft: 8,
    spacingRight: 8,
    animation: false,
    style: {
      fontFamily: 'Verdana, Arial, sans-serif',
      fontSize: '10px',
    },
    resetZoomButton: {
      position: {
        x: 0,
        y: -42,
      },
      theme: {
        fill: '#EBEAEA',
        stroke: '#ffffff',
        r: 0,
        states: {
          hover: {
            fill: '#ffffff',
            stroke: '#ffffff',
            style: {
              color: '#ffffff',
            },
          },
        },
      },
    },
  },

  plotOptions: {
    series: {
      fillColor: {
        linearGradient: ['0%', '0%', '0%', '100%'],
        stops: [
          ['0%', 'rgba(119, 133, 180, 0.7)'],
          ['100%', 'rgba(119, 133, 180, 0.7)'],
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
          borderColor: '#00a8ef',
          color: '#00a8ef',
        },
      },
    },

    line: {
      enableMouseTracking: false,
      color: '#ffffff',
      marker: {
        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },

    area: {
      color: '#ffffff',
      marker: {
        states: {
          hover: {
            fillColor: '#01709f',
            radius: 5,
            lineWidth: 2,
            lineColor: '#ffffff',
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

  yAxis:
  [{
    labels: {
      style: {
        fontSize: 10,
        color: '#ffffff',
      },
    },
    gridLineColor: 'rgba(130, 143, 186, 0.5)',
  }],

  xAxis: {
    labels: {
      style: {
        color: '#ffffff',
      },
    },
  },
};
