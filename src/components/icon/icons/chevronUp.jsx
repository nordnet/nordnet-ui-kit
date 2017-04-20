import React, { PropTypes } from 'react';
import Icon from '../icon';

export default function ChevronUp({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-213.000000, -98.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="chevron-up" transform="translate(213.000000, 98.000000)">
            <path d="M0.75,6.5 L5,2.25 L9.25,6.5" id="Shape" />
          </g>
        </g>
      </g>
    </svg>
  );
}

ChevronUp.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

ChevronUp.defaultProps = {
  ...Icon.defaultProps,
  width: 10,
  height: 8,
  viewBox: '0 0 10 8',
};
