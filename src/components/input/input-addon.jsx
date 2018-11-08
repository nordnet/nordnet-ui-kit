import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const InputAddon = ({ content, position }) => {
  if (!content) {
    return null;
  }

  const classes = cn('input__addon', `input__addon--${position}`);

  return <div className={classes}>{typeof content === 'function' ? content() : content}</div>;
};

InputAddon.propTypes = {
  content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  position: PropTypes.string.isRequired,
};

export default InputAddon;
