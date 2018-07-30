import PropTypes from 'prop-types';
import React from 'react';
import SolidArrowUp from './solidArrowUp';

export default function SolidArrowDown({ style: styleProp, ...rest }) {
  const style = {
    transform: 'rotate(0.5turn)',
    ...styleProp,
    ...SolidArrowUp.defaultProps.style,
  };

  return <SolidArrowUp style={style} {...rest} />;
}

SolidArrowDown.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
  ...SolidArrowUp.propTypes,
};

SolidArrowDown.defaultProps = SolidArrowUp.defaultProps;
