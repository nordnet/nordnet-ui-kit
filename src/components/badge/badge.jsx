import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import injectSheet from 'react-jss';

export const styles = theme => {
  const { palette, typography, mixins } = theme;

  return {
    root: {
      ...mixins.basicBoxSizing,
      display: 'inline-block',
      padding: '2.5px 10px',
      minWidth: '80px',
      color: palette.gray0,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      backgroundColor: palette.complementaryBlue1,
      borderRadius: '3px',
      ...typography.tertiary(),
    },
    success: {
      backgroundColor: palette.positive,
    },
    warning: {
      backgroundColor: palette.index,
      color: palette.gray0,
    },
    danger: {
      backgroundColor: palette.negative,
    },
  };
};

function Badge({
  classes,
  modifier,
  children,
  className: classNameProp,
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  const className = cn(
    [classes.root],
    {
      [classes.success]: modifier === 'success',
      [classes.warning]: modifier === 'warning',
      [classes.danger]: modifier === 'danger',
    },
    classNameProp,
  );

  return (
    <span {...rest} className={className}>
      {children}
    </span>
  );
}

Badge.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  modifier: PropTypes.oneOf(['success', 'warning', 'danger']),
};

export { Badge as Component };
export default injectSheet(styles)(Badge);
