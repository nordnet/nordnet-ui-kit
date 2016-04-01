import React from 'react';
import classNames from 'classnames';
import './button.scss';

function Button(props) {
  const { primary, secondary, variant, link, modifier, href } = props;
  const Element = href ? 'a' : 'button';
  const isPrimary = primary || variant === 'primary';
  const isSecondary = secondary || variant === 'secondary';
  const classes = classNames({
    'btn-primary': isPrimary,
    'btn-primary--success': isPrimary && modifier === 'success',
    'btn-primary--warning': isPrimary && modifier === 'warning',
    'btn-primary--danger': isPrimary && modifier === 'danger',
    'btn-secondary': isSecondary,
    'btn-secondary--success': isSecondary && modifier === 'success',
    'btn-secondary--warning': isSecondary && modifier === 'warning',
    'btn-secondary--danger': isSecondary && modifier === 'danger',
    'btn-link': link,
    'btn-link--success': link && modifier === 'success',
    'btn-link--warning': link && modifier === 'warning',
    'btn-link--danger': link && modifier === 'danger',
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
