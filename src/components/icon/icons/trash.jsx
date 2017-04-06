import React, { PropTypes } from 'react';
import defaultProps from './defaultProps';

export default function Trash({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-1150.000000, -141.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="trash" transform="translate(1150.000000, 141.000000)">
            <rect id="base" x="2" y="4" width="12" height="11" />
            <rect id="handle" x="6" y="1" width="4" height="3" />
            <path d="M11,7 L11,12" id="line" />
            <path d="M8,7 L8,12" id="line" />
            <path d="M5,7 L5,12" id="line" />
          </g>
        </g>
      </g>
    </svg>
  );
}

Trash.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Trash.defaultProps = defaultProps;
