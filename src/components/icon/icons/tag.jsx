import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Tag({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g stroke={stroke} strokeWidth={strokeWidth}>
          <path d="M1,1 L1,7 L8.5,14.5 L14.5,8.5 L7,1 L1,1 Z" />
          <path d="M3,4 L5,4" />
        </g>
      </g>
    </svg>
  );
}

Tag.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Tag.defaultProps = Icon.defaultProps;
