import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Calculator({
  stroke,
  fill,
  operatorFill,
  strokeWidth,
  style: styleProp,
  width,
  height,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };

  return (
    <svg width={width} height={width} style={style} {...rest} viewBox={`0 0 36 36`}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g fillRule="nonzero">
          <path d="M17.1,14.9c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2h13.1c1.1,0,2,0.9,2,2V14.9z" fill={fill} />
          <path d="M36,14.9c0,1.1-0.9,2-2,2H20.9c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2H34c1.1,0,2,0.9,2,2 L36,14.9L36,14.9z" fill={fill} />
          <path d="M17.1,33.6c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V20.6c0-1.1,0.9-2,2-2h13.1c1.1,0,2,0.9,2,2 V33.6z" fill={fill} />
          <path d="M36,33.6c0,1.1-0.9,2-2,2H20.9c-1.1,0-2-0.9-2-2V20.6c0-1.1,0.9-2,2-2H34c1.1,0,2,0.9,2,2 L36,33.6L36,33.6z" fill={fill} />
          <g transform="translate(4.556962, 4.050000)" fill={operatorFill}>
            <path d="M7.2,3.4H5.3V1.6c0-0.6-0.5-1.1-1.2-1.1l0,0C3.6,0.5,3,1,3,1.6v1.8H1.2 C0.6,3.4,0.1,4,0.1,4.6s0.5,1.1,1.2,1.1H3v1.8c0,0.6,0.5,1.1,1.2,1.1l0,0c0.6,0,1.2-0.5,1.2-1.1V5.7h1.8c0.6,0,1.2-0.5,1.2-1.1 S7.8,3.4,7.2,3.4z" />
            <path d="M25.7,5.7h-5.9c-0.6,0-1.2-0.5-1.2-1.1l0,0c0-0.6,0.5-1.1,1.2-1.1h5.9 c0.6,0,1.2,0.5,1.2,1.1l0,0C26.8,5.2,26.3,5.7,25.7,5.7z" />
            <g transform="translate(0.455696, 18.900000)">
              <path d="M6.6,2.7L2.4,6.8C2,7.3,1.3,7.3,0.8,6.8l0,0c-0.4-0.4-0.4-1.2,0-1.6L5,1.1 c0.4-0.4,1.2-0.4,1.6,0l0,0C7.1,1.5,7.1,2.2,6.6,2.7z" />
              <path d="M2.4,1.1l4.2,4.2c0.4,0.4,0.4,1.2,0,1.6l0,0C6.2,7.3,5.5,7.3,5,6.8L0.8,2.7 c-0.4-0.4-0.4-1.2,0-1.6l0,0C1.3,0.6,2,0.6,2.4,1.1z" />
            </g>
            <path d="M25.7,23.8h-5.9c-0.6,0-1.2,0.5-1.2,1.1c0,0.6,0.5,1.1,1.2,1.1h5.9c0.6,0,1.2-0.5,1.2-1.1 C26.8,24.3,26.3,23.8,25.7,23.8z M19.7,21.9h5.9c0.6,0,1.2-0.5,1.2-1.1c0-0.6-0.5-1.1-1.2-1.1h-5.9c-0.6,0-1.2,0.5-1.2,1.1 C18.6,21.4,19.1,21.9,19.7,21.9z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

Calculator.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Calculator.defaultProps = Icon.defaultProps;
