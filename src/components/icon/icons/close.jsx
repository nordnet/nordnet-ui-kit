import React, { PropTypes } from 'react';
import Icon from '../icon';

export default function Close({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-210.000000, -330.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="close" transform="translate(210.000000, 330.000000)">
            <path d="M1.875,1.875 L14.125,14.125" id="Shape" />
            <path d="M14.1249998,1.875 L1.875,14.1249998" id="Shape" />
          </g>
        </g>
      </g>
    </svg>
  );
}

Close.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Close.defaultProps = Icon.defaultProps;
