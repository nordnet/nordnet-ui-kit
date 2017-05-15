import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function MailOpen({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g transform="translate(-445.000000, -188.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="mail-open" transform="translate(445.000000, 188.000000)">
            <path d="M1,15 L1,5 L8,1.1499939 L15,5 L15,15 L1,15 Z" id="Path-503" />
            <path d="M1,6 L8,10.1499939 L15,6" />
          </g>
        </g>
      </g>
    </svg>
  );
}

MailOpen.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

MailOpen.defaultProps = Icon.defaultProps;
