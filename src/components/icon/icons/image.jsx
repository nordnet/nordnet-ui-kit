import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Image({
  stroke,
  fill,
  strokeWidth,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg style={style} {...rest}>
      <g stroke={stroke} strokeWidth={strokeWidth} fill={fill}>
        <path d="M16.2,6 C15.2076,6 14.4,6.8076 14.4,7.8 C14.4,8.7924 15.2076,9.6 16.2,9.6 C17.1924,9.6 18,8.7924 18,7.8 C18,6.8076 17.1924,6 16.2,6 M16.2,10.8 C14.5464,10.8 13.2,9.4536 13.2,7.8 C13.2,6.1464 14.5464,4.8 16.2,4.8 C17.8536,4.8 19.2,6.1464 19.2,7.8 C19.2,9.4536 17.8536,10.8 16.2,10.8" />
        <path d="M22.8,22.2 C22.8,22.5312 22.5312,22.8 22.2,22.8 L20.0568,22.8 L7.8636,10.0524 C7.5264,9.6996 7.0776,9.51 6.6,9.516 C6.1224,9.522 5.6784,9.7236 5.3496,10.0848 L1.2012,14.6484 L1.2012,1.8 C1.2012,1.4688 1.47,1.2 1.8012,1.2 L22.2012,1.2 C22.5324,1.2 22.8012,1.4688 22.8012,1.8 L22.8012,22.2 L22.8,22.2 Z M1.2,22.2 L1.2,16.4316 L6.2364,10.8912 C6.3384,10.7796 6.4716,10.7172 6.6132,10.7148 C6.7548,10.7124 6.8904,10.7724 6.9948,10.8816 L18.3948,22.8 L1.7988,22.8 C1.4676,22.8 1.1988,22.5312 1.1988,22.2 L1.2,22.2 Z M22.2,0 L1.8,0 C0.8076,0 0,0.8076 0,1.8 L0,22.2 C0,23.1924 0.8076,24 1.8,24 L22.2,24 C23.1924,24 24,23.1924 24,22.2 L24,1.8 C24,0.8076 23.1924,0 22.2,0 Z" />
      </g>
    </svg>
  );
}

Image.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Image.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 25 25',
};
