import React from 'react';
import classNames from 'classnames';
import './button.scss';

function Button(props) {
  const { primary, secondary, link, type, href } = props;
  const ComponentClass = href ? 'a' : 'button';
  const classes = classNames({
    'btn-primary': primary,
    'btn-primary--success': primary && type === 'success',
    'btn-primary--warning': primary && type === 'warning',
    'btn-primary--danger': primary && type === 'danger',
    'btn-secondary': secondary,
    'btn-secondary--success': secondary && type === 'success',
    'btn-secondary--warning': secondary && type === 'warning',
    'btn-secondary--danger': secondary && type === 'danger',
    'btn-link': link,
    'btn-link--success': link && type === 'success',
    'btn-link--warning': link && type === 'warning',
    'btn-link--danger': link && type === 'danger',
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
  type: React.PropTypes.string,
  href: React.PropTypes.string,
  disabled: React.PropTypes.bool,
};

export default Button;
