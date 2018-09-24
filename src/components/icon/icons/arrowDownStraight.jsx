import PropTypes from 'prop-types';
import React from 'react';
import ArrowLeft from './arrowLeft';
import Icon from '../icon';

export default function ArrowDownStraight({ style: styleProp, ...rest }) {
  const style = {
    transform: 'rotate(0.75turn)',
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return <ArrowLeft style={style} {...rest} />;
}

ArrowDownStraight.propTypes = {
  style: PropTypes.object,
};
