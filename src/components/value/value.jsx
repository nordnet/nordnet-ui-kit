import React, { PropTypes } from 'react';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import './value.scss';

export default function Value({
  label,
  children,
  id: idProp,
  className,
  xs,
  sm,
  md,
  lg,
  ...rest,
}) {
  const id = idProp || `${kebabCase(label)}-label`;
  const classes = classNames('value', {
    'value--xs': xs,
    'value--sm': sm,
    'value--md': md || (!xs && !sm && !lg),
    'value--lg': lg,
  }, className);

  if ([xs, sm, md, lg].filter(modifier => modifier).length > 1) {
    console.warn(`Warning: Nordnet UI Kit value component only supports one size modifier (xs, sm, md, lg), check value component with label: ${label}`); // eslint-disable-line
  }

  return (
    <div { ...rest } className={ classes }>
      <span className="value__label" id={ id }>{ label }</span>
      <span className="value__value" aria-labelledby={ id } >{ children }</span>
    </div>
  );
}

Value.defaultProps = {
  label: '',
  value: '',
};

Value.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
};
