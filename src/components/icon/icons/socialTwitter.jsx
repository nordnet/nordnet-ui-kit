import React, { PropTypes } from 'react';
import defaultProps from './defaultProps';

export default function SocialTwitter({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-1150.000000, -282.000000)" fill={fill}>
          <g id="social-twitter" transform="translate(1150.000000, 282.000000)">
            <path
              d="M10.3,3 C11,3 11.7,3.3 12.2,3.9 C12.8,3.8 13.3,3.6 13.8,3.3 C13.6,3.9 13.2,4.4
              12.7,4.7 C13.2,4.7 13.7,4.5 14.1,4.3 C13.9,4.9 13.5,5.3 12.9,5.6 C13,9.4 10,12.8
              6.2,13 L5.8,13 C4.5,13 3.2,12.6 2,11.9 L2.3,11.9 C3.4,11.9 4.6,11.5 5.5,10.8 C4.5,10.7
              3.7,10 3.4,9.1 L3.8,9.1 C4,9.1 4.3,9.1 4.5,9 C3.3,8.8 2.5,7.8 2.4,6.6 C2.7,6.7 3,6.8 3.3,6.8
              L3.4,6.8 C2.5,6 2.2,4.6 2.8,3.5 C4.1,5.1 5.9,6 7.9,6.1 C7.5,4.8 8.2,3.5 9.5,3.1 C9.8,3.1 10,3
              10.3,3 L10.3,3 Z M10.3,1 C9.8,1 9.4,1.1 9,1.2 C7.7,1.6 6.7,2.5 6.2,3.7 C5.5,3.4 4.9,2.9 4.4,2.3
              C4,1.8 3.4,1.5 2.8,1.5 L2.6,1.5 C2,1.6 1.4,2 1.1,2.6 C0.5,3.6 0.4,4.8 0.6,5.9 C0.5,6.1 0.5,6.4
              0.5,6.7 C0.5,7.7 0.9,8.6 1.5,9.3 C1.5,9.4 1.5,9.6 1.6,9.7 C1.6,9.8 1.6,9.8 1.7,9.9 C1,10 0.4,10.5
              0.2,11.2 C-0.1,12.1 0.3,13 1,13.5 C2.4,14.5 4.1,15 5.8,15 L6.3,15 C10.9,14.8 14.6,11.1 14.9,6.6
              C15.4,6.2 15.7,5.6 15.9,5 C16.1,4.4 16.1,3.8 15.7,3.2 C15.7,2.1 14.8,1.3 13.7,1.3 L13.7,1.3 L13.7,1.3
              L13.7,1.3 L13.7,1.3 L13.7,1.3 C13.3,1.3 12.9,1.4 12.6,1.6 L12.6,1.6 C11.9,1.2 11.1,1 10.3,1 L10.3,1
              L10.3,1 Z"
              id="twitter-bird"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

SocialTwitter.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

SocialTwitter.defaultProps = defaultProps;
