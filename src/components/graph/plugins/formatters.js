import * as definitions from '../definitions';
import { getHighstocks } from '../react-highstocks';

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

function isPointFirst(data) {
  return data.points[0].point.index === 0;
}

function hasPointPrice(data) {
  return data && data.points && data.points.length > 0;
}

function hasPointVolume(data) {
  return data && data.points && data.points.length > 1;
}

function hasPriceSeries(data) {
  return data &&
      data.points &&
      data.points.length > 0 &&
      data.points[0].series;
}

export function yAxisLabelFormatter() {
  if (this.value >= 0) {
    return getHighstocks().numberFormat(this.value, this.chart.decimals ? this.chart.decimals : 2);
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
        return getHighstocks().dateFormat(definitions.shortDateFormat, this.value);
      }
      return getHighstocks().dateFormat(definitions.shortDateTimeFormat, this.value);
    }

    if (isLongerThan(this.axis.dataMin, currentTime, definitions.year)) {
      return getHighstocks().dateFormat(definitions.yearFormat, this.value);
    } else if (isLongerThan(this.axis.dataMin, currentTime, definitions.month)) {
      return getHighstocks().dateFormat(definitions.shortDateFormat, this.value);
    } else if (isLongerThan(this.axis.dataMin, currentTime, definitions.week)) {
      return getHighstocks().dateFormat(definitions.shortDateTimeFormat, this.value);
    }
    // day
    return getHighstocks().dateFormat(definitions.timeFormat, this.value);
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

export function tooltipPositioner() {
  return { x: 0, y: 0 };
}

function tooltipElement(title, bold, extra) {
  return `<span class="webapp-graph-tooltip">${title || ''} <b>${bold || ''}</b> ${extra || ''}</span>`;
}

export function tooltipFormatter() {
  const translations = this.points[0].series.chart.translations;
  const decimals = this.points[0].series.chart.decimals || 2;
  const currentTime = new Date();
  let dateString = '';
  let tooltipString = '';
  let series;
  let pointCount;

  if (hasPriceSeries(this)) {
    series = this.points[0].series;
    try {
      pointCount = series.points.length;
    } catch (e) {
      pointCount = 0;
    }

    if (isSinglePointToday(pointCount, series.xAxis.dataMin, series.xAxis.dataMax)) {
      if (isPointFirst(this)) {
        dateString = getHighstocks().dateFormat(definitions.shortDateFormat, this.x);
      } else {
        dateString = getHighstocks().dateFormat(definitions.shortDateTimeFormat, this.x);
      }
    } else if (isLongerThan(series.xAxis.dataMin, currentTime, definitions.year)) { // year
      dateString = getHighstocks().dateFormat(definitions.fullYearFormat, this.x);
    //  console.log(dateString);
    } else if (isLongerThan(series.xAxis.dataMin, currentTime, definitions.month)) { // month
      dateString = getHighstocks().dateFormat(definitions.fullDateFormat, this.x);
    }
    // week & day
    dateString = getHighstocks().dateFormat(definitions.fullDateTimeFormat, this.x);
  }

  tooltipString = tooltipElement(null, dateString);

  if (hasPointPrice(this)) {
    tooltipString += tooltipElement(translations.price,
      getHighstocks().numberFormat(this.points[0].y, decimals));
  }

  if (hasPointVolume(this)) {
    tooltipString += tooltipElement(translations.volume,
      getHighstocks().numberFormat(this.points[1].y, decimals));
  }

  return tooltipString;
}
