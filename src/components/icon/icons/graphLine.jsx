import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function GraphLine({
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
          <polyline points="0 9.6 5.6 4 8.8 7.2 16 0" />
        </g>
      </g>
    </svg>
  );
}

GraphLine.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

GraphLine.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 16 10',
  width: 16,
  height: 10,
};
