import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function News({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg aria-hidden="true" focusable="false" {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-727.000000, -188.000000)" stroke={stroke}>
          <g id="news" transform="translate(727.000000, 188.000000)">
            <path d="M3.00000002,14 L13,14 C14.1,14 15,13.1 15,12 L15,2 L4,2 L4,6" id="Shape" strokeWidth={strokeWidth} />
            <path d="M10,4.5 L13,4.5" id="Shape" />
            <path d="M10,6.5 L13,6.5" id="Shape" />
            <path d="M10,8.5 L13,8.5" id="Shape" />
            <path d="M10,10.5 L13,10.5" id="Shape" />
            <path d="M6,10.5 L9,10.5" id="Shape" />
            <path d="M6,8.5 L9,8.5" id="Shape" />
            <path d="M3.8,14 L3,14 L3,14 C1.9,14 1,13.1 1,12 L1,5 L3.8,5" id="Shape" strokeWidth={strokeWidth} />
            <rect id="Rectangle-path" fill={fill} x="6.5" y="4.5" width="2" height="2" />
            <path d="M4.5,6 L4.5,12 C4.5,12.8 3.8,13.5 3,13.5 L3,13.5" id="Shape" />
          </g>
        </g>
      </g>
    </svg>
  );
}

News.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

News.defaultProps = Icon.defaultProps;
