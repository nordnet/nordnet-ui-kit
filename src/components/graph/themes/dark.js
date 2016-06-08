import { yAxisLabelFormatter, tickPositioner } from '../plugins/formatters.js'

export const theme = {
  colors: ['#00a9ec', '#A4D20E', '#e03288', '#800bc3', '#fda800', '#5bac26'],

  navigator: {
     enabled: true
  },

  rangeSelector: {
    enabled: true
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
      padding: '8px'
    },
    followPointer: true,
    useHTML: true
  }
};
