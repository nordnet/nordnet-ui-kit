import React, { PropTypes } from 'react';
import defaultProps from './defaultProps';

export default function ArrowUp({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-69.000000, -141.000000)" strokeWidth={strokeWidth} stroke={stroke}>
          <g id="arrow-up" transform="translate(69.000000, 141.000000)">
            <polyline id="Shape" points="5 1 15 1 15 11" />
            <path d="M15,1 L0.699996948,15.3000031" id="Shape" />
          </g>
        </g>
      </g>
    </svg>
  );
}

ArrowUp.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

ArrowUp.defaultProps = defaultProps;
