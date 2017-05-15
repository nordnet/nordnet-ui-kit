import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Calendar({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g transform="translate(-210.000000, -188.000000)" stroke={stroke}>
          <g transform="translate(210.000000, 188.000000)">
            <rect strokeWidth={strokeWidth} x="2" y="4" width="13" height="10" />
            <path d="M14,2 L12,2" strokeWidth={strokeWidth} fill={fill} />
            <path d="M5,2 L3,2" strokeWidth={strokeWidth} fill={fill} />
            <path d="M3,7.5 L14,7.5" id="Path-502" />
            <path d="M3,10.5 L14,10.5" id="Path-502" />
            <path d="M5.5,5 L5.5,13" fill={fill} />
            <path d="M8.5,5 L8.5,13" fill={fill} />
            <path d="M11.5,5 L11.5,13" fill={fill} />
          </g>
        </g>
      </g>
    </svg>
  );
}

Calendar.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Calendar.defaultProps = Icon.defaultProps;
