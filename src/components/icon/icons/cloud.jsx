import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Cloud({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g stroke={stroke} strokeWidth={strokeWidth}>
          <path
            d="M12.5,11 C13.8807119,11 15,9.88071187 15,8.5 C15,7.29043469 14.1409975,6.28150016 12.9997556,6.04995945
            C12.9999184,6.03332561 13,6.01667234 13,6 C13,3.23857625 10.7614237,1 8,1 C5.87356524,1 4.05716713,2.32742474
            3.33424553,4.19883439 C1.97437795,4.67905254 1,5.97573719 1,7.5 C1,9.43299662 2.56700338,11 4.5,11 L12.5,11 Z"
          />
        </g>
      </g>
    </svg>
  );
}

Cloud.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Cloud.defaultProps = Icon.defaultProps;
