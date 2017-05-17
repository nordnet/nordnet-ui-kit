import React from 'react';

export default function FlagJp({ ...rest }) {
  return (
    <svg aria-hidden="true" focusable="false" {...rest}>
      <defs>
        <clipPath id="jp_a">
          <path fillOpacity=".67" d="M-88.001 32h640v480h-640z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#jp_a)" transform="translate(88.001 -32)" strokeWidth="1pt">
        <path fill="#fff" d="M-128 32h720v480h-720z" />
        <ellipse rx="194.93" ry="194.93" transform="translate(-168.44 8.618) scale(.76554)" cy="344.05" cx="523.08" fill="#d30000" />
      </g>
    </svg>
  );
}

FlagJp.defaultProps = {
  viewBox: '0 0 640 480',
};
