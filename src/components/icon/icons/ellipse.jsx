import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Ellipse({
  stroke,
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
        cx={parseInt(width / 2, 10)}
        cy={parseInt(height / 2, 10)}
        rx={parseInt(width / 2, 10)}
        ry={parseInt(height / 2, 10)}
        style={{ ...style, fill }}
      />
    </svg>
  );
}

Ellipse.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
};

Ellipse.defaultProps = Icon.defaultProps;
