import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function News({
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
          <path
            d="M3.00000002,14 L13,14 C14.1,14 15,13.1 15,12 L15,2 L4,2 L4,6"
            strokeWidth={strokeWidth}
          />
          <path d="M10,4.5 L13,4.5" />
          <path d="M10,6.5 L13,6.5" />
          <path d="M10,8.5 L13,8.5" />
          <path d="M10,10.5 L13,10.5" />
          <path d="M6,10.5 L9,10.5" />
          <path d="M6,8.5 L9,8.5" />
          <path
            d="M3.8,14 L3,14 L3,14 C1.9,14 1,13.1 1,12 L1,5 L3.8,5"
            strokeWidth={strokeWidth}
          />
          <rect fill={fill} x="6.5" y="4.5" width="2" height="2" />
          <path d="M4.5,6 L4.5,12 C4.5,12.8 3.8,13.5 3,13.5 L3,13.5" />
        </g>
      </g>
    </svg>
  );
}

News.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

News.defaultProps = Icon.defaultProps;
