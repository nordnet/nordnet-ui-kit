import React, { PropTypes } from 'react';
import ChevronUp from './chevronUp';

export default function ChevronDown({ style: styleProp, ...rest }) {
  const style = {
    transform: 'rotate(0.5turn)',
    ...styleProp,
  };

  return <ChevronUp style={style} {...rest} />;
}

ChevronDown.propTypes = {
  style: PropTypes.object,
};
