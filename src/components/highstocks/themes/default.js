export default {
  colors: ['#00a9ec', '#A4D20E', '#e03288', '#800bc3', '#fda800', '#5bac26'],
  chart: {
    marginBottom: 25,
    backgroundColor: '#ffffff',
    borderColor: '#D6D6D6',
    spacingLeft: 8,
    spacingRight: 8,
    animation: false,
    style: {
      fontFamily: 'Verdana, Arial, sans-serif',
      fontSize: '10px'
    },
    resetZoomButton: {
      position: {
        x: 0,
        y: 0
      },
      theme: {
        fill: '#EBEAEA',
        stroke: '#D5D3D4',
        r: 0,
        states: {
          hover: {
            fill: '#D5D3D4',
            stroke: '#D5D3D4',
            style: {
              color: '#26282F'
            }
          }
        }
      }
    }
  },

  navigation: {
    buttonOptions: {
      enabled: true
    }
  },

  navigator: {
    enabled: true
  },

  legend: {
    enabled: false
  },

  loading: {
    hideDuration: 0,
    showDuration: 0,
    style: {
      backgroundColor: 'white',
      opacity: 0.5,
      display: 'block'
    },
    labelStyle: {
      position: 'absolute',
      left: '50%',
      top: '40%',
      width: '50px',
      height: '50px',
      display: 'block'
    }
  },

  title: {
    text: '',
    color: '#000',
    align: 'center',
    verticalAlign: 'top',
    style: {
      font: '12px Verdana, arial, sans-serif'
    }
  },

  subtitle: {
    text: '',
    floating: true,
    align: 'center',
    verticalAlign: 'top'
  },

  yAxis: [
    {
      labels: {
        style: {
          fontSize: 10
        },
        align: 'left',
        x: 7,
        y: 0
      },
      gridLineColor: '#ededed',
      gridZIndex: 2,
      gridLineWidth: 1,
      lineWidth: 0,
      title: {
        text: ''
      },
      opposite: true,
      lastPriceIndicator: {
        backgroundColor: '#777777',
        borderColor: '#777777',
        dotBackgroundColor: '#00a8ef',
        enabled: true,
        style: {
          fontSize: 10
        }
      },
      closePriceIndicator: {
        backgroundColor: '#e9586e',
        borderColor: '#e9586e',
        dotBackgroundColor: '#e9586e',
        enabled: true,
        style: {
          fontSize: 10
        }
      },
      closePriceHorizontalIndicator: {
        lineColor: '#e9586e',
        lineOpacity: 0.4,
        enabled: true,
        style: {
          fontSize: 10
        }
      }
    },
    {
      top: '79%',
      height: '20%',
      labels: {
        enabled: false
      },
      gridLineWidth: 0,
      lineWidth: 0,
      title: {
        text: ''
      },
      opposite: true,
      offset: 0,
      min: 0
    }
  ],

  xAxis: {
    floor: 0,
    type: 'datetime',
    ordinal: true,
    offset: 0,
    tickColor: '#ededed',
    minRange: 900000,
    tickPixelInterval: 130,
    labels: {
      style: {
        fontSize: 10
      },
      maxStaggerLines: 1,
      overflow: 'justify'
    }
  },

  plotOptions: {
    series: {
      fillColor: {
        linearGradient: ['0%', '0%', '0%', '100%'],
        stops: [
          ['0%', 'rgba(0, 169, 236, 0.70)'],
          ['100%', 'rgba(0, 169, 236, 0.10)']
        ]
      },
      marker: {
        enabled: false
      },
      animation: false,
      threshold: null,
      lineWidth: 1,
      turboThreshold: 50
    },

    column: {
      borderWidth: 1,
      borderColor: 'rgba(187, 187, 187, 0.85)',
      color: 'rgba(187, 187, 187, 0.85)',
      states: {
        hover: {
          borderColor: '#00a8ef',
          color: '#00a8ef'
        }
      }
    },

    line: {
      enableMouseTracking: false,
      color: '#800bc3',
      marker: {
        states: {
          hover: {
            enabled: false
          }
        }
      }
    },

    area: {
      color: '#00a8ef',
      marker: {
        states: {
          hover: {
            fillColor: '#01709f',
            radius: 5,
            lineWidth: 2,
            lineColor: '#ffffff',
            enabled: true
          }
        }
      },
      states: {
        hover: {
          lineWidth: 1,
          halo: {
            size: 0
          }
        }
      }
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
            size: 0
          }
        }
      }
    },

    flags: {
      shape: 'circlepin',
      width: 13,
      height: 13,
      onSeries: 'price',
      cursor: 'pointer',
      lineWidth: 1,
      style: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '10px'
      },
      states: {
        hover: {
          brightness: 0
        }
      }
    }
  },

  tooltip: {
    backgroundColor: '#333',
    borderColor: '#d1cfcf',
    borderRadius: 0,
    borderWidth: 0,
    shared: true,
    shadow: false,
    style: {
      color: '#333333',
      font: '14px',
      padding: '8px'
    },
    followPointer: false,
    useHTML: true
  },

  credits: {
    enabled: false
  },

  rangeSelector: {
    selected: 1,
    enabled: true
  }
};
