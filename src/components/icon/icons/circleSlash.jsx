import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function CircleSlash({
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
          <circle cx="8" cy="8" r="7" />
          <path d="M12.5,3.5 L3.5,12.5" />
        </g>
      </g>
    </svg>
  );
}

CircleSlash.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

CircleSlash.defaultProps = Icon.defaultProps;
