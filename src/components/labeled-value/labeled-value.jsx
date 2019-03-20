import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { kebabCase } from 'lodash';

const modifiers = {
  xs: 12,
  sm: 14,
  md: 20,
  lg: 32,
  xlg: 48,
};

const mobileModifiers = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xlg: 20,
};

export const styles = theme => {
  const { palette, typography, mixins } = theme;

  const valueSizes = Object.keys(modifiers).reduce((sizes, size) => {
    const fontSize = modifiers[size];
    const mobileFontSize = mobileModifiers[size];
    const paddingTop = size === 'xs' ? 0 : 2;
    const className = `value-${size}`;

    return {
      ...sizes,
      [className]: {
        // FIXME: talk to designers,
        fontSize: mobileFontSize,
        paddingTop,

        [theme.mixins.media('md')]: {
          // FIXME: talk to designers,
          fontSize,
        },
      },
    };
  }, {});

  return {
    root: {
      ...mixins.basicBoxSizing,
      display: 'inline-block',
      color: palette.gray0,
      fontFamily: typography.primary.fontFamily,
    },
    label: {
      display: 'block',
      ...typography.tertiary(),
      color: palette.gray2,
    },
    value: {
      display: 'block',
      ...typography.primary(),
    },
    ...valueSizes,
  };
};

function LabeledValue({
  classes,
  label,
  children,
  id: idProp,
  className,
  size,
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  const id = idProp || `${kebabCase(label)}-label`;

  const rootClasses = cn(classes.root, className);
  const labelClasses = cn(classes.label);
  const valueClasses = cn(classes.value, classes[`value-${size}`]);

  return (
    <div {...rest} className={rootClasses}>
      <span className={labelClasses} id={id}>
        {label}
      </span>
      <span className={valueClasses} aria-labelledby={id}>
        {children}
      </span>
    </div>
  );
}

LabeledValue.defaultProps = {
  label: '',
  children: '',
  size: 'md',
};

LabeledValue.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  label: PropTypes.node,
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xlg']),
};

export { LabeledValue as Component };
export default injectSheet(styles)(LabeledValue);
