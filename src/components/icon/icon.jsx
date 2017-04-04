import React from 'react';

function getViewBoxValue(value, index, viewBoxValuesNames) {
  return { [viewBoxValuesNames[index]]: parseInt(value, 10) };
}

function viewBoxParser(string) {
  const viewBoxValuesNames = {
    0: 'minX',
    1: 'minY',
    2: 'width',
    3: 'height',
  };

  const values = string[0].split(' ');
  return values.reduce((result, value, index) => Object.assign(result, getViewBoxValue(value, index, viewBoxValuesNames)), {});
}

function getModeStrokeWidth(strings) {
  if (strings.length > 0) {
    const frequency = strings.reduce(
      (result, value) => Object.assign(result, { [value]: (result[value] || 0) + 1 }), {});

    const maxFrequencyKey = Object.keys(frequency).reduce(
      (previous, current) => (frequency[current] > frequency[previous] ? current : previous));

    return { modeStrokeWidth: parseInt(maxFrequencyKey, 10) };
  }

  return { modeStrokeWidth: 1 };
}

const infoRegexes = [
  { regex: /viewBox="(.+?)"/g, handler: viewBoxParser },
  { regex: /stroke-width="((?!0).*?)"/g, handler: getModeStrokeWidth },
];

function matcher(svg) {
  return function matchRegex(regex) {
    const match = regex.exec(svg);
    return match ? match.slice(1).concat(matchRegex(regex)) : [];
  };
}

function mapSvg(svg) {
  return ({ regex, handler }) => {
    const matches = matcher(svg)(regex);
    return handler(matches);
  };
}

function getInfo(svg) {
  return Object.assign.apply(this, infoRegexes.map(mapSvg(svg)));
}

const rootElemHandler = options => (match, originalValue, contents) =>
  `<${options.rootElement || originalValue} ${contents}</${options.rootElement || originalValue}>`;

const adjustViewBoxValue = options => (value, index) => {
  if (index < 2) return `${value - (options.strokeWidthDifference / -2)}`;
  return `${value - options.strokeWidthDifference}`;
};

const adjustViewBox = (originalValue, options) =>
  originalValue.split(' ').map(adjustViewBoxValue(options)).join(' ');

const viewBoxHandler = options => (match, originalValue) =>
  `viewBox="${adjustViewBox(originalValue, options)}"`;

const fillHandler = options => (match, originalValue) =>
  `fill="${options.fill || originalValue}"`;

const strokeHandler = options => (match, originalValue) =>
  `stroke="${options.stroke || originalValue}"`;

const strokeWidthHandler = options => (match, originalValue) =>
  `stroke-width="${options.strokeWidth || originalValue}"`;

const regexes = options => [
  { regex: /^<(.+?)\s(.+)<\/(.+)>$/g,
    handler: rootElemHandler(options) },
  { regex: /viewBox="(.+?)"/g,
    handler: viewBoxHandler(options) },
  { regex: /fill="((?!none).+?)"/g,
    handler: fillHandler(options) },
  { regex: /stroke="((?!none).*?)"/g,
    handler: strokeHandler(options) },
  { regex: /stroke-width="((?!0).*?)"/g,
    handler: strokeWidthHandler(options) },
];

function toTemplateString(svg, options) {
  return regexes(options).reduce((data, { regex, handler }) => data.replace(regex, handler), svg);
}

function getSVGIcon(data, options = {}) {
  const info = getInfo(data);
  const strokeWidthDifference = options.strokeWidth > 0 ? info.modeStrokeWidth - options.strokeWidth : 0;
  const result = { data: toTemplateString(data, Object.assign({}, options, { strokeWidthDifference })) };

  if (strokeWidthDifference !== 0) {
    result.originalInfo = info;
    result.info = {};
    result.info.width = result.originalInfo.width - strokeWidthDifference;
    result.info.height = result.originalInfo.height - strokeWidthDifference;
  } else {
    result.info = info;
  }

  return result;
}

function Icon({
  className,
  style,
  type,
  fill,
  stroke,
  strokeWidth,
  width,
  height,
}) {
  const SVGIcon = require(`../../icons/${type}.svg`); // eslint-disable-line import/no-dynamic-require, global-require
  const icon = getSVGIcon(SVGIcon, { rootElement: 'svg', fill, stroke, strokeWidth });

  const styles = Object.assign({
    display: 'inline-block',
    width: width || icon.info.width,
    height: height || icon.info.height,
  }, style);

  return (
    <span style={styles} className={className} dangerouslySetInnerHTML={{ __html: icon.data }} />
  );
}

Icon.defaultProps = {
  renderInline: false,
  fill: '#222',
  stroke: '#222',
  strokeWidth: 2,
};

Icon.propTypes = {
  className: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  /** Needs to be a valid colour */
  fill: React.PropTypes.string,
  /** Needs to be a valid colour */
  stroke: React.PropTypes.string,
  strokeWidth: React.PropTypes.number,
  /** Unitless pixel value */
  width: React.PropTypes.number,
  /** Unitless pixel value */
  height: React.PropTypes.number,
  style: React.PropTypes.object,
};

export default Icon;
