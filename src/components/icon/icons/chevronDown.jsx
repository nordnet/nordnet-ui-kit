import React, { PropTypes } from 'react';
import defaultProps from './defaultProps';

export default function ChevronDown({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-260.000000, -98.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="chevron-down" transform="translate(260.000000, 98.000000)">
            <path
              d="M0.75,5.75 L5,1.5 L9.25,5.75"
              id="Shape"
              transform="translate(5.000000, 3.625000) scale(1, -1) translate(-5.000000, -3.625000)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

ChevronDown.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

ChevronDown.defaultProps = {
  ...defaultProps,
  width: 10,
  height: 8,
  viewBox: '0 0 10 8',
};
