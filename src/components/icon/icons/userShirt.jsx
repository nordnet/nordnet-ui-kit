import React, { PropTypes } from 'react';
import Icon from '../icon';

export default function UserShirt({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-163.000000, -330.000000)" stroke={stroke}>
          <g id="user-shirt" transform="translate(163.000000, 330.000000)">
            <path
              d="M5.57799916,9.79029905 C4.62116598,10.1636355 1,11 1,11 L1,15 L15,15 L15,11 L10.4710981,9.81636214"
              id="body"
              strokeWidth={strokeWidth}
            />
            <path d="M4,10 L6,14 L8,12 L10,14 L12,10" id="collar" strokeLinejoin="bevel" />
            <path
              d="M4,5 C4,8.3 5.8,11 8,11 C10.2,11 12,8.3 12,5 C12,2.8 10.2,1 8,1 C5.8,1 4,2.8 4,5 L4,5 Z"
              id="head"
              strokeWidth={strokeWidth}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

UserShirt.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

UserShirt.defaultProps = Icon.defaultProps;
