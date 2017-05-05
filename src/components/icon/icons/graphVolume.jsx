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
        <g transform="translate(-1.0, 0)" id="graphBars" stroke={stroke}>
          <rect id="Rectangle" x="11.5" y="6.5" width="3" height="9" rx="0.7" />
          <rect id="Rectangle" x="6.5" y="10.5" width="3" height="5" rx="0.7" />
          <rect id="Rectangle" x="1.5" y="0.5" width="3" height="15" rx="0.7" />
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
  viewBox: '0 0 14 16',
  width: 14,
  height: 16,
};
