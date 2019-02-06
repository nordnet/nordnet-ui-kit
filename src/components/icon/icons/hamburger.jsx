import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Hamburger({
  fill,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg style={style} {...rest}>
      <path d="M0 0h26v2H0V0zm0 16h26v2H0v-2zm0-8h26v2H0V8z" fill={fill} fillRule="evenodd" />
    </svg>
  );
}

Hamburger.propTypes = {
  ...Icon.propTypes,
  fill: PropTypes.string,
};

Hamburger.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 26 18',
};
