import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function MagnifierPlus({
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
            d="M0.7992,6 C0.7992,3.1328 3.132,0.8 5.9992,0.8 C8.8664,0.8 11.1992,3.1328 11.1992,6 C11.1992,8.8672 8.8664,11.2 5.9992,11.2 C3.132,11.2 0.7992,8.8672 0.7992,6 Z M15.0944,15.3296 L10.34,10.1424 C11.412,9.0216 12,7.556 12,6 C12,4.3976 11.376,2.8904 10.2432,1.7576 C9.1088,0.6248 7.6024,0 6,0 C4.3976,0 2.8896,0.624 1.7576,1.7576 C0.6248,2.8912 0,4.3976 0,6 C0,7.6024 0.624,9.1096 1.7576,10.2424 C2.8912,11.3752 4.3976,12 6,12 C7.3808,12 8.6896,11.5368 9.7504,10.684 L14.5048,15.8704 C14.5832,15.9568 14.6912,16 14.8,16 C14.8968,16 14.9936,15.9656 15.0704,15.8952 C15.2336,15.7456 15.2448,15.4928 15.0952,15.3304 L15.0944,15.3296 Z"
            id="Fill-3075"
          />
          <path
            d="M9.1992,5.6 L6.3992,5.6 L6.3992,2.8 C6.3992,2.5792 6.2192,2.4 5.9992,2.4 C5.7792,2.4 5.5992,2.5792 5.5992,2.8 L5.5992,5.6 L2.7992,5.6 C2.5792,5.6 2.3992,5.7792 2.3992,6 C2.3992,6.2208 2.5792,6.4 2.7992,6.4 L5.5992,6.4 L5.5992,9.2 C5.5992,9.4208 5.7792,9.6 5.9992,9.6 C6.2192,9.6 6.3992,9.4208 6.3992,9.2 L6.3992,6.4 L9.1992,6.4 C9.4192,6.4 9.5992,6.2208 9.5992,6 C9.5992,5.7792 9.4192,5.6 9.1992,5.6"
            id="Fill-3076"
          />
        </g>
      </g>
    </svg>
  );
}

MagnifierPlus.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

MagnifierPlus.defaultProps = Icon.defaultProps;
