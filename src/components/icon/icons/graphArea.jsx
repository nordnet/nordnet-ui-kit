import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function GraphArea({
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
        <polyline
          stroke={stroke}
          strokeWidth={strokeWidth}
          points="1 0 1 15 16 15"
        />
        <polygon fill={fill} points="3 13 3 9 6 6 9 9 16 2 16 13" />
      </g>
    </svg>
  );
}

GraphArea.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

GraphArea.defaultProps = Icon.defaultProps;
