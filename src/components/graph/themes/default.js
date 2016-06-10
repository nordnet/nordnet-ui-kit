import {
  yAxisLabelFormatter,
  xAxisLabelFormatter,
  tickPositioner,
  tooltipPositioner,
  tooltipFormatter,
} from '../plugins/formatters.js';

export default {
  chart: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
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

  yAxis: [
    {
      labels: {
        formatter: yAxisLabelFormatter,
        style: {
          fontSize: '10px',
        },
        align: 'left',
        x: -10,
        y: 0,
      },
      gridLineColor: '#ededed',
      gridZIndex: 2,
      gridLineWidth: 1,
      lineWidth: 0,
      title: {
        text: '',
      },
      opposite: true,
    },
  ],

  xAxis: {
    floor: 0,
    type: 'datetime',
    ordinal: true,
    offset: 0,
    tickColor: '#ededed',
    minRange: 900000,
    tickPixelInterval: 130,
    tickPositioner,
    labels: {
      formatter: xAxisLabelFormatter,
      style: {
        fontSize: '10px',
      },
    },
  },

  navigator: {
    enabled: true,
    xAxis: {
      labels: {
        formatter: xAxisLabelFormatter,
      },
    },
  },

  tooltip: {
    positioner: tooltipPositioner,
    formatter: tooltipFormatter,
    backgroundColor: '#fff',
    borderColor: '#d1cfcf',
    borderRadius: 0,
    borderWidth: 0,
    shared: true,
    shadow: false,
    style: {
      color: '#333333',
      font: '14px',
      padding: '8px',
    },
    followPointer: true,
    useHTML: true,
  },
};
