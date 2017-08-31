import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function AddMoney({
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
      <g transform="translate(0.000000, -1.000000)" strokeWidth="1" fill="none" fillRule="evenodd" stroke={stroke}>
        <polyline
          id="Path"
          strokeWidth="0.88"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="7.25055955 13.5269501 15.5214289 13.5999937 15.5214289 4.3999939 3.01553622 4.3999939"
        />
        <polyline
          id="Path"
          strokeWidth="0.88"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="12.7190885 2.3999939 0.449996948 2.3999939 0.449996948 8.57235736"
        />
        <polyline
          id="Path"
          strokeWidth="0.88"
          strokeLinecap="square"
          strokeLinejoin="round"
          points="15.1999998 7.63000488 9.5 7.63000488 9.5 10.4300048 15.1999998 10.4300048"
        />
        <path d="M3.25,9.45341615 L3.25,13.4870296" id="Line" strokeWidth="1.19480519" strokeLinecap="round" />
        <path d="M5.34090909,11.4702229 L1.15909091,11.4702229" id="Line" strokeWidth="1.19480519" strokeLinecap="round" />
      </g>
    </svg>
  );
}

AddMoney.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

AddMoney.defaultProps = {
  ...Icon.defaultProps,
  width: 16,
  height: 14,
  viewBox: '0 0 16 14',
};
