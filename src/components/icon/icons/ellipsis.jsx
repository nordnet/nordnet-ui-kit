import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Ellipsis({
  stroke,
  fill,
  strokeWidth,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg style={style} {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g
          transform="translate(8.000000, 8.000000) translate(-2.000000, -8.000000) translate(-5.000000, 7.000000)"
          strokeWidth={strokeWidth}
          stroke={stroke}
          fill={fill}
        >
          <g>
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
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Ellipsis.defaultProps = Icon.defaultProps;
