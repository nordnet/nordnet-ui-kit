import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function OrderDepth({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="icons" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g transform="translate(-88.0, -99.0)" id="order-depth" stroke={stroke}>
          <g transform="translate(94.0, 104.5) rotate(90) translate(-94.0, -104.5) translate(89.0, 99.0)">
            <rect id="Rectangle-2" x="0" y="2" width="2" height="9" rx="0.2" />
            <rect id="Rectangle-2" x="4" y="6" width="2" height="5" rx="0.2" />
            <rect id="Rectangle-2" x="8" y="0" width="2" height="11" rx="0.2" />
          </g>
        </g>
      </g>
    </svg>
  );
}

OrderDepth.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

OrderDepth.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 12 11',
  width: 12,
  height: 11,
};
