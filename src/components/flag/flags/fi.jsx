import React from 'react';

export default function FlagFi({ ...rest }) {
  return (
    <svg aria-hidden="true" focusable="false" {...rest}>
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#003580" d="M0 174.545h640v130.909H0z" />
      <path fill="#003580" d="M175.455 0h130.909v480H175.455z" />
    </svg>
  );
}

FlagFi.defaultProps = {
  viewBox: '0 0 640 480',
};
