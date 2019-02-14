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
      <polygon points="0 0, 0 100, 100 0" fill={fill} />
    </svg>
  );
}

TriangleSolid.propTypes = {
  ...Icon.propTypes,
  fill: PropTypes.string,
};

TriangleSolid.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 100 100',
};
