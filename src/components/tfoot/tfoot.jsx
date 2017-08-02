import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import styles from './tfoot-styles';

function Tfoot({
  classes,
  className,
  children,
  size,
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  const usedClassName = classNames(classes.tfoot, size, className);
  return <tfoot {...rest} className={usedClassName}>{children}</tfoot>;
}

Tfoot.defaultProps = {};

Tfoot.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

export default injectSheet(styles)(Tfoot);
