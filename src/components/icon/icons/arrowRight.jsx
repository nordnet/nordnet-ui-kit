import React, { PropTypes } from 'react';
import defaultProps from './defaultProps';

export default function ArrowRight({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g fill="none" fillRule="evenodd" stroke={stroke} strokeWidth={strokeWidth}>
        <polyline points="12.471 3 12.471 13 2.471 13" transform="rotate(-45 7.471 8)" />
        <path d="M15,8 L0,8" />
      </g>
    </svg>
  );
}

ArrowRight.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

ArrowRight.defaultProps = defaultProps;
