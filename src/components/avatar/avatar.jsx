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
      color: palette.white,
      backgroundColor: palette.gray0,
      overflow: 'hidden',
      borderRadius: '50%',
      textTransform: 'capitalize',
      height: '2.4em',
      width: '2.4em',
    },
    xs: {
      height: 24,
      width: 24,
      ...typography.caption(),
      lineHeight: '24px',
    },
    sm: {
      height: 32,
      width: 32,
      ...typography.secondary(),
      lineHeight: '32px',
    },
    md: {
      height: 48,
      width: 48,
      ...typography.primary(),
      lineHeight: '48px',
    },
    lg: {
      height: 56,
      width: 56,
      ...typography.title3({ weight: 'regular' }),
      lineHeight: '56px',
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
export default injectSheet(styles, { injectTheme: true })(Avatar);
