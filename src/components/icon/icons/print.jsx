import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Print({
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
          <rect x="4" y="1" width="8" height="4" />
          <rect x="4" y="11" width="8" height="4" />
          <path d="M4,13 L1,13 L1,5 L15,5 L15,13 L12,13" />
          <path d="M12,7 L12,9" fill={fill} />
        </g>
      </g>
    </svg>
  );
}

Print.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Print.defaultProps = Icon.defaultProps;
