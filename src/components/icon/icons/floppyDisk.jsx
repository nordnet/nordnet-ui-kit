import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function FloppyDisk({
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
        <g stroke={stroke} strokeWidth={strokeWidth}>
          <path d="M15,15 L1,15 L1,1 L13.5,1 L15,2.5 L15,15 Z" />
          <rect x="5" y="1" width="6" height="4" />
          <path d="M4,9 L12,9" fill={fill} />
          <path d="M4,12 L12,12" fill={fill} />
        </g>
      </g>
    </svg>
  );
}

FloppyDisk.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

FloppyDisk.defaultProps = Icon.defaultProps;
