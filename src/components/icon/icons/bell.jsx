import React, { PropTypes } from 'react';
import Icon from '../icon';

export default function Bell({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-1197.000000, -141.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="bell" transform="translate(1197.000000, 141.000000)">
            <path d="M13,9 L14,10 L14,12 L2,12 L2,10 L3,9 L3,6 C3,3.2 5.2,1 8,1 L8,1 C10.8,1 13,3.2 13,6 L13,9 L13,9 Z" id="Shape" />
            <path d="M11,12 C11,13.7 9.7,15 8,15 C6.3,15 5,13.7 5,12" id="Shape" />
          </g>
        </g>
      </g>
    </svg>
  );
}

Bell.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Bell.defaultProps = Icon.defaultProps;
