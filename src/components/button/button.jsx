import React from 'react';
import classNames from 'classnames';
import './button.scss';

function Button(props) {
  const { primary, secondary, link, modifier, href } = props;
  const ComponentClass = href ? 'a' : 'button';
  const classes = classNames({
    'btn-primary': primary,
    'btn-primary--success': primary && modifier === 'success',
    'btn-primary--warning': primary && modifier === 'warning',
    'btn-primary--danger': primary && modifier === 'danger',
    'btn-secondary': secondary,
    'btn-secondary--success': secondary && modifier === 'success',
    'btn-secondary--warning': secondary && modifier === 'warning',
    'btn-secondary--danger': secondary && modifier === 'danger',
    'btn-link': link,
    'btn-link--success': link && modifier === 'success',
    'btn-link--warning': link && modifier === 'warning',
    'btn-link--danger': link && modifier === 'danger',
  }, props.className);

  return (
    <ComponentClass { ...props } disabled={ props.disabled } className={ classes }>
      { props.children }
    </ComponentClass>
  );
}

Button.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  primary: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  link: React.PropTypes.bool,
  modifier: React.PropTypes.string,
  href: React.PropTypes.string,
  disabled: React.PropTypes.bool,
};

export default Button;
