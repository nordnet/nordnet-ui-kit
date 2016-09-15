import variables from './variables';
import markersToFront from '../markers-to-front';

export default {
  chart: {
    marginBottom: 20,
    backgroundColor: variables.colorBase,
    borderColor: variables.colorBase,
    spacingLeft: 8,
    spacingRight: 8,
    animation: false,
    style: {
      // fontFamily: variables.fontPrimary,
      fontFamily: '\'Open Sans\', sans-serif',
      fontSize: '10px',
    },
    resetZoomButton: {
      position: {
        x: 0,
        y: 0,
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
              color: '#26282F',
            },
          },
        },
      },
    },
    events: {
      load: markersToFront,
    },
  },

  navigation: {
    buttonOptions: {
      enabled: false,
    },
  },

  scrollbar: {
    enabled: false,
  },

  legend: {
    enabled: false,
  },

  plotOptions: {
    series: {
      marker: {
        enabled: false,
        states: {
          hover: {
            radius: 5,
            lineWidth: 2,
            enabled: true,
            attributes: {
              zIndex: 7,
            },
          },
        },
      },
    },
    area: {
      lineWidth: 2,
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

  loading: {
    hideDuration: 0,
    showDuration: 0,
    style: {
      backgroundColor: 'white',
      opacity: 0.5,
      display: 'block',
    },
    labelStyle: {
      position: 'absolute',
      left: '50%',
      top: '40%',
      width: '50px',
      height: '50px',
      display: 'block',
    },
  },

  title: {
    text: '',
    color: '#000000',
    align: 'center',
    verticalAlign: 'top',
    style: {
      font: '12px Verdana, arial, sans-serif',
    },
  },

  subtitle: {
    text: '',
    floating: true,
    align: 'center',
    verticalAlign: 'top',
  },

  credits: {
    enabled: false,
  },

  yAxis: [{
    labels: {
      style: {
        fontSize: '10px',
      },
      y: 4,
    },
    gridLineColor: '#ededed',
    gridZIndex: 1,
    gridLineWidth: 1,
    lineWidth: 1,
    tickWidth: 1,
    title: {
      text: '',
    },
  }],

  xAxis: [{
    floor: 0,
    type: 'datetime',
    ordinal: true,
    offset: 0,
    tickColor: '#ffffff',
    tickPosition: 'inside',
    lineWidth: 1,
    tickPixelInterval: 130,
    tickWidth: 2,
    tickLength: 4,
    crosshair: {
      zIndex: 3,
    },
  }],

  navigator: {
    enabled: true,
    outlineWidth: 1,
    height: 40,
    margin: 0,
    series: {
      type: 'area',
      fillOpacity: 0.3,
      lineWidth: 0,
    },
    labels: {
      style: {
        fontSize: '10px',
      },
    },
  },

  rangeSelector: {
    enabled: false,
    inputEnabled: false,
  },

  tooltip: {
    backgroundColor: variables.colorBase,
    borderColor: variables.colorBase,
    borderRadius: 0,
    borderWidth: 0,
    shared: true,
    shadow: {
      color: 'rgba(0, 0, 0, .1)',
      opacity: 1,
      offsetX: 0,
      offsetY: 0,
      width: 4,
    },
    style: {
      color: variables.colorText,
      font: '14px',
      padding: '8px',
    },
    followPointer: true,
    useHTML: true,
  },
};
