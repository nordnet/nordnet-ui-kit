import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { kebabCase } from 'lodash';
import { createStyleSheet } from 'jss-theme-reactor';

export const styleSheet = createStyleSheet('LabeledValue', (theme) => {
  const { palette, typography, mixins } = theme;
  const modifiers = {
    xs: '12',
    sm: '14',
    md: '20',
    lg: '32',
  };

  const valueSizes = Object.keys(modifiers).reduce((sizes, size) => {
    const fontSize = modifiers[size];
    const paddingTop = size !== 'lg' ? fontSize - 12 : fontSize - 26;
    const className = `value-${size}`;

    return {
      ...sizes,
      [className]: {
        fontSize: `${fontSize}px`,
        paddingTop: `${paddingTop}px`,
      },
    };
  }, {});

  return {
    root: {
      ...mixins.basicBoxSizing,
      display: 'inline-block',
      color: palette.text.secondary,
      fontFamily: typography.primary.fontFamily,
    },
    label: {
      display: 'block',
      fontSize: '12px',
      lineHeight: 1.2,
    },
    value: {
      display: 'block',
      fontSize: '16px',
      lineHeight: 1.2,
    },
    ...valueSizes,
  };
});

export default function LabeledValue({
  label,
  children,
  id: idProp,
  className,
  labelClassName,
  valueClassName,
  size,
  ...rest
}, { styleManager }) {
  const id = idProp || `${kebabCase(label)}-label`;

  const classes = styleManager.render(styleSheet);

  const rootClasses = cn(classes.root, className);
  const labelClasses = cn(classes.label, labelClassName);
  const valueClasses = cn(classes.value, valueClassName, classes[`value-${size}`]);

  return (
    <div {...rest} className={rootClasses}>
      <span className={labelClasses} id={id}>{ label }</span>
      <span className={valueClasses} aria-labelledby={id} >{ children }</span>
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
  labelClassName: PropTypes.string,
  valueClassName: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

LabeledValue.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
