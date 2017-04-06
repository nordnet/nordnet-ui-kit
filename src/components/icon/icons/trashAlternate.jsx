import React, { PropTypes } from 'react';
import defaultProps from './defaultProps';

export default function TrashAlternate({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-962.000000, -141.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="trash-alternate" transform="translate(962.000000, 141.000000)">
            <rect id="Rectangle-path" x="2" y="4" width="12" height="11" />
            <rect id="Rectangle-path" x="6" y="1" width="4" height="3" />
            <path d="M5,4.5 L5,14.3" id="Shape" />
            <path d="M8,4.5 L8,14.3" id="Shape" />
            <path d="M11,4.5 L11,14.3" id="Shape" />
          </g>
        </g>
      </g>
    </svg>
  );
}

TrashAlternate.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

TrashAlternate.defaultProps = defaultProps;
