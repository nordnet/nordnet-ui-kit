import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';

export const styles = theme => {
  const { palette, typography, mixins } = theme;

  return {
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
};

function Avatar({
  classes,
  children,
  className: classNameProp,
  style: styleProp,
  size,
  color,
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  const style = Object.assign(
    {},
    {
      backgroundColor: color,
    },
    styleProp,
  );

  const className = cn(classes.root, [classes[`${size}`]], classNameProp);

  return (
    <div className={className} style={style} {...rest}>
      {children}
    </div>
  );
}

Avatar.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  color: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'sm',
};

export { Avatar as Component };
export default injectSheet(styles)(Avatar);
