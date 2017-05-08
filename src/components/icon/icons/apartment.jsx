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
    <svg aria-hidden="true" focusable="false" {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-68.000000, -330.000000)" stroke={stroke}>
          <g id="apartment" transform="translate(68.000000, 330.000000)">
            <rect id="base" strokeWidth={strokeWidth} x="2" y="1" width="12" height="14" />
            <path d="M6.5,14 L6.5,9.5 L9.5,9.5 L9.5,14" id="door" />
            <g id="windows" transform="translate(4.000000, 3.000000)" strokeWidth={strokeWidth}>
              <path d="M6,4 L8,4" id="Path-506" />
              <path d="M3,4 L5,4" id="Path-506" />
              <path d="M0,4 L2,4" id="Path-506" />
              <path d="M6,1 L8,1" id="Path-506" />
              <path d="M3,1 L5,1" id="Path-506" />
              <path d="M0,1 L2,1" id="Path-506" />
            </g>
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
