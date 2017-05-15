import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function SocialInstagram({
  stroke,
  fill,
  strokeWidth,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg style={style} {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g stroke={stroke} strokeWidth={strokeWidth}>
          <rect x="1" y="1" width="14" height="14" />
          <path d="M11,7 L15,7" fill={fill} />
          <path d="M1,7 L5,7" fill={fill} />
          <circle cx="8" cy="8" r="3" />
          <path d="M13,4 L11,4" fill={fill} />
        </g>
      </g>
    </svg>
  );
}

SocialInstagram.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

SocialInstagram.defaultProps = Icon.defaultProps;
