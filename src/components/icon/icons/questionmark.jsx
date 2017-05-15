import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Questionmark({
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
        <circle stroke={stroke} strokeWidth="1.71428571" cx="6" cy="6" r="6" />
        <path
          d="M4.28571429,4.28571429 C4.28571429,3.34285714 5.05714286,2.57142857 6,2.57142857 C6.94285714,2.57142857
          7.71428571,3.34285714 7.71428571,4.28571429 C7.71428571,4.88571429 7.37142857,5.48571429 6.85714286,5.74285714
          C6.34285714,6.08571429 6,6.6 6,7.28571429 L6,7.28571429" stroke={stroke} strokeWidth="1.71428571"
        />
        <rect fill={fill} x="5.14285714" y="8.57142857" width="1.71428571" height="1.71428571" />
        <path d="M6,7.28571429 L6,7.71428571" stroke={stroke} strokeWidth="1.71428571" />
      </g>
    </svg>
  );
}

Questionmark.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Questionmark.defaultProps = {
  ...Icon.defaultProps,
  width: 14,
  height: 14,
  viewBox: '0 0 14 14',
};
