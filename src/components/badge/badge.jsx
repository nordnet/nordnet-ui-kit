import React, { PropTypes } from 'react';
import cn from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';

export const styleSheet = createStyleSheet('Badge', (theme) => {
  const { palette, typography } = theme;

  return {
    root: {
      display: 'inline-block',
      fontSize: '14px',
      fontFamily: typography.primary.fontFamily,
      padding: '6px 8px',
      lineHeight: 1,
      color: palette.shades.dark.text.default,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      backgroundColor: palette.shades.dark.background.default,
      borderRadius: '4px',
    },
    success: {
      backgroundColor: palette.variant.success,
    },
    warning: {
      backgroundColor: palette.variant.warning,
      color: palette.text.default,
    },
    danger: {
      backgroundColor: palette.variant.danger,
    },
  };
});

function Badge({
  modifier,
  children,
  className: classNameProp,
  ...rest
}, { styleManager }) {
  const classes = styleManager.render(styleSheet);

  const className = cn([classes.root], {
    [classes.success]: modifier === 'success',
    [classes.warning]: modifier === 'warning',
    [classes.danger]: modifier === 'danger',
  }, classNameProp);

  return (
    <span {...rest} className={className}>{ children }</span>
  );
}

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modifier: PropTypes.oneOf(['success', 'warning', 'danger']),
};

Badge.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Badge;
