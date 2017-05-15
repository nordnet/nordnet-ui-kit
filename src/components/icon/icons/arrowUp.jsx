import PropTypes from 'prop-types';
import React from 'react';
import ArrowLeft from './arrowLeft';
import Icon from '../icon';

export default function ArrowUp({ style: styleProp, ...rest }) {
  const style = {
    transform: 'rotate(0.375turn)',
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return <ArrowLeft style={style} {...rest} />;
}

ArrowUp.propTypes = {
  style: PropTypes.object,
};
