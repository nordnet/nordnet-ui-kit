import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function GraphLine({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg aria-hidden="true" focusable="false" {...rest}>
      <g id="icons" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="graph-line" stroke={stroke}>
          <polyline id="Shape" points="0 9.6 5.6 4 8.8 7.2 16 0" />
        </g>
      </g>
    </svg>
  );
}

GraphLine.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

GraphLine.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 16 10',
  width: 16,
  height: 10,
};
