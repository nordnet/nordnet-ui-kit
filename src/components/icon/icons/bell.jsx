import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Bell({
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
          <path d="M13,9 L14,10 L14,12 L2,12 L2,10 L3,9 L3,6 C3,3.2 5.2,1 8,1 L8,1 C10.8,1 13,3.2 13,6 L13,9 L13,9 Z" />
          <path d="M11,12 C11,13.7 9.7,15 8,15 C6.3,15 5,13.7 5,12" />
        </g>
      </g>
    </svg>
  );
}

Bell.propTypes = {
  ...Icon.PropTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Bell.defaultProps = Icon.defaultProps;
