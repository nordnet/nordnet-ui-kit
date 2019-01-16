import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Profile({
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
      <g
        fill="none"
        fillRule="evenodd"
        transform="translate(-1.08, 0.5)"
        stroke={stroke}
        strokeWidth={strokeWidth}
      >
        <path
          d="M1.5,14.7018843 C1.5,14.7018843 1.69396973,9.84849077 8.15808105,10.0036421 C14.6221924,10.1587935 14.6221924,14.7350875 14.6221924,14.7350875"
          strokeLinecap="round"
        />
        <circle cx="8" cy="5" r="3.5" />
      </g>
    </svg>
  );
}

Profile.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Profile.defaultProps = { ...Icon.defaultProps, viewBox: '0 0 14 14' };
