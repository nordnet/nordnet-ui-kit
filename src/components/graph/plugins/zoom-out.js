/**
 * Original plugin: Highstock Zoom Out Selection (1.0.1).
 * http://www.highcharts.com/plugin-registry/single/26/Zoom%20Out%20Selection
 *
 * Usage: Set zoomType to 'x'.
 */

export default function initZoom(Highcharts, chart) {
  const xAxis = chart.xAxis[0];
  const correction = 1.00001;
  let extremes;
  let dataMin;
  let dataMax;
  let min;
  let max;
  let selectFromPixels;
  let selectToPixels;
  let pixelDiff;
  let valueDiff;
  let newMin;
  let newMax;

  if (chart.options.chart.zoomType === 'x') {
    Highcharts.addEvent(chart.container, 'mousedown', (e) => {
      selectFromPixels = chart.pointer.normalize(e).chartX;
    });

    Highcharts.addEvent(chart.container, 'mouseup', (e) => {
      selectToPixels = chart.pointer.normalize(e).chartX;
      pixelDiff = selectToPixels - selectFromPixels;
    });

    Highcharts.addEvent(chart, 'selection', (e) => {
      if (pixelDiff < 0 && !e.resetSelection) {
        extremes = xAxis.getExtremes();
        dataMin = extremes.dataMin;
        dataMax = extremes.dataMax;
        min = extremes.min;
        max = extremes.max;

        valueDiff = Math.abs(xAxis.toValue(selectToPixels) - xAxis.toValue(selectFromPixels));
        newMin = Math.floor(min - valueDiff);
        newMax = Math.ceil(max + valueDiff);
        newMin = (newMin > dataMin * correction) ? newMin : dataMin;
        newMax = (newMax * correction < dataMax) ? newMax : dataMax;

        // Check if max zoomed out
        if (newMin === dataMin && newMax === dataMax) {
          chart.zoomOut();
        } else {
          xAxis.setExtremes(newMin, newMax);
        }

        e.preventDefault();
      }
    });
  }
}
