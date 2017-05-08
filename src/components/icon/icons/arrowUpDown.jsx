import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function ArrowUpDown({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg aria-hidden="true" focusable="false" {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-163.000000, -141.000000)" strokeWidth={strokeWidth} stroke={stroke}>
          <g id="arrow-up-down" transform="translate(163.000000, 141.000000)">
            <polyline id="Shape" points="13 15 8 15 8 10" />
            <path d="M8,15 L15.25,7.75" id="Shape" />
            <polyline id="Shape" points="3 1 8 1 8 6" />
            <path d="M8,1 L0.75,8.25" id="Shape" />
          </g>
        </g>
      </g>
    </svg>
  );
}

ArrowUpDown.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

ArrowUpDown.defaultProps = Icon.defaultProps;
