import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './ul.scss';

// not currently doing anything
function Ul({ children, style, className, ...rest }) {
  const classes = classNames('ul', className);
  return (
    <ul { ...rest } className={ classes } style={ style }>
      { children }
    </ul>
  );
}

Ul.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
  className: PropTypes.string,
};

export default Ul;
