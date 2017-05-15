import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function SocialGPlus({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g stroke={stroke} strokeWidth={strokeWidth}>
          <path d="M16,8 L10,8" fill={fill} />
          <path d="M13,5 L13,11" fill={fill} />
          <path
            d="M4.5,8 L8,8 C8,9.9 6.4,11.5 4.5,11.5 C2.6,11.5 1,9.9 1,8 C1,6.1 2.6,4.5 4.5,4.5 C5.5,4.5 6.30004883,4.8999939 7,5.5"
          />
        </g>
      </g>
    </svg>
  );
}

SocialGPlus.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

SocialGPlus.defaultProps = Icon.defaultProps;
