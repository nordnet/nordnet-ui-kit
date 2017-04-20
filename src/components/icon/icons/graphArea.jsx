import React, { PropTypes } from 'react';
import Icon from '../icon';

export default function GraphArea({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-1103.000000, -235.000000)">
          <g id="graph-area" transform="translate(1103.000000, 235.000000)">
            <polyline id="Shape" stroke={stroke} strokeWidth={strokeWidth} points="1 0 1 15 16 15" />
            <polygon id="Shape" fill={fill} points="3 13 3 9 6 6 9 9 16 2 16 13" />
          </g>
        </g>
      </g>
    </svg>
  );
}

GraphArea.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

GraphArea.defaultProps = Icon.defaultProps;
