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
        <g transform="translate(-915.000000, -141.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g transform="translate(915.000000, 141.000000)">
            <path d="M1,1 L1,7 L8.5,14.5 L14.5,8.5 L7,1 L1,1 Z" />
            <path d="M3,4 L5,4" />
          </g>
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
