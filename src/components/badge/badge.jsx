import React, { PropTypes } from 'react';
import cn from 'classnames';
import { withTheme, injectSheet } from '../../';
import styles from './styles';

function Badge({
  classes,
  modifier,
  children,
  className: classNameProp,
  ...rest
}) {
  return (
    <span
      className={cn({
        [classes.badge]: true,
        [classes.success]: modifier === 'success',
        [classes.warning]: modifier === 'warning',
        [classes.danger]: modifier === 'danger',
      }, classNameProp)}
      {...rest}
    >
      { children }
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modifier: PropTypes.oneOf(['success', 'warning', 'danger']),
  classes: PropTypes.object.isRequired,
};

export default withTheme(injectSheet(styles)(Badge));
