import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Mobile({
  fill,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg style={style} {...rest}>
      <g stroke="none" fillRule="nonzero" fill={fill}>
        <path d="M6.5,18 L5.5,18 C5.224,18 5,17.776 5,17.5 C5,17.224 5.224,17 5.5,17 L6.5,17 C6.776,17 7,17.224 7,17.5 C7,17.776 6.776,18 6.5,18" />
        <path d="M1.5,1 C1.224,1 1,1.224 1,1.5 L1,18.5 C1,18.776 1.224,19 1.5,19 L10.5,19 C10.776,19 11,18.776 11,18.5 L11,1.5 C11,1.224 10.776,1 10.5,1 L1.5,1 Z M10.5,20 L1.5,20 C0.673,20 0,19.327 0,18.5 L0,1.5 C0,0.673 0.673,0 1.5,0 L10.5,0 C11.327,0 12,0.673 12,1.5 L12,18.5 C12,19.327 11.327,20 10.5,20 Z" />
        <path d="M3,15 L9,15 L9,3 L3,3 L3,15 Z M9.5,16 L2.5,16 C2.224,16 2,15.776 2,15.5 L2,2.5 C2,2.224 2.224,2 2.5,2 L9.5,2 C9.776,2 10,2.224 10,2.5 L10,15.5 C10,15.776 9.776,16 9.5,16 Z" />
      </g>
    </svg>
  );
}

Mobile.propTypes = {
  ...Icon.propTypes,
  fill: PropTypes.string,
};

Mobile.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 12 20',
};
