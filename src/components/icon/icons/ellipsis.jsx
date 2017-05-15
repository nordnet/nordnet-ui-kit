import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Ellipsis({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g
          id="icon"
          transform="translate(8.000000, 8.000000) translate(-2.000000, -8.000000) translate(-5.000000, 7.000000)"
          strokeWidth={strokeWidth}
          stroke={stroke}
          fill={fill}
        >
          <g id="ellipsis">
            <circle cx="1" cy="1" r="1" />
            <circle cx="7" cy="1" r="1" />
            <circle cx="13" cy="1" r="1" />
          </g>
        </g>
      </g>
    </svg>
  );
}

Ellipsis.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Ellipsis.defaultProps = Icon.defaultProps;
