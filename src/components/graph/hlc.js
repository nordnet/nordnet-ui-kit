import variables from './themes/variables';
import maxBy from 'lodash.maxby';
import minBy from 'lodash.minby';

function getHLC(chart) {
  // TODO: Add Close
  const data = chart.series[0].points.filter(({ plotX }) => plotX >= 0);
  const { y: max, plotY: maxY, plotX: maxX } = maxBy(data, ({ y }) => y);
  const { y: min, plotY: minY, plotX: minX } = minBy(data, ({ y }) => y);

  return [{
    type: 'high',
    value: max,
    x: Math.round(maxX),
    y: Math.round(maxY),
  }, {
    type: 'low',
    value: min,
    x: Math.round(minX),
    y: Math.round(minY),
  }];
}

function drawLabel(label) {
  const labelName = `label--${label.type}`;

  if (this[labelName]) {
    this[labelName].destroy();
  }

  // Label Container
  this[labelName] = this.renderer.g(labelName).attr({
    zIndex: 3,
  }).add();

  const xOffset = 8;
  const colors = {
    high: variables.colorSuccess,
    low: variables.colorDanger,
    close: variables.colorDanger,
  };

  // Label Stroke
  this.renderer.path([
    'M',
    xOffset,
    label.y + 9.5, // Align to middle of pixel to ensure no half pixels are drawn
    'L',
    this.chartWidth - 8,
    label.y + 9.5, // Align to middle of pixel to ensure no half pixels are drawn
  ]).attr({
    'stroke-width': 1,
    stroke: colors[label.type],
  }).add(this[labelName]);

  // Label Point
  this.renderer.circle(
    label.x + 7,
    label.y + 9.5,
    4
  ).attr({
    'stroke-width': 2,
    stroke: '#fff',
    fill: colors[label.type],
  }).add(this[labelName]);

  // Label Value
  this.renderer.label(
    `${label.type[0].toUpperCase()}. ${label.value}`,
    xOffset,
    label.y - 8
  ).css({
    color: '#fff',
    fontSize: '10px',
  }).attr({
    padding: 2,
    fill: colors[label.type],
  }).add(this[labelName]);
}

export default function drawHLC() {
  getHLC(this).forEach(drawLabel.bind(this));
}
