/**
 * Creates a global "addWheelListener" method
 * IE9+, FireFox v29+, Chrome v36+
 */
function addWheelListener(elem, callback) {
  // Detect available wheel event
  // Webkit and IE support at least 'mousewheel'
  const mousewheel = document.onmousewheel !== undefined ? 'mousewheel' : '';
  // Modern browsers support 'wheel'
  const eventName = 'onwheel' in document.createElement('div') ? 'wheel' : mousewheel;
  let event;

  if (window.addEventListener && eventName !== '') {
    elem.addEventListener(eventName, eventName === 'wheel' ? callback : (originalEvent) => {
      // IE needs special treatment
      if (originalEvent) {
        // Create a normalized event object
        event = {
          // keep a ref to the original event object
          originalEvent,
          target: originalEvent.target || originalEvent.srcElement,
          type: 'wheel',
          deltaMode: 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault: () => {
            originalEvent.preventDefault();
          },
        };

        // Calculate deltaY according to the event
        event.deltaY = -1 / 40 * originalEvent.wheelDelta;

        return callback(event);
      }
      return callback;
    }, false);
  }
}

export default function initMouseWheelZoom(Highcharts, chart) {
  const chartRef = chart;
  addWheelListener(document.getElementById(chartRef.container.id), (e) => {
    if (chartRef.selected === true) {
      setZoom(chartRef, e.deltaY);
      e.preventDefault();
    }
  });

  Highcharts.addEvent(document.getElementById(chartRef.container.id), 'mousedown', () => {
    chartRef.selected = true;
  });

  Highcharts.addEvent(document.getElementById(chartRef.container.id), 'mouseleave', () => {
    chartRef.selected = false;
  });
}

function setZoom(chart, delta) {
  if (!chart.hoverPoints || !chart.hoverPoints.length) {
    return;
  }

  const data = chart.series[0].xData;
  const min = chart.xAxis[0].getExtremes().min;
  const max = chart.xAxis[0].getExtremes().max;

  // Need to iterate through all points, processedXData
  // in Highcharts is not a reliable source.
  const firstPoint = findPoint(data, 0, min) || 0;
  const hoverPoint = findPoint(data, firstPoint, chart.hoverPoints[0].x) || 0;
  const lastPoint = findPoint(data, hoverPoint, max) || data.length - 1;

  const diff = lastPoint - firstPoint;
  const percent = (hoverPoint - firstPoint) / diff;

  // Normalize delta, value per click differs depending on browser.
  const newDelta = delta < 0 ? 0.3 : -0.3;

  // Calculate new min and max and pick out the x-axis values for them.
  const newMin = data[Math.floor(firstPoint + (newDelta * diff * percent))];
  const newMax = data[Math.ceil(lastPoint - (newDelta * diff * (1 - percent)))];

  if (newDelta < 0 && newMax === undefined || newMin === undefined) {
    chart.zoomOut();
    return;
  }

  chart.zoom({
    xAxis: [
      {
        axis: chart.xAxis[0],
        min: newMin,
        max: newMax,
      },
    ],
    yAxis: [
      {
        axis: chart.yAxis[0],
        min: chart.yAxis[0].getExtremes().dataMin,
        max: chart.yAxis[0].getExtremes().dataMax,
      },
    ],
  });
}

function findPoint(data, start, value) {
  let i;
  for (i = start; i < data.length; i++) {
    if (data[i] >= value) {
      return i;
    }
  }
  return i;
}
