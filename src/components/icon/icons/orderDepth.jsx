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
    <svg aria-hidden="true" focusable="false" {...rest}>
      <g id="icons" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g transform="translate(0, -3)" id="OrderDepth" stroke={stroke}>
          <rect id="Rectangle" x="0.5" y="3.5" width="9" height="2" rx="0.7" />
          <rect id="Rectangle" x="0.5" y="7.5" width="5" height="2" rx="0.7" />
          <rect id="Rectangle-3-" x="0.5" y="11.5" width="15" height="2" rx="0.7" />
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
  viewBox: '0 0 16 11',
  width: 16,
  height: 11,
};
