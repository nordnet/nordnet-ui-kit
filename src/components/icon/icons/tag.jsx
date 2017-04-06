import React, { PropTypes } from 'react';
import defaultProps from './defaultProps';

export default function Tag({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-915.000000, -141.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="tag" transform="translate(915.000000, 141.000000)">
            <path d="M1,1 L1,7 L8.5,14.5 L14.5,8.5 L7,1 L1,1 Z" id="base" />
            <path d="M3,4 L5,4" id="hole" />
          </g>
        </g>
      </g>
    </svg>
  );
}

Tag.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Tag.defaultProps = defaultProps;
