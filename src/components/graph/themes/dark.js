import { yAxisLabelFormatter, xAxisLabelFormatter, tickPositioner } from '../plugins/formatters.js';

export const theme = {
  colors: ['#00a9ec', '#A4D20E', '#e03288', '#800bc3', '#fda800', '#5bac26'],

  navigator: {
    enabled: true,
  },

  rangeSelector: {
    enabled: true,
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
        fontSize: 10,
      },
      maxStaggerLines: 1,
      overflow: 'justify',
    },
  },

  tooltip: {
    //    positioner: tooltipPositioner,
    //    formatter: tooltipFormatter,
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
