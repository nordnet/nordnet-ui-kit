import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function ChevronUp({
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
        <g fillRule="nonzero" fill={fill}>
          <path d="M0.8,8 C0.8,8.1024 0.8392,8.2048 0.9168,8.2832 C1.0728,8.4392 1.3264,8.4392 1.4824,8.2832
            L8.3992,1.3664 L15.316,8.2832 C15.472,8.4392 15.7256,8.4392 15.8816,8.2832 C16.0376,8.1272
            16.0376,7.8736 15.8816,7.7176 L8.6816,0.5176 C8.5256,0.3616 8.272,0.3616 8.116,0.5176 L0.916,7.7176
            C0.8376,7.796 0.7992,7.8984 0.7992,8.0008 L0.8,8 Z" />
        </g>
      </g>
    </svg>
  );
}

ChevronUp.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

ChevronUp.defaultProps = {
  ...Icon.defaultProps,
  width: 16,
  height: 9,
  viewBox: '0 0 16 9',
};
