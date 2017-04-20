import React, { PropTypes } from 'react';
import Icon from '../icon';

export default function SocialInstagram({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-1103.000000, -282.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="social-instagram" transform="translate(1103.000000, 282.000000)">
            <rect id="base" x="1" y="1" width="14" height="14" />
            <path d="M11,7 L15,7" id="divider-right" fill={fill} />
            <path d="M1,7 L5,7" id="divider-left" fill={fill} />
            <circle id="lens" cx="8" cy="8" r="3" />
            <path d="M13,4 L11,4" id="flash" fill={fill} />
          </g>
        </g>
      </g>
    </svg>
  );
}

SocialInstagram.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

SocialInstagram.defaultProps = Icon.defaultProps;
