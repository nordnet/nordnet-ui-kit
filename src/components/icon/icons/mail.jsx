import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Mail({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g transform="translate(-398.000000, -188.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g transform="translate(398.000000, 188.000000)">
            <path d="M1,3 L1,8 L1,13 L15,13 L15,8 L15,3 L1,3 Z" />
            <path d="M1,3.5 L8,7.5 L15,3.5" />
          </g>
        </g>
      </g>
    </svg>
  );
}

Mail.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Mail.defaultProps = Icon.defaultProps;
