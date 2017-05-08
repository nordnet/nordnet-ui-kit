import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function CircleArrow({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg aria-hidden="true" focusable="false" {...rest}>
      <g id="icons" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="refresh" fillRule="nonzero" fill={fill}>
          <path
            d="M17.146,6.646 L15.998,7.795 C15.947,5.735 15.12,3.805 13.657,2.343 C12.146,0.832 10.137,1.77635684e-15
            8,1.77635684e-15 C5.863,1.77635684e-15 3.854,0.832 2.343,2.343 C0.832,3.854 -3.55271368e-15,5.863
            -3.55271368e-15,8 C-3.55271368e-15,10.137 0.832,12.146 2.343,13.657 C3.854,15.168 5.863,16 8,16 C10.974,16
            13.686,14.365 15.077,11.734 C15.206,11.49 15.113,11.187 14.869,11.058 C14.625,10.929 14.322,11.022
            14.193,11.266 C12.976,13.569 10.603,15 8,15 C4.14,15 1,11.86 1,8 C1,4.14 4.14,1 8,1 C11.789,1 14.885,4.027
            14.997,7.789 L13.854,6.646 C13.659,6.451 13.342,6.451 13.147,6.646 C12.952,6.841 12.952,7.158 13.147,7.353
            L15.147,9.353 C15.245,9.451 15.373,9.499 15.501,9.499 C15.629,9.499 15.757,9.45 15.855,9.353 L17.854,7.353
            C18.049,7.158 18.049,6.841 17.854,6.646 C17.659,6.451 17.341,6.451 17.146,6.646 Z"
            id="Shape"
          />
        </g>
      </g>
    </svg>
  );
}

CircleArrow.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

CircleArrow.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 18 16',
  width: 18,
  height: 16,
};
