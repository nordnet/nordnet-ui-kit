import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Print({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g transform="translate(-304.000000, -141.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g transform="translate(304.000000, 141.000000)">
            <rect x="4" y="1" width="8" height="4" />
            <rect x="4" y="11" width="8" height="4" />
            <path d="M4,13 L1,13 L1,5 L15,5 L15,13 L12,13" />
            <path d="M12,7 L12,9" fill={fill} />
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

Print.defaultProps = Icon.defaultProps;
