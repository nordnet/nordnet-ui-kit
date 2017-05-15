import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function OrderDepth({
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
        <g transform="translate(0, -3)" stroke={stroke}>
          <rect x="0.5" y="3.5" width="9" height="2" rx="0.7" />
          <rect x="0.5" y="7.5" width="5" height="2" rx="0.7" />
          <rect x="0.5" y="11.5" width="15" height="2" rx="0.7" />
        </g>
      </g>
    </svg>
  );
}

OrderDepth.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

OrderDepth.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 16 11',
  width: 16,
  height: 11,
};
