import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './li.scss';

function Li({ children, style, className, ...rest }) {
  const classes = classNames('li', className);
  return (
    <li { ...rest } className={ classes } style={ style }>{ children }</li>
  );
}

Li.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
  className: PropTypes.string,
};

export default Li;
