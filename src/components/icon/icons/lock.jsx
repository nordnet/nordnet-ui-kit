import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Lock({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-492.000000, -141.000000)" stroke={stroke}>
          <g id="lock" transform="translate(492.000000, 141.000000)">
            <rect id="Rectangle-path" strokeWidth={strokeWidth} x="3" y="6" width="10" height="9" />
            <path
              d="M8,10.5 C8.55228475,10.5 9,10.0522847 9,9.5 C9,8.94771525 8.55228475,8.5 8,8.5 C7.44771525,8.5
              7,8.94771525 7,9.5 C7,10.0522847 7.44771525,10.5 8,10.5 Z M7.25,12.5 L8.75,12.5 L8,10.75 L7.25,12.5
              Z M7.5,9 L8.5,9 L8.5,10 L7.5,10 L7.5,9 Z"
              id="Combined-Shape"
            />
            <path d="M5,6 L5,4 C5,2.3 6.3,1 8,1 L8,1 C9.7,1 11,2.3 11,4 L11,6" id="Shape" strokeWidth={strokeWidth} />
          </g>
        </g>
      </g>
    </svg>
  );
}

Lock.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Lock.defaultProps = Icon.defaultProps;
