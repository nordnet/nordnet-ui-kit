import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function LightningBolt({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Atoms" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Icons" transform="translate(-856.000000, -151.000000)">
          <g id="Icon-set" transform="translate(56.000000, 151.000000)">
            <g id="lightning-bolt" transform="translate(800.000000, 0.000000)">
              <polygon id="Shape" fill={fill} points="9 2 4.5 9.5 7 9.5 7 14 11.5 6.5 9 6.5" />
              <path d="M7.4,1 C3.8,1.3 1,4.3 1,8 C1,10.8 2.6,13.2 5,14.3" id="Shape" stroke={stroke} strokeWidth={strokeWidth} />
              <path d="M11,1.7 C13.3,2.8 15,5.2 15,8 C15,11.7 12.2,14.7 8.6,15" id="Shape" stroke={stroke} strokeWidth={strokeWidth} />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

LightningBolt.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

LightningBolt.defaultProps = Icon.defaultProps;
