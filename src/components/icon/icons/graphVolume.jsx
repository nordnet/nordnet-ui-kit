import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function GraphVolume({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="icons" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g transform="translate(-184.0, -98.0)" id="GraphVolume" stroke={stroke}>
          <g transform="translate(191.0, 105.5) rotate(180.0) translate(-191.0, -105.5) translate(184.5, 99.0)">
            <rect id="Rectangle-2" x="0" y="0" width="3" height="10" rx="0.2" />
            <rect id="Rectangle-2" x="5" y="0" width="3" height="5" rx="0.2" />
            <rect id="Rectangle-2" x="10" y="0" width="3" height="13" rx="0.2" />
          </g>
        </g>
      </g>
    </svg>
  );
}

GraphVolume.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

GraphVolume.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 14 15',
  width: 14,
  height: 15,
};
