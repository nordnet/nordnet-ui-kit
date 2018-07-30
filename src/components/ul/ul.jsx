import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// not currently doing anything
function Ul({ children, style, className, ...rest }) {
  const classes = classNames('ul', className);
  return (
    <ul {...rest} className={classes} style={style}>
      {children}
    </ul>
  );
}

Ul.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
  className: PropTypes.string,
};

export { Ul as Component };
export default Ul;
