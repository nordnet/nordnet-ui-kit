import React, { PropTypes } from 'react';
import cn from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';

export const styleSheet = createStyleSheet('Avatar', (theme) => {
  const { palette, typography, mixins } = theme;

  const styles = {
    root: {
      ...mixins.basicBoxSizing,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: typography.secondary.fontFamily,
      color: palette.shades.dark.text.default,
      backgroundColor: palette.color.grayDarkest,
      overflow: 'hidden',
      borderRadius: '50%',
      textTransform: 'capitalize',
      height: '2.4em',
      width: '2.4em',
    },
    xs: {
      fontSize: 9,
      height: 24,
      width: 24,
    },
    sm: {
      fontSize: 14,
      height: 32,
      width: 32,
    },
    md: {
      fontSize: 16,
      height: 48,
      width: 48,
    },
    lg: {
      fontSize: 20,
      height: 56,
      width: 56,
    },
  };

  return styles;
});

function Avatar({
  children,
  className: classNameProp,
  style: styleProp,
  size,
  color,
  ...rest
}, { styleManager }) {
  const classes = styleManager.render(styleSheet);
  const style = Object.assign({}, {
    backgroundColor: color,
  }, styleProp);

  const className = cn(classes.root, [classes[`${size}`]], classNameProp);

  return (
    <div className={className} style={style} {...rest}>
      { children }
    </div>
  );
}

Avatar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  color: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'sm',
};

Avatar.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Avatar;
