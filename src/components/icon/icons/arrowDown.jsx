import React, { PropTypes } from 'react';
import ArrowUp from './arrowUp';

export default function ArrowDown({ style: styleProp, ...rest }) {
  const style = {
    transform: 'rotate(0.25turn)',
    ...styleProp,
  };

  return (
    <ArrowUp style={style} {...rest} />
  );
}

ArrowDown.propTypes = {
  style: PropTypes.object,
};
