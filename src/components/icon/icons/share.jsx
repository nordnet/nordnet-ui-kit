import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Share({
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
        <g stroke={stroke}>
          <circle strokeWidth="1.5" cx="12.75" cy="3.25" r="2.5" />
          <circle strokeWidth="1.5" cx="3.25" cy="8" r="2.5" />
          <circle strokeWidth="1.5" cx="12.75" cy="12.75" r="2.5" />
          <path d="M11,4 L5,7" strokeWidth={strokeWidth} />
          <path d="M11,12 L5,9" strokeWidth={strokeWidth} />
        </g>
      </g>
    </svg>
  );
}

Share.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Share.defaultProps = Icon.defaultProps;
