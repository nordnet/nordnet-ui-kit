import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Profile({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="profile" fillRule="nonzero" fill={fill}>
          <path
            d="M7.6,8.8 C5.1736,8.8 3.2,6.8264 3.2,4.4 C3.2,1.9736 5.1736,0 7.6,0 C10.0264,0 12,1.9736 12,4.4 C12,6.8264
            10.0264,8.8 7.6,8.8 Z M7.6,0.8 C5.6152,0.8 4,2.4152 4,4.4 C4,6.3848 5.6152,8 7.6,8 C9.5848,8 11.2,6.3848
            11.2,4.4 C11.2,2.4152 9.5848,0.8 7.6,0.8 Z"
          />
          <path
            d="M14,16 L1.2,16 C0.5384,16 0,15.4616 0,14.8 C0,14.7456 0.0112,13.452 0.98,12.16 C1.544,11.408 2.316,10.8104
            3.2752,10.3848 C4.4464,9.864 5.9016,9.6 7.6,9.6 C9.2984,9.6 10.7536,9.864 11.9248,10.3848 C12.884,10.8112
            13.656,11.408 14.22,12.16 C15.1888,13.452 15.2,14.7456 15.2,14.8 C15.2,15.4616 14.6616,16 14,16 Z M7.6,10.4
            C4.8104,10.4 2.752,11.1624 1.6472,12.6048 C0.8192,13.6856 0.8008,14.7904 0.8,14.8016 C0.8,15.0208 0.9792,15.2
            1.2,15.2 L14,15.2 C14.2208,15.2 14.4,15.0208 14.4,14.8 C14.4,14.7904 14.3816,13.6856 13.5528,12.6048 C12.4472,11.1624
            10.3888,10.4 7.6,10.4 Z"
          />
        </g>
      </g>
    </svg>
  );
}

Profile.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Profile.defaultProps = Icon.defaultProps;
