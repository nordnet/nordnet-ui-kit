import React, { PropTypes } from 'react';
import Icon from '../icon';

export default function Search({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="search" strokeWidth={strokeWidth}>
        <circle id="Oval" fill="none" stroke={stroke} cx="7" cy="7" r="6" vectorEffect="non-scaling-stroke" />
        <path d="M15.25,15.25 L11,11" fill={fill} stroke={stroke} vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

Search.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Search.defaultProps = Icon.defaultProps;
