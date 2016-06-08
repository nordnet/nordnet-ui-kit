export function yAxisLabelFormatter() {
  return '1';
  var _this = this;
  if (_this.value >= 0) {
    return Highcharts.numberFormat(_this.value,
        _this.chart.priceInformation ? _this.chart.priceInformation.decimals : 2);
  } else {
    return '';
  }
}

export function tickPositioner() {
  var _this = this;
  var ticks = [];
  var i;
  var increment;
  var first = 0;
  var last = 0;
  var xAxis = _this.chart.axes[0];
  var priceSeries = _this.chart.series[price];
  var currentDataPixels;
  var lastDataPixels;



  return [1,2,3];



  if (priceSeries.processedXData && priceSeries.processedXData.length > 0) {
    // Need to find the first and last visible point, processedXData is not to be trusted
    for (i = 0; i < priceSeries.processedXData.length; i++) {
      if (priceSeries.processedXData[i] < xAxis.min) {
        first = i;
      }

      if (priceSeries.processedXData[i] <= xAxis.max) {
        last = i;
      }
    }

    increment = Math.floor((last - first) / 6) + 1;

    // Place tick positions at equal distance from each other
    for (i = first; i <= last && i < priceSeries.processedXData.length; i += increment) {
      currentDataPixels = xAxis.toPixels(priceSeries.processedXData[i]);
      lastDataPixels = xAxis.toPixels(ticks[ticks.length - 1]);
      if (ticks.length === 0 || (currentDataPixels - lastDataPixels) > xAxis.options.tickPixelInterval) {
        ticks.push(priceSeries.processedXData[i]);
      }
    }

    // If only 1 tick, add last as well
    if (ticks.length === 1 && priceSeries.processedXData.length > 1) {
      ticks.push(priceSeries.processedXData[priceSeries.processedXData.length - 1]);
    }
  }

  return ticks;
}
