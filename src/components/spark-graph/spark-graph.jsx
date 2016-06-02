import React, { PropTypes } from 'react';
import classNames from 'classnames';
import variables from '../../utilities/variables';
import './spark-graph.scss';

function transformPoints(points, height, strokeWidth) {
  const effectiveHeight = height - strokeWidth;
  const horizontalPadding = strokeWidth / 2;
  const { min, max } = getMinMax(points);
  if (min === max) {
    // The line must be exactly horizontal, normalization not possible
    return [height / 2, height / 2];
  }
  return points.map(point => horizontalPadding + effectiveHeight -
    (((point - min) / (max - min)) * effectiveHeight));
}

function getMinMax(points) {
  return {
    min: Math.min(...points),
    max: Math.max(...points),
  };
}

function buildPathString(points, width) {
  const xInc = width / (points.length - 1);
  return `M 0 ${points[0]} ${points.slice(1).reduce((prev, curr, index) =>
    `${prev} L ${(index + 1) * xInc} ${curr}`, '')}`;
}

export default function SparkGraph({
  points,
  stroke,
  strokeWidth,
  width,
  height,
  className,
  style,
}) {
  const classes = classNames('spark-graph', className);
  const styles = Object.assign({
    width: `${width}px`,
    height: `${height}px`,
  }, style);
  let actualStroke = stroke;
  if (!stroke) {
    if (points[0] > points[points.length - 1]) {
      actualStroke = variables.colorDanger;
    } else if (points[0] < points[points.length - 1]) {
      actualStroke = variables.colorSuccess;
    } else {
      actualStroke = variables.colorText;
    }
  }
  const transformedPoints = transformPoints(points, height, strokeWidth);
  return (
    <svg
      className={ classes }
      style={ styles }
      viewBox={ `0 0 ${width} ${height}` }
    >
      <path
        className="spark-graph__path"
        d={ buildPathString(transformedPoints, width) }
        stroke={ actualStroke }
        strokeWidth={ strokeWidth }
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

SparkGraph.propTypes = {
  /**
    Needs to be an array of at least 2 numbers
  */
  points: (props, propName, componentName) => {
    const points = props[propName];
    if (!points) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. 
        Points undefined`
      );
    }
    if (!Array.isArray(points)) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. 
        Points need to be array`
      );
    }
    if (points.length < 2) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. 
        Need more than 2 points`
      );
    }
    if (points.some(isNaN)) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. 
        Need to be an array of numbers`
      );
    }
    return null;
  },
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  /**
    Width in px
  */
  width: PropTypes.number,
  /**
    Height in px
  */
  height: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

SparkGraph.defaultProps = {
  width: 128,
  height: 32,
  strokeWidth: 1,
};
