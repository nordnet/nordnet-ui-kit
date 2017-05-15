import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function GraphCandlestick({
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
          <rect x="1.5" y="0.5" width="1" height="4" />
          <rect x="1.5" y="11.5" width="1" height="4" />
          <rect x="7.5" y="0.5" width="1" height="6" />
          <rect x="13.5" y="0.5" width="1" height="2" />
          <rect x="13.5" y="12.5" width="1" height="3" />
          <rect x="7.5" y="11.5" width="1" height="4" />
          <rect x="0.5" y="5.5" width="3" height="5" />
          <rect x="6.5" y="7.5" width="3" height="3" />
          <rect x="12.5" y="3.5" width="3" height="8" />
        </g>
      </g>
    </svg>
  );
}

GraphCandlestick.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

GraphCandlestick.defaultProps = Icon.defaultProps;
