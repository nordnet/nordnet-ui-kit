import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function TriangleSolid({ fill, style: styleProp, ...rest }) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };

  return (
    <svg style={style} {...rest}>
      <polygon fill={fill} points="141.42,70.71 0,70.71 70.71,0" />
    </svg>
  );
}

TriangleSolid.propTypes = {
  ...Icon.propTypes,
  fill: PropTypes.string,
};

TriangleSolid.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 141.42 70.71',
};
