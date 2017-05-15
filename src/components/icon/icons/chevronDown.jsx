import PropTypes from 'prop-types';
import React from 'react';
import ChevronUp from './chevronUp';
import Icon from '../icon';

export default function ChevronDown({ style: styleProp, ...rest }) {
  const style = {
    transform: 'rotate(0.5turn)',
    ...styleProp,
    ...Icon.defaultProps.style,
  };

  return <ChevronUp style={style} {...rest} />;
}

ChevronDown.propTypes = {
  style: PropTypes.object,
};
