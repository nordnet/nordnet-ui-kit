import variables from './variables';
import chroma from 'chroma-js';
import hlc from '../hlc';

const tickLabelStyle = {
  color: variables.colorGrayDarker,
  fontSize: '10px',
  textShadow: 'none',
  fontWeight: '600',
};

export default {
  navigator: {
    outlineColor: chroma.mix(variables.colorBase, variables.colorGrayDarker, 0.7).css(),
    series: {
      color: '#fff',
    },
    xAxis: {
      gridLineColor: chroma(variables.colorGrayDark).alpha(0.3).css(),
      labels: {
        align: 'center',
        style: tickLabelStyle,
      },
    },
    handles: {
      backgroundColor: variables.colorGray,
      borderColor: variables.colorGrayDarker,
    },
    maskFill: chroma(variables.colorGrayDark).alpha(0.15).css(),
  },

  chart: {
    zoomType: 'x',
    backgroundColor: variables.colorGrayLight,
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
      color: variables.colorGrayDarker,
      states: {
        hover: {
          borderColor: variables.colorGrayDarker,
          color: variables.colorBase,
        },
      },
    },

    line: {
      enableMouseTracking: false,
      color: variables.colorGrayDarker,
      marker: {
        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },

    area: {
      color: variables.colorGrayDarker,
      fillColor: chroma(variables.colorGrayDarker).alpha(0.18).css(),
      marker: {
        states: {
          hover: {
            lineColor: variables.colorGrayDarker,
            fillColor: variables.colorGrayLighter,
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
    gridLineColor: variables.colorGray,
    lineColor: variables.colorGrayDark,
    tickLength: 0,
    opposite: true,
  }],

  xAxis: [{
    labels: {
      style: tickLabelStyle,
      y: -8,
    },
    lineColor: variables.colorGrayDark,
    tickColor: variables.colorGrayDark,
    crosshair: {
      color: chroma.mix(variables.colorBase, variables.colorGrayDarker, 0.7).css(),
    },
  }],

  noData: {
    style: {
      color: variables.colorGrayDarker,
    },
  },
};
