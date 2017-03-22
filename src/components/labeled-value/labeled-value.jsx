import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import './labeled-value.scss';

export default function LabeledValue({
  label,
  children,
  id: idProp,
  className,
  size,
  ...rest
}) {
  const id = idProp || `${kebabCase(label)}-label`;
  const classes = classNames('labeled-value', {
    'labeled-value--xs': size === 'xs',
    'labeled-value--sm': size === 'sm',
    'labeled-value--md': size === 'md',
    'labeled-value--lg': size === 'lg',
  }, className);

  return (
    <div {...rest} className={classes}>
      <span className="labeled-value__label" id={id}>{ label }</span>
      <span className="labeled-value__value" aria-labelledby={id} >{ children }</span>
    </div>
  );
}

LabeledValue.defaultProps = {
  label: '',
  children: '',
  size: 'md',
};

LabeledValue.propTypes = {
  label: PropTypes.node,
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};
