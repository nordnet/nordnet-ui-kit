import PropTypes from 'prop-types';
import React from 'react';
import ArrowLeft from './arrowLeft';
import Icon from '../icon';

export default function ArrowUpStraight({ style: styleProp, ...rest }) {
  const style = {
    transform: 'rotate(0.25turn)',
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return <ArrowLeft style={style} {...rest} />;
}

ArrowUpStraight.propTypes = {
  style: PropTypes.object,
};
