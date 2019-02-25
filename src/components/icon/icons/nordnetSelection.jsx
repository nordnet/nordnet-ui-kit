import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function NordnetSelection({
  fill,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg style={style} {...rest}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <circle id="Oval-Copy" fill={fill} cx="7" cy="7" r="7" />
        <path
          d="M6.79780802,9.21465656 L12.519204,-1 L14.5188566,-1 L7.797808,11 L5.797808,11 L3,6.00469512 L4.99982285,6.00463544 L6.79780802,9.21465656 Z"
          id="Combined-Shape"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
}

NordnetSelection.propTypes = {
  ...Icon.propTypes,
  fill: PropTypes.string,
};

NordnetSelection.defaultProps = Icon.defaultProps;
