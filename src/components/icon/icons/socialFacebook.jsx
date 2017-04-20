import React, { PropTypes } from 'react';
import Icon from '../icon';

export default function SocialFacebook({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-1056.000000, -282.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="social-facebook" transform="translate(1056.000000, 282.000000)">
            <rect id="Rectangle-path" x="1" y="1" width="14" height="14" />
            <path d="M12,5 L11,5 C9.9,5 9,5.9 9,7 L9,14" id="Shape" />
            <path d="M6,9 L12,9" id="Shape" fill={fill} />
          </g>
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
