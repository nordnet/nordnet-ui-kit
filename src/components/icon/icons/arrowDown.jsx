import PropTypes from 'prop-types';
import React from 'react';
import ArrowLeft from './arrowLeft';

export default function ArrowDown({ style: styleProp, ...rest }) {
  const style = {
    transform: 'rotate(0.625turn)',
    ...styleProp,
  };
  return <ArrowLeft style={style} {...rest} />;
}

ArrowDown.propTypes = {
  style: PropTypes.object,
};
