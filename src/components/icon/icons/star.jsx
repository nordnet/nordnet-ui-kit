import React, { PropTypes } from 'react';
import Icon from '../icon';

export default function Star({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="star" strokeWidth={strokeWidth} stroke={stroke}>
          <path
            d="M8.01000071,2.1000061 L6.01000068,6.10000616 L1.61000061,6.74000617 L4.81000066,9.86000622 L4.09000065,14.2600063
            L8.01000071,12.1800063 L11.9300008,14.2600063 L11.2100008,9.86000622 L14.4100008,6.74000617 L10.0100007,6.10000616
            L8.01000071,2.1000061 L8.01000071,2.1000061 L8.01000071,2.1000061 Z"
          />
        </g>
      </g>
    </svg>
  );
}

Star.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Star.defaultProps = Icon.defaultProps;
