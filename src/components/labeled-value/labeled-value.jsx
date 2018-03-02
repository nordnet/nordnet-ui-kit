import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { kebabCase } from 'lodash';

export const styles = theme => {
  const { palette, typography, mixins } = theme;
  const modifiers = {
    xs: '12',
    sm: '14',
    md: '20',
    lg: '32',
    xlg: '48',
  };

  const mobileModifiers = {
    xs: '12',
    sm: '14',
    md: '16',
    lg: '18',
    xlg: '20',
  };

  const valueSizes = Object.keys(modifiers).reduce((sizes, size) => {
    const getTopPadding = fontSize => {
      switch (size) {
        case 'xlg':
          return 2;
        case 'lg':
          return fontSize - 26;
        default:
          return fontSize - 12;
      }
    };
    const fontSize = modifiers[size];
    const mobileFontSize = mobileModifiers[size];
    const paddingTop = getTopPadding(fontSize);
    const mobilePaddingTop = size === 'xs' ? 0 : 2;
    const className = `value-${size}`;

    return {
      ...sizes,
      [className]: {
        fontSize: `${mobileFontSize}px`,
        paddingTop: `${mobilePaddingTop}px`,
        [theme.mixins.media('md')]: {
          fontSize: `${fontSize}px`,
          paddingTop: `${paddingTop}px`,
        },
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
      <span className={labelClasses} id={id}>{label}</span>
      <span className={valueClasses} aria-labelledby={id}>{children}</span>
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
