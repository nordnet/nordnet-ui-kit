import React, { PropTypes } from 'react';
import ArrowRight from './arrowRight';

export default function ArrowLeft({ style: styleProp, ...rest }) {
  const style = {
    transform: 'rotate(0.5turn)',
    ...styleProp,
  };
  return <ArrowRight style={style} {...rest} />;
}

ArrowLeft.propTypes = {
  style: PropTypes.object,
};
