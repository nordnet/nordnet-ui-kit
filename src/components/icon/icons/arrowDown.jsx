import React, { PropTypes } from 'react';
import Icon from '../icon';

export default function ArrowDown({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-116.000000, -141.000000)" strokeWidth={strokeWidth} stroke={stroke}>
          <g id="arrow-down" transform="translate(116.000000, 141.000000)">
            <polyline id="Shape" points="15 5 15 15 5 15" />
            <path d="M15,15 L0.730003357,0.729995728" id="Shape" />
          </g>
        </g>
      </g>
    </svg>
  );
}

ArrowDown.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

ArrowDown.defaultProps = Icon.defaultProps;
