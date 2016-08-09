import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './thead.scss';

function Thead(props) {
  const { className, children, size, ...rest } = props;
  const classes = classNames('thead', {
    [`thead--${size}`]: size,
  }, className);

  return (
    <thead { ...rest } className={ classes }>
      { children }
    </thead>
  );
}

Thead.defaultProps = {};

Thead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

export default Thead;
