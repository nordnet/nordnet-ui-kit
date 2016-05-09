import React, { PropTypes } from 'react';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import './value.scss';

export default function Value({
  label,
  children,
  id: idProp,
  className,
  size,
  ...rest,
}) {
  const id = idProp || `${kebabCase(label)}-label`;
  const classes = classNames('value', {
    'value--xs': size === 'xs',
    'value--sm': size === 'sm',
    'value--md': size === 'md',
    'value--lg': size === 'lg',
  }, className);

  return (
    <div { ...rest } className={ classes }>
      <span className="value__label" id={ id }>{ label }</span>
      <span className="value__value" aria-labelledby={ id } >{ children }</span>
    </div>
  );
}

Value.defaultProps = {
  label: '',
  children: '',
  size: 'md',
};

Value.propTypes = {
  label: PropTypes.node,
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};
