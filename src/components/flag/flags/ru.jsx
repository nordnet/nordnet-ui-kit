import React from 'react';

export default function FlagRu({ ...rest }) {
  return (
    <svg aria-hidden="true" focusable="false" {...rest}>
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill="#0039a6" d="M0 160.003h640V480H0z" />
        <path fill="#d52b1e" d="M0 319.997h640V480H0z" />
      </g>
    </svg>
  );
}

FlagRu.defaultProps = {
  viewBox: '0 0 640 480',
};
