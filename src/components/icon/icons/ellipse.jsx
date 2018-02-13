import React from 'react';
import Icon from '../icon';

export default function Ellipse({
  stroke,
  strokeWidth,
  fill,
  width,
  height,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };

  return (
    <svg width={width} height={height} style={style} {...rest} viewBox={`0 0 ${width} ${height}`}>
      <ellipse
        strokeWidth={strokeWidth}
        stroke={stroke}
        fill={fill}
        cx={parseInt(width / 2, 10)}
        cy={parseInt(height / 2, 10)}
        rx={parseInt((width - strokeWidth) / 2, 10)}
        ry={parseInt((height - strokeWidth) / 2, 10)}
        style={{ ...style }}
      />
    </svg>
  );
}

Ellipse.propTypes = {
  ...Icon.propTypes,
};

Ellipse.defaultProps = {
  ...Icon.defaultProps,
  height: 16,
  width: 16,
  strokeWidth: 0,
};
