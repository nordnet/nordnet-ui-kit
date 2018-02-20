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
  variant,
  hiddenOnMobile,
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  const usedClassName = classNames(classes.tfoot, size, variant ? [variant] : [], { [classes.hiddenOnMobile]: hiddenOnMobile }, className);

  return (
    <tfoot {...rest} className={usedClassName}>
      {children}
    </tfoot>
  );
}

Tfoot.defaultProps = {
  hiddenOnMobile: false,
};

Tfoot.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  hiddenOnMobile: PropTypes.bool,
};

export default injectSheet(styles)(Tfoot);
