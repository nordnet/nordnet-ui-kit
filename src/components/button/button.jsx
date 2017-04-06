import React, { PropTypes } from 'react';
import cn from 'classnames';
import { withThemedStyles } from '../../hocs';
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
        [classes['secondary--success']]: isSecondary && isSuccess,
        [classes['secondary--warning']]: isSecondary && isWarning,
        [classes['secondary--danger']]: isSecondary && isDanger,
        [classes.link]: isLink,
        [classes['link--success']]: isLink && isSuccess,
        [classes['link--warning']]: isLink && isWarning,
        [classes['link--danger']]: isLink && isDanger,
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
