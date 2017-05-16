import React from 'react';

export default function FlagFr({ ...rest }) {
  return (
    <svg aria-hidden="true" focusable="false" {...rest}>
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill="#00267f" d="M0 0h213.337v480H0z" />
        <path fill="#f31830" d="M426.662 0H640v480H426.662z" />
      </g>
    </svg>
  );
}

FlagFr.defaultProps = {
  viewBox: '0 0 640 480',
};
