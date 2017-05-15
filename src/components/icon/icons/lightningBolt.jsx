import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function LightningBolt({
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
        <polygon fill={fill} points="9 2 4.5 9.5 7 9.5 7 14 11.5 6.5 9 6.5" />
        <path d="M7.4,1 C3.8,1.3 1,4.3 1,8 C1,10.8 2.6,13.2 5,14.3" stroke={stroke} strokeWidth={strokeWidth} />
        <path d="M11,1.7 C13.3,2.8 15,5.2 15,8 C15,11.7 12.2,14.7 8.6,15" stroke={stroke} strokeWidth={strokeWidth} />
      </g>
    </svg>
  );
}

LightningBolt.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

LightningBolt.defaultProps = Icon.defaultProps;
