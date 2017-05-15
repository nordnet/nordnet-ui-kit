import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function FloppyDisk({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g transform="translate(-351.000000, -141.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g transform="translate(351.000000, 141.000000)">
            <path d="M15,15 L1,15 L1,1 L13.5,1 L15,2.5 L15,15 Z" />
            <rect x="5" y="1" width="6" height="4" />
            <path d="M4,9 L12,9" fill={fill} />
            <path d="M4,12 L12,12" fill={fill} />
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

FloppyDisk.defaultProps = Icon.defaultProps;
