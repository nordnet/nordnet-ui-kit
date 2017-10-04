import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Hexagon({
  text,
  fontFamily,
  stroke,
  fill,
  fontFill,
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
      <path d="M 55,0 L 105,30 L 105,85 L 55,110 L 5,85 L 5,30 z" fill={fill} strokeWidth="0" />
      <text x="55" y="77" textAnchor="middle" fill={fontFill} fontFamily={fontFamily} fontSize="55">{text}</text>
    </svg>
  );
}

Hexagon.propTypes = {
  ...Icon.propTypes,
  text: PropTypes.string,
  fontFamily: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  fontFill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Hexagon.defaultProps = {
  ...Icon.defaultProps,
  fontFamily: 'Verdana',
  text: '',
  fontFill: 'white',
  viewBox: '0 0 110 110',
};
