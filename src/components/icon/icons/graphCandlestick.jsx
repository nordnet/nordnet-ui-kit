import React, { PropTypes } from 'react';
import defaultProps from './defaultProps';

export default function GraphCandlestick({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-350.000000, -330.000000)" stroke={stroke}>
          <g id="graph-candlestick" transform="translate(350.000000, 330.000000)">
            <rect id="Rectangle-3" x="1.5" y="0.5" width="1" height="4" />
            <rect id="Rectangle-4" x="1.5" y="11.5" width="1" height="4" />
            <rect id="Rectangle-3" x="7.5" y="0.5" width="1" height="6" />
            <rect id="Rectangle-3" x="13.5" y="0.5" width="1" height="2" />
            <rect id="Rectangle-3" x="13.5" y="12.5" width="1" height="3" />
            <rect id="Rectangle-3" x="7.5" y="11.5" width="1" height="4" />
            <rect id="Rectangle-2" x="0.5" y="5.5" width="3" height="5" />
            <rect id="Rectangle-2" x="6.5" y="7.5" width="3" height="3" />
            <rect id="Rectangle-2" x="12.5" y="3.5" width="3" height="8" />
          </g>
        </g>
      </g>
    </svg>
  );
}

GraphCandlestick.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

GraphCandlestick.defaultProps = defaultProps;
