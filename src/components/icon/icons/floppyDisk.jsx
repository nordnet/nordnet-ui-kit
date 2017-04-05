import React, { PropTypes } from 'react';
import defaultProps from './defaultProps';

export default function FloppyDisk({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-351.000000, -141.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="floppy-disk" transform="translate(351.000000, 141.000000)">
            <path d="M15,15 L1,15 L1,1 L13.5,1 L15,2.5 L15,15 Z" id="Shape" />
            <rect id="Rectangle-path" x="5" y="1" width="6" height="4" />
            <path d="M4,9 L12,9" id="Shape" fill={fill} />
            <path d="M4,12 L12,12" id="Shape" fill={fill} />
          </g>
        </g>
      </g>
    </svg>
  );
}

FloppyDisk.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

FloppyDisk.defaultProps = defaultProps;
