import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import styles from './button-styles';

const getElementType = (node, href, disabled) => {
  if (node) {
    return node;
  }

  return href && !disabled ? 'a' : 'button';
};

function Button({
  classes,
  variant,
  block,
  disabled,
  className,
  children,
  modifier,
  node,
  href,
  icon,
  iconAbove,
  size,
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  const Element = getElementType(node, href, disabled);
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isLink = variant === 'link';
  const isAction = modifier === 'action';
  const isSuccess = modifier === 'success';
  const isWarning = modifier === 'warning';
  const isDanger = modifier === 'danger';
  const usedClassName = classNames(
    classes.button,
    {
      [classes.block]: block,
      [classes.primary]: isPrimary,
      [classes.secondary]: isSecondary,
      [classes.link]: isLink,
      [classes.icon]: icon && !children,
      [classes.iconText]: icon && children,
      action: isAction,
      success: isSuccess,
      warning: isWarning,
      danger: isDanger,
    },
    classes[size],
    size,
    className,
  );
  const innerButtonWrapper = classNames(classes.innerWrapper, {
    [classes.iconAbove]: iconAbove,
  });

  return (
    <Element {...rest} className={usedClassName} disabled={disabled} href={href}>
      <div className={innerButtonWrapper}>
        {icon}
        <span className={classNames({ [classes.spaceForIcon]: icon && children && !iconAbove })}>{children}</span>
      </div>
    </Element>
  );
}

Button.defaultProps = {
  variant: 'primary',
  size: 'sm',
};

Button.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  /** Block level button that spans the full width of its parent */
  block: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'link']),
  modifier: PropTypes.oneOf(['action', 'success', 'warning', 'danger']),
  node: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  href: PropTypes.string,
  icon: PropTypes.node,
  iconAbove: PropTypes.bool,
  disabled: PropTypes.bool,
};

export { Button as Component, styles };
export default injectSheet(styles)(Button);
