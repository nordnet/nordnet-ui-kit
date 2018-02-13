import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Ellipse({
  stroke,
  strokeWidth,
  viewBox,
  fill,
  width,
  height,
  cx,
  cy,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };

  const viewBoxProps = viewBox || `0 0 ${width} ${height}`;

  return (
    <svg width={width} height={height} style={style} {...rest} viewBox={viewBoxProps}>
      <ellipse
        strokeWidth={strokeWidth}
        stroke={stroke}
        fill={fill}
        cx={cx || parseInt(width / 2, 10)}
        cy={cy || parseInt(height / 2, 10)}
        rx={parseInt(width / 2, 10)}
        ry={parseInt(height / 2, 10)}
        style={{ ...style }}
      />
    </svg>
  );
}

Ellipse.propTypes = {
  ...Icon.propTypes,
  cx: PropTypes.number,
  cy: PropTypes.number,
};

Ellipse.defaultProps = {
  ...Icon.defaultProps,
  height: 16,
  width: 16,
  strokeWidth: 0,
  viewBox: null,
  cx: null,
  cy: null,
};
