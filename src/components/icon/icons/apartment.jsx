import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Apartment({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g stroke={stroke}>
          <rect strokeWidth={strokeWidth} x="2" y="1" width="12" height="14" />
          <path d="M6.5,14 L6.5,9.5 L9.5,9.5 L9.5,14" />
          <g transform="translate(4.000000, 3.000000)" strokeWidth={strokeWidth}>
            <path d="M6,4 L8,4" />
            <path d="M3,4 L5,4" />
            <path d="M0,4 L2,4" />
            <path d="M6,1 L8,1" />
            <path d="M3,1 L5,1" />
            <path d="M0,1 L2,1" />
          </g>
        </g>
      </g>
    </svg>
  );
}

Apartment.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Apartment.defaultProps = Icon.defaultProps;
