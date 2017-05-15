import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function SocialFacebook({
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
          <path d="M12,5 L11,5 C9.9,5 9,5.9 9,7 L9,14" />
          <path d="M6,9 L12,9" fill={fill} />
        </g>
      </g>
    </svg>
  );
}

SocialFacebook.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

SocialFacebook.defaultProps = Icon.defaultProps;
