import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './thead.scss';

function Thead({
  className,
  children,
  size,
  variant,
  ...rest
}) {
  const classes = classNames('thead', {
    'thead--xs': size === 'xs',
    'thead--sm': size === 'sm',
    'thead--md': size === 'md',
    'thead--lg': size === 'lg',
    'thead--primary': variant === 'primary',
    'thead--secondary': variant === 'secondary',
  }, className);

  return (
    <thead {...rest} className={classes}>
      { children }
    </thead>
  );
}

Thead.defaultProps = {};

Thead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Thead;
