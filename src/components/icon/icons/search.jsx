import React, { PropTypes } from 'react';
import Icon from '../icon';

export default function Search({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="icons" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="search" fillRule="nonzero" fill={fill}>
          <path
            d="M15.0952,15.3296 L10.3408,10.1424 C11.412,9.0216 12.0008,7.556 12.0008,6 C12.0008,4.3976
              11.3768,2.8904 10.2432,1.7576 C9.1096,0.6248 7.6032,-8.8817842e-16 6.0008,-8.8817842e-16
              C4.3984,-8.8817842e-16 2.8912,0.624 1.7584,1.7576 C0.6256,2.8912 0.0008,4.3976 0.0008,6 C0.0008,7.6024
              0.6248,9.1096 1.7584,10.2424 C2.892,11.3752 4.3984,12 6.0008,12 C7.3816,12 8.6904,11.5368 9.7512,10.684
              L14.5056,15.8704 C14.5848,15.9568 14.692,16 14.8008,16 C14.8976,16 14.9944,15.9656 15.0712,15.8952
              C15.2344,15.7456 15.2448,15.4928 15.096,15.3304 L15.0952,15.3296 Z M0.8,6 C0.8,3.1328 3.1328,0.8 6,0.8
              C8.8672,0.8 11.2,3.1328 11.2,6 C11.2,8.8672 8.8672,11.2 6,11.2 C3.1328,11.2 0.8,8.8672 0.8,6 Z"
            id="Shape"
          />
        </g>
      </g>
    </svg>
  );
}

Search.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Search.defaultProps = Icon.defaultProps;
