import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Heart({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g strokeWidth={strokeWidth} stroke={stroke}>
          <path
            d="M2.1,2.79999695 C2.8,2.09999695 3.7,1.69999695 4.7,1.69999695 C5.7,1.69999695 6.6,2.09999695 7.3,2.79999695
            L8,3.49999695 L8.7,2.79999695 C9.4,2.09999695 10.3,1.69999695 11.3,1.69999695 C12.3,1.69999695 13.2,2.09999695
            13.9,2.79999695 C14.6,3.49999695 15,4.39999695 15,5.39999695 C15,6.39999695 14.6,7.29999695 13.9,7.99999695 L8,13.9999969
            L2.1,7.99999695 C1.4,7.29999695 1,6.39999695 1,5.39999695 C1,4.39999695 1.4,3.49999695 2.1,2.79999695 L2.1,2.79999695 Z"
          />
        </g>
      </g>
    </svg>
  );
}

Heart.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Heart.defaultProps = Icon.defaultProps;
