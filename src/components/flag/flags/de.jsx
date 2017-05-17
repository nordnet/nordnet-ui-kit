import React from 'react';

export default function FlagDe({ ...rest }) {
  return (
    <svg aria-hidden="true" focusable="false" {...rest}>
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#ffce00" d="M0 320h640v160.002H0z" />
        <path d="M0 0h640v160H0z" />
        <path fill="#d00" d="M0 160h640v160H0z" />
      </g>
    </svg>
  );
}

FlagDe.defaultProps = {
  viewBox: '0 0 640 480',
};
