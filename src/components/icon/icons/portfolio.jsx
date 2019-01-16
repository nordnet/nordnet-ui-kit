import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Portfolio({
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
        strokeWidth={strokeWidth}
        stroke={stroke}
        fill="none"
        fillRule="evenodd"
        transform="translate(0, 0.5)"
      >
        <path d="M5.12588235,1.94117647 L5.12588235,4.22 L1,4.22 C0.679674845,4.22 0.42,4.47967485 0.42,4.8 L0.42,14 C0.42,14.3203252 0.679674845,14.58 1,14.58 L15,14.58 C15.3203252,14.58 15.58,14.3203252 15.58,14 L15.58,4.8 C15.58,4.47967485 15.3203252,4.22 15,4.22 L10.8741176,4.22 L10.8741176,1.94117647 C10.8741176,1.65333865 10.640779,1.42 10.3529412,1.42 L5.64705882,1.42 C5.35922101,1.42 5.12588235,1.65333865 5.12588235,1.94117647 Z" />
        <path d="M0.42,8.38 L15.58,8.38 L15.58,4.8 C15.58,4.47967485 15.3203252,4.22 15,4.22 L1,4.22 C0.679674845,4.22 0.42,4.47967485 0.42,4.8 L0.42,8.38 Z" />
        <rect fill={stroke} x="7.19999695" y="7" width="1.67999995" height="4" rx="0.839999974" />
      </g>
    </svg>
  );
}

Portfolio.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Portfolio.defaultProps = Icon.defaultProps;
