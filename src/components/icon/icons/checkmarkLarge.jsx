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
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-113.000000, -330.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="checkmark-large" transform="translate(113.000000, 330.000000)">
            <path d="M14.4000244,3 L5.40002441,12 L1.40002441,8" id="Shape" />
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
