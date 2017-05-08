import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Trash({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg aria-hidden="true" focusable="false" {...rest}>
      <g id="icons" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard" transform="translate(-66.000000, -6.000000)" fillRule="nonzero" fill={fill}>
          <g id="trash" transform="translate(66.000000, 6.000000)">
            <path
              d="M10.8,1.6 L8,1.6 L8,1.2 C8,0.5384 7.4616,0 6.8,0 L5.2,0 C4.5384,0 4,0.5384 4,1.2 L4,1.6 L1.2,1.6 C0.5384,1.6 0,2.1384
              0,2.8 L0,3.6 C0,4.1216 0.3344,4.5664 0.8,4.7312 L0.8,14.8 C0.8,15.4616 1.3384,16 2,16 L10,16 C10.6616,16 11.2,15.4616
              11.2,14.8 L11.2,4.7312 C11.6656,4.5664 12,4.1216 12,3.6 L12,2.8 C12,2.1384 11.4616,1.6 10.8,1.6 Z M4.8,1.2 C4.8,0.9792
              4.9792,0.8 5.2,0.8 L6.8,0.8 C7.0208,0.8 7.2,0.9792 7.2,1.2 L7.2,1.6 L4.8,1.6 L4.8,1.2 Z M10,15.2 L2,15.2 C1.7792,15.2
              1.6,15.0208 1.6,14.8 L1.6,4.8 L10.4,4.8 L10.4,14.8 C10.4,15.0208 10.2208,15.2 10,15.2 Z M11.2,3.6 C11.2,3.8208 11.0208,4
              10.8,4 L1.2,4 C0.9792,4 0.8,3.8208 0.8,3.6 L0.8,2.8 C0.8,2.5792 0.9792,2.4 1.2,2.4 L10.8,2.4 C11.0208,2.4 11.2,2.5792
              11.2,2.8 L11.2,3.6 Z"
              id="Shape"
            />
            <path
              d="M7.6,5.6 C7.3792,5.6 7.2,5.7792 7.2,6 L7.2,14 C7.2,14.2208 7.3792,14.4 7.6,14.4 C7.8208,14.4 8,14.2208 8,14 L8,6 C8,5.7792
              7.8208,5.6 7.6,5.6 Z"
              id="Shape"
            />
            <path
              d="M4.4,5.6 C4.1792,5.6 4,5.7792 4,6 L4,14 C4,14.2208 4.1792,14.4 4.4,14.4 C4.6208,14.4 4.8,14.2208 4.8,14 L4.8,6 C4.8,5.7792
              4.6208,5.6 4.4,5.6 Z"
              id="Shape"
            />
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

Trash.defaultProps = {
  ...Icon.defaultProps,
  width: 12,
  height: 16,
  viewBox: '0 0 12 16',
};
