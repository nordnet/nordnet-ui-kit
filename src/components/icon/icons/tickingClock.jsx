import React, { PropTypes } from 'react';
import defaultProps from './defaultProps';

export default function TickingClock({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="ticking-clock" transform="translate(1.000000, 1.000000)">
          <polyline id="Shape" stroke={stroke} strokeWidth={strokeWidth} points="7 4 7 7 9 9" />
          <path
            d="M14,7 C14,10.9 10.9,14 7,14 C3.1,14 0,10.9 0,7 C0,3.1 3.1,0 7,0 C8.9,0 10.7,0.8 11.9,2.1 L13.4,3.6"
            id="Shape"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <polygon id="Shape" fill={fill} points="10 5 15 0 15 5" />
        </g>
      </g>
    </svg>
  );
}

TickingClock.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

TickingClock.defaultProps = defaultProps;
