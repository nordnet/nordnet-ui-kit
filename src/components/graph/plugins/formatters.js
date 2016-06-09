import Highcharts from 'highcharts';
import * as definitions from '../definitions';

function isLongerThan(from, to, comparison) {
  return to - from > comparison;
}

function isSinglePointToday(points, minDate, maxDate) {
  const firstDate = new Date(minDate);
  const lastDate = new Date(maxDate);
  return points === 2 &&
      firstDate.getDate() !== new Date().getDate() &&
      firstDate.getDate() !== lastDate.getDate();
}

export function yAxisLabelFormatter() {
  if (this.value >= 0) {
    return Highcharts.numberFormat(this.value, this.chart.decimals ? this.chart.decimals : 2);
  }
  return '';
}

export function xAxisLabelFormatter() {
  const currentTime = new Date();
  let pointCount;
  try {
    pointCount = this.chart.series[0].points.length;
  } catch (e) {
    pointCount = 0;
  }

  if (this.axis) {
    if (isSinglePointToday(pointCount, this.axis.dataMin, this.axis.dataMax) || pointCount === 0) {
      if (this.isFirst) {
        return Highcharts.dateFormat(definitions.shortDateFormat, this.value);
      }
      return Highcharts.dateFormat(definitions.shortDateTimeFormat, this.value);
    }

    if (isLongerThan(this.axis.dataMin, currentTime, definitions.year)) {
      return Highcharts.dateFormat(definitions.yearFormat, this.value);
    } else if (isLongerThan(this.axis.dataMin, currentTime, definitions.month)) {
      return Highcharts.dateFormat(definitions.shortDateFormat, this.value);
    } else if (isLongerThan(this.axis.dataMin, currentTime, definitions.week)) {
      return Highcharts.dateFormat(definitions.shortDateTimeFormat, this.value);
    }
    // day
    return Highcharts.dateFormat(definitions.timeFormat, this.value);
  }
  return '';
}

export function tickPositioner() {
  const xAxis = this.chart.axes[0];
  const series = this.chart.series[0];
  const ticks = [];
  let i;
  let increment;
  let first = 0;
  let last = 0;
  let currentDataPixels;
  let lastDataPixels;

  if (series.processedXData && series.processedXData.length > 0) {
    // Need to find the first and last visible point, processedXData is not to be trusted
    for (i = 0; i < series.processedXData.length; i++) {
      if (series.processedXData[i] < xAxis.min) {
        first = i;
      }

      if (series.processedXData[i] <= xAxis.max) {
        last = i;
      }
    }

    increment = Math.floor((last - first) / 6) + 1;

    // Place tick positions at equal distance from each other
    for (i = first; i <= last && i < series.processedXData.length; i += increment) {
      currentDataPixels = xAxis.toPixels(series.processedXData[i]);
      lastDataPixels = xAxis.toPixels(ticks[ticks.length - 1]);
      if (ticks.length === 0 || (currentDataPixels - lastDataPixels) > xAxis.options.tickPixelInterval) {
        ticks.push(series.processedXData[i]);
      }
    }

    // If only 1 tick, add last as well
    if (ticks.length === 1 && series.processedXData.length > 1) {
      ticks.push(series.processedXData[series.processedXData.length - 1]);
    }
  }

  return ticks;
}
