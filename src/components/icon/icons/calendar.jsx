import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Calendar({
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
        <g stroke={stroke}>
          <rect strokeWidth={strokeWidth} x="2" y="4" width="13" height="10" />
          <path d="M14,2 L12,2" strokeWidth={strokeWidth} fill={fill} />
          <path d="M5,2 L3,2" strokeWidth={strokeWidth} fill={fill} />
          <path d="M3,7.5 L14,7.5" />
          <path d="M3,10.5 L14,10.5" />
          <path d="M5.5,5 L5.5,13" fill={fill} />
          <path d="M8.5,5 L8.5,13" fill={fill} />
          <path d="M11.5,5 L11.5,13" fill={fill} />
        </g>
      </g>
    </svg>
  );
}

Calendar.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Calendar.defaultProps = Icon.defaultProps;
