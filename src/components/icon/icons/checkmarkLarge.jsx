import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function CheckmarkLarge({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g transform="translate(-113.000000, -330.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g transform="translate(113.000000, 330.000000)">
            <path d="M14.4000244,3 L5.40002441,12 L1.40002441,8" />
          </g>
        </g>
      </g>
    </svg>
  );
}

CheckmarkLarge.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

CheckmarkLarge.defaultProps = Icon.defaultProps;
