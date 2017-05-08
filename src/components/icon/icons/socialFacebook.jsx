import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function SocialFacebook({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg aria-hidden="true" focusable="false" {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="social-facebook" stroke={stroke} strokeWidth={strokeWidth}>
          <rect id="Rectangle-path" x="1" y="1" width="14" height="14" />
          <path d="M12,5 L11,5 C9.9,5 9,5.9 9,7 L9,14" id="Shape" />
          <path d="M6,9 L12,9" id="Shape" fill={fill} />
        </g>
      </g>
    </svg>
  );
}

SocialFacebook.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

SocialFacebook.defaultProps = Icon.defaultProps;
