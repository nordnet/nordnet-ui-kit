import React, { PropTypes } from 'react';
import ArrowLeft from './arrowLeft';

export default function ArrowRight({ style: styleProp, ...rest }) {
  const style = {
    transform: 'rotate(0.5turn)',
    ...styleProp,
  };
  return <ArrowLeft style={style} {...rest} />;
}

ArrowRight.propTypes = {
  style: PropTypes.object,
};
