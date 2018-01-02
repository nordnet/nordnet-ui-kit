import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function OpaqueCircle({
  stroke,
  fill,
  strokeWidth,
  width,
  height,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };

  return (
    <svg width={width} height={height} style={style} {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fillRule="evenodd">
        <g fillRule="nonzero">
          <path d="M0,8a8,8 0 1,0 16,0a8,8 0 1,0 -16,0" fill={fill} />
        </g>
      </g>
    </svg>
  );
}

OpaqueCircle.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

OpaqueCircle.defaultProps = Icon.defaultProps;
