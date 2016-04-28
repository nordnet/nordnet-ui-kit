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
  const isLink = link || variant === 'link';
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
    'btn-link': isLink,
    'btn-link--success': isLink && isSuccess,
    'btn-link--warning': isLink && isWarning,
    'btn-link--danger': isLink && isDanger,
  }, className);

  if (primary || secondary || link) {
    console.warn(`Warning: Nordnet UI Kit button component primary, secondary and link props are deprecated, use variant={ primary, secondary, link } instead, check button with value: ${children}`); // eslint-disable-line
  }

  return (
    <Element { ...rest } className={ classes } disabled={ disabled }>
      { children }
    </Element>
  );
}

Button.defaultProps = {
  variant: 'primary',
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  block: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'link']).isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  link: PropTypes.bool,
  modifier: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
