import React, { PropTypes } from 'react';
import defaultProps from './defaultProps';

export default function Print({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-304.000000, -141.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="print" transform="translate(304.000000, 141.000000)">
            <rect id="Rectangle-path" x="4" y="1" width="8" height="4" />
            <rect id="Rectangle-path" x="4" y="11" width="8" height="4" />
            <path d="M4,13 L1,13 L1,5 L15,5 L15,13 L12,13" id="Path-523" />
            <path d="M12,7 L12,9" id="Shape" fill={fill} />
          </g>
        </g>
      </g>
    </svg>
  );
}

Print.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Print.defaultProps = defaultProps;
