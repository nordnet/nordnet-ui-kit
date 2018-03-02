import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function SolidArrowUp({ stroke, fill, strokeWidth, style: styleProp, ...rest }) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };

  return (
    <svg style={style} {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g transform="translate(-40.000000, -70.000000)" fill={fill}>
          <polygon points="50 70 60 86 40 86" />
        </g>
      </g>
    </svg>
  );
}

SolidArrowUp.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
  ...Icon.propTypes,
};

SolidArrowUp.defaultProps = {
  ...Icon.defaultProps,
  width: 16,
  height: 16,
  viewBox: '0 0 20 20',
};
