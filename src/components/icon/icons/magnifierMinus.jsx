import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function MagnifierMinus({
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
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g fillRule="nonzero" fill={fill}>
          <path
            d="M0.788684211,6 C0.788684211,3.1328 3.09078947,0.8 5.92026316,0.8 C8.74973684,0.8 11.0518421,3.1328 11.0518421,6 C11.0518421,8.8672 8.74973684,11.2 5.92026316,11.2 C3.09078947,11.2 0.788684211,8.8672 0.788684211,6 Z M14.8957895,15.3296 L10.2039474,10.1424 C11.2610526,9.0216 11.8421053,7.556 11.8421053,6 C11.8421053,4.3976 11.2263158,2.8904 10.1076316,1.7576 C8.98894737,0.6248 7.50236842,0 5.92105263,0 C4.33973684,0 2.85236842,0.624 1.73447368,1.7576 C0.616578947,2.8912 0,4.3976 0,6 C0,7.6024 0.615789474,9.1096 1.73447368,10.2424 C2.85315789,11.3752 4.33973684,12 5.92105263,12 C7.28368421,12 8.57526316,11.5368 9.62210526,10.684 L14.3139474,15.8704 C14.3921053,15.9568 14.4978947,16 14.6052632,16 C14.7007895,16 14.7963158,15.9656 14.8721053,15.8952 C15.0331579,15.7456 15.0434211,15.4928 14.8965789,15.3304 L14.8957895,15.3296 Z"
            id="Fill-3077"
          />
          <path
            d="M9.07815789,6.4 L2.76236842,6.4 C2.54447368,6.4 2.36763158,6.2208 2.36763158,6 C2.36763158,5.7792 2.54447368,5.6 2.76236842,5.6 L9.07815789,5.6 C9.29605263,5.6 9.47289474,5.7792 9.47289474,6 C9.47289474,6.2208 9.29605263,6.4 9.07815789,6.4"
            id="Fill-3078"
          />
        </g>
      </g>
    </svg>
  );
}

MagnifierMinus.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

MagnifierMinus.defaultProps = Icon.defaultProps;
