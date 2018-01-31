import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function MedKit({
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
        <path d="M9,13 L11,13 L11,11.5 C11,11.224 11.224,11 11.5,11 L13,11 L13,9 L11.5,9 C11.224,9 11,8.776 11,8.5 L11,7 L9,7 L9,8.5 C9,8.776 8.776,9 8.5,9 L7,9 L7,11 L8.5,11 C8.776,11 9,11.224 9,11.5 L9,13 Z M11.5,14 L8.5,14 C8.224,14 8,13.776 8,13.5 L8,12 L6.5,12 C6.224,12 6,11.776 6,11.5 L6,8.5 C6,8.224 6.224,8 6.5,8 L8,8 L8,6.5 C8,6.224 8.224,6 8.5,6 L11.5,6 C11.776,6 12,6.224 12,6.5 L12,8 L13.5,8 C13.776,8 14,8.224 14,8.5 L14,11.5 C14,11.776 13.776,12 13.5,12 L12,12 L12,13.5 C12,13.776 11.776,14 11.5,14 Z" />
        <path d="M19,15.5 C19,15.776 18.776,16 18.5,16 L1.5,16 C1.224,16 1,15.776 1,15.5 L1,4.5 C1,4.224 1.224,4 1.5,4 L18.5,4 C18.776,4 19,4.224 19,4.5 L19,15.5 Z M7,1.5 C7,1.224 7.224,1 7.5,1 L12.5,1 C12.776,1 13,1.224 13,1.5 L13,3 L7,3 L7,1.5 Z M18.5,3 L14,3 L14,1.5 C14,0.673 13.327,0 12.5,0 L7.5,0 C6.673,0 6,0.673 6,1.5 L6,3 L1.5,3 C0.673,3 0,3.673 0,4.5 L0,15.5 C0,16.327 0.673,17 1.5,17 L18.5,17 C19.327,17 20,16.327 20,15.5 L20,4.5 C20,3.673 19.327,3 18.5,3 Z" />
      </g>
    </svg>
  );
}

MedKit.propTypes = {
  ...Icon.propTypes,
  fill: PropTypes.string,
};

MedKit.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 20 17',
};
