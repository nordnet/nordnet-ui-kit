import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Hexagon({
  stroke,
  fill,
  strokeWidth,
  height,
  width,
  viewBox,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg width={width} height={height} viewBox={viewBox} style={style} {...rest}>
      <path
        d="M 65,10 L 115,35 L 115,95 L 65,120 L 15,95 L 15,35 z"
        fill={fill}
        strokeWidth={strokeWidth}
        stroke={stroke}
        strokeLinejoin="miter"
      />
    </svg>
  );
}

Hexagon.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  fill: PropTypes.string,
  fontFill: PropTypes.string,
};

Hexagon.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 130 130',
};
