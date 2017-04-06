import React, { PropTypes } from 'react';
import cn from 'classnames';
import withThemedStyles from '../../hocs/with-themed-styles';
import styles from './styles';

function Button({
  classes,
  variant,
  block,
  disabled,
  className,
  children,
  modifier,
  href,
  size,
  ...rest
}) {
  const Element = href ? 'a' : 'button';
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isLink = variant === 'link';
  const isSuccess = modifier === 'success';
  const isWarning = modifier === 'warning';
  const isDanger = modifier === 'danger';

  return (
    <Element
      className={cn({
        [classes.button]: true,
        [classes.block]: block,
        [classes.primary]: isPrimary,
        [classes['primary--success']]: isPrimary && isSuccess,
        [classes['primary--warning']]: isPrimary && isWarning,
        [classes['primary--danger']]: isPrimary && isDanger,
        [classes.secondary]: isSecondary,
        [classes.secondarySuccess]: isSecondary && isSuccess,
        [classes.secondaryWarning]: isSecondary && isWarning,
        [classes.secondaryDanger]: isSecondary && isDanger,
        [classes.link]: isLink,
        [classes.linkSuccess]: isLink && isSuccess,
        [classes.linkWarning]: isLink && isWarning,
        [classes.linkDanger]: isLink && isDanger,
      }, classes[`size--${size}`], className)}
      disabled={disabled}
      href={href}
      {...rest}
    >
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
  classes: PropTypes.object.isRequired,
};

export default withThemedStyles(styles, Button);
