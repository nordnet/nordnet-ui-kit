import variables from './variables';
import chroma from 'chroma-js';
import hlc from '../hlc';

const tickLabelStyle = {
  color: variables.colorBase,
  fontSize: '10px',
  textShadow: '0 1px 1px rgba(0, 0, 0, .3)',
  fontWeight: '600',
};

export default {
  navigator: {
    outlineColor: chroma.mix(variables.colorBase, variables.colorInfo, 0.3).css(),
    series: {
      color: '#fff',
    },
    xAxis: {
      gridLineColor: chroma(variables.colorBase).alpha(0.3).css(),
      labels: {
        align: 'center',
        style: tickLabelStyle,
      },
    },
    handles: {
      backgroundColor: chroma.mix(variables.colorBase, variables.colorInfo, 0.7).css(),
      borderColor: variables.colorBase,
    },
  },

  chart: {
    zoomType: 'x',
    backgroundColor: variables.colorInfo,
    events: {
      redraw: hlc,
    },
  },

  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
      animation: false,
      threshold: null,
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
            lineColor: variables.colorBase,
            fillColor: variables.colorInfo,
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
      style: tickLabelStyle,
      align: 'right',
      x: -5,
      tickPosition: 'inside',
    },
    gridLineColor: chroma(variables.colorBase).alpha(0.2).css(),
    lineColor: variables.colorBase,
    tickLength: 0,
    opposite: true,
  }],

  xAxis: [{
    labels: {
      style: tickLabelStyle,
      y: -8,
    },
    lineColor: variables.colorBase,
    crosshair: {
      color: chroma.mix(variables.colorBase, variables.colorInfo, 0.3).css(),
    },
  }],

  noData: {
    style: {
      color: '#fff',
    },
  },
};
