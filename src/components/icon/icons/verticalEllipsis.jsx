import PropTypes from 'prop-types';
import React from 'react';
import Ellipsis from './ellipsis';
import Icon from '../icon';

export default function VerticalEllipsis({ style: styleProp, ...rest }) {
  const style = {
    transform: 'rotate(0.25turn)',
    ...styleProp,
    ...Icon.defaultProps.style,
  };

  return <Ellipsis style={style} {...rest} />;
}

VerticalEllipsis.propTypes = {
  style: PropTypes.object,
};
