import React, { PropTypes } from 'react';
import defaultProps from './defaultProps';

export default function User({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-1009.000000, -141.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="user" transform="translate(1009.000000, 141.000000)">
            <path d="M5.57799916,9.79029905 C4.62116598,10.1636355 1,11 1,11 L1,15 L15,15 L15,11 L10.4710981,9.81636214" id="body" />
            <path d="M4,5 C4,8.3 5.8,11 8,11 C10.2,11 12,8.3 12,5 C12,2.8 10.2,1 8,1 C5.8,1 4,2.8 4,5 L4,5 Z" id="head" />
          </g>
        </g>
      </g>
    </svg>
  );
}

User.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

User.defaultProps = defaultProps;
