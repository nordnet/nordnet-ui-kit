import React, { PropTypes } from 'react';
import ArrowLeft from './arrowLeft';

export default function ArrowUp({ style: styleProp, ...rest }) {
  const style = {
    transform: 'rotate(0.375turn)',
    ...styleProp,
  };
  return <ArrowLeft style={style} {...rest} />;
}

ArrowUp.propTypes = {
  style: PropTypes.object,
};
