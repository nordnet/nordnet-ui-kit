import React from 'react';
import classNames from 'classnames';
import './button.scss';

function Button(props) {
  const { primary, secondary, variant, link, modifier, href } = props;
  const Element = href ? 'a' : 'button';
  const isPrimary = primary || variant === 'primary';
  const isSecondary = secondary || variant === 'secondary';
  const isSuccess = modifier === 'success';
  const isWarning = modifier === 'warning';
  const isDanger = modifier === 'danger';
  const classes = classNames({
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
  }, props.className);

  return (
    <Element { ...props } disabled={ props.disabled } className={ classes }>
      { props.children }
    </Element>
  );
}

Button.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  variant: React.PropTypes.string,
  primary: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  link: React.PropTypes.bool,
  modifier: React.PropTypes.string,
  href: React.PropTypes.string,
  disabled: React.PropTypes.bool,
};

export default Button;
