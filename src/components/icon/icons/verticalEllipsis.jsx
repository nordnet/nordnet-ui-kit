import React, { PropTypes } from 'react';
import Ellipsis from './ellipsis';

export default function VerticalEllipsis({ style: styleProp, ...rest }) {
  const style = {
    transform: 'rotate(0.25turn)',
    ...styleProp,
  };

  return (
    <Ellipsis style={style} {...rest} />
  );
}

VerticalEllipsis.propTypes = {
  style: PropTypes.object,
};
