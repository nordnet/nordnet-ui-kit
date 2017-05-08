import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function ExcalmationPoint({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg aria-hidden="true" focusable="false" {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="exclamation-point-error" transform="translate(-1.000000, 0.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <path d="M2,0 L2,5" id="Path-5" />
          <path d="M2.0035995,6.0260159 L1.9964005,8" id="Path-6" />
        </g>
      </g>
    </svg>
  );
}

ExcalmationPoint.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

ExcalmationPoint.defaultProps = {
  ...Icon.defaultProps,
  width: 4,
  height: 16,
  viewBox: '0 0 2 8',
};
