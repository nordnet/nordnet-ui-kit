import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function MailOpen({
  stroke,
  fill,
  strokeWidth,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg style={style} {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g stroke={stroke} strokeWidth={strokeWidth}>
          <path d="M1,15 L1,5 L8,1.1499939 L15,5 L15,15 L1,15 Z" />
          <path d="M1,6 L8,10.1499939 L15,6" />
        </g>
      </g>
    </svg>
  );
}

MailOpen.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

MailOpen.defaultProps = Icon.defaultProps;
