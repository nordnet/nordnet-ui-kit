import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './button.scss';

function Button({
  primary,
  secondary,
  variant,
  block,
  disabled,
  className,
  children,
  link,
  modifier,
  href,
  ...rest,
}) {
  const Element = href ? 'a' : 'button';
  const isPrimary = primary || variant === 'primary';
  const isSecondary = secondary || variant === 'secondary';
  const isSuccess = modifier === 'success';
  const isWarning = modifier === 'warning';
  const isDanger = modifier === 'danger';
  const classes = classNames({
    'btn--block': block,
    'btn-primary': isPrimary,
    'btn-primary--success': isPrimary && isSuccess,
    'btn-primary--warning': isPrimary && isWarning,
    'btn-primary--danger': isPrimary && isDanger,
    'btn-secondary': isSecondary,
    'btn-secondary--success': isSecondary && isSuccess,
    'btn-secondary--warning': isSecondary && isWarning,
    'btn-secondary--danger': isSecondary && isDanger,
    'btn-link': link,
    'btn-link--success': link && isSuccess,
    'btn-link--warning': link && isWarning,
    'btn-link--danger': link && isDanger,
  }, className);

  if (primary || secondary) {
    console.warn(`Warning: Nordnet UI Kit button component primary, secondary props are deprecated, use variant={ primary, secondary } instead, check button with value: ${children}`); // eslint-disable-line
  }

  return (
    <Element { ...rest } className={ classes } disabled={ disabled }>
      { children }
    </Element>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  block: PropTypes.bool,
  variant: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  link: PropTypes.bool,
  modifier: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
