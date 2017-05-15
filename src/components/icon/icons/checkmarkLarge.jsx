import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function CheckmarkLarge({
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
          <path d="M14.4000244,3 L5.40002441,12 L1.40002441,8" />
        </g>
      </g>
    </svg>
  );
}

CheckmarkLarge.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

CheckmarkLarge.defaultProps = Icon.defaultProps;
