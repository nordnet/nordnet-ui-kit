import PropTypes from 'prop-types';
import React from 'react';
import ArrowLeft from './arrowLeft';
import Icon from '../icon';

export default function ArrowRight({ style: styleProp, ...rest }) {
  const style = {
    transform: 'rotate(0.5turn)',
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return <ArrowLeft style={style} {...rest} />;
}

ArrowRight.propTypes = {
  style: PropTypes.object,
};
