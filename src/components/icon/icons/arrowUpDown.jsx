import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function ArrowUpDown({
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
        <g strokeWidth={strokeWidth} stroke={stroke}>
          <polyline points="13 15 8 15 8 10" />
          <path d="M8,15 L15.25,7.75" />
          <polyline points="3 1 8 1 8 6" />
          <path d="M8,1 L0.75,8.25" />
        </g>
      </g>
    </svg>
  );
}

ArrowUpDown.propTypes = {
  ...Icon.defaultProps,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

ArrowUpDown.defaultProps = Icon.defaultProps;
