import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Film({
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
        <g stroke={stroke}>
          <rect strokeWidth={strokeWidth} x="1" y="2" width="14" height="13" />
          <path d="M4.5,3 L4.5,14" />
          <path d="M11.5,3 L11.5,14" />
          <path d="M2,5.5 L4,5.5" />
          <path d="M2,8.5 L4,8.5" />
          <path d="M2,11.5 L4,11.5" />
          <path d="M12,5.5 L14,5.5" />
          <path d="M12,8.5 L14,8.5" />
          <path d="M12,11.5 L14,11.5" />
        </g>
      </g>
    </svg>
  );
}

Film.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Film.defaultProps = Icon.defaultProps;
