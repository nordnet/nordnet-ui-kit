import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import ButtonStyles from './button-styles';

function Button({
  variant,
  block,
  disabled,
  className,
  children,
  modifier,
  href,
  size,
  ...rest
}, { styleManager }) {
  const Element = href ? 'a' : 'button';
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isLink = variant === 'link';
  const isSuccess = modifier === 'success';
  const isWarning = modifier === 'warning';
  const isDanger = modifier === 'danger';
  const classes = styleManager.render(ButtonStyles);
  const usedClassName = classNames(classes.button, {
    [classes.block]: block,
    [classes.primary]: isPrimary,
    [classes.secondary]: isSecondary,
    [classes.link]: isLink,
    success: isSuccess,
    warning: isWarning,
    danger: isDanger,
  }, classes[size], className);

  return (
    <Element {...rest} className={usedClassName} disabled={disabled} href={href}>
      { children }
    </Element>
  );
}

Button.defaultProps = {
  variant: 'primary',
  size: 'sm',
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Block level button that spans the full width of its parent */
  block: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'link']),
  modifier: PropTypes.oneOf(['success', 'warning', 'danger']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  href: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};


export default Button;
