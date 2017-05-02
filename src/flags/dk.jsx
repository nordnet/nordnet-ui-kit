import React from 'react';

export default function FlagDk({
  ...rest
}) {
  return (
    <svg {...rest}>
      <path fill="#c60c30" d="M0 0h640.1v480H0z" />
      <path fill="#fff" d="M205.714 0h68.57v480h-68.57z" />
      <path fill="#fff" d="M0 205.714h640.1v68.57H0z" />
    </svg>
  );
}

FlagDk.defaultProps = {
  viewBox: '0 0 640 480',
};
