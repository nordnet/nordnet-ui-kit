import React, { PropTypes } from 'react';
import Icon from '../icon';

export default function VerticalEllipsis({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g
          id="icon"
          transform="translate(2.000000, 8.000000) rotate(90.000000) translate(-2.000000, -8.000000) translate(-5.000000, 7.000000)"
          strokeWidth={strokeWidth}
          stroke={stroke}
          fill={fill}
        >
          <g id="vertical-ellipsis">
            <circle id="Oval" cx="1" cy="1" r="1" />
            <circle id="Oval" cx="7" cy="1" r="1" />
            <circle id="Oval" cx="13" cy="1" r="1" />
          </g>
        </g>
      </g>
    </svg>
  );
}

VerticalEllipsis.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

VerticalEllipsis.defaultProps = {
  ...Icon.defaultProps,
  width: 4,
  height: 16,
  viewBox: '0 0 4 16',
};
