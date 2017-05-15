import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Key({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g transform="translate(-727.000000, -94.000000)" stroke={stroke}>
          <g id="key" transform="translate(727.000000, 94.000000)">
            <circle id="Oval" cx="11" cy="5" r="0.5" />
            <path
              d="M6.10526774,6.47208481 L1,11.5 L1,15 L5,15 L5,13 L7,13 L7,11 L8.5,11 L9.59170771,9.90829229
              C9.88507592,9.96842069 10.1888501,10 10.5,10 C12.9852814,10 15,7.98528137 15,5.5 C15,3.01471863
              12.9852814,1 10.5,1 C8.01471863,1 6,3.01471863 6,5.5 C6,5.83376165 6.03633592,6.15903659
              6.10526774,6.47208481 Z"
              id="Combined-Shape"
              strokeWidth={strokeWidth}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

Key.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Key.defaultProps = Icon.defaultProps;
