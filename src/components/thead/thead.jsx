import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import styles from './thead-styles';

function Thead({
  classes,
  className,
  children,
  size,
  variant,
  hiddenOnMobile,
  borderBottom,
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  const usedClassName = classNames(
    classes.thead,
    size,
    variant ? [variant] : [],
    {
      [classes.hiddenOnMobile]: hiddenOnMobile,
      [classes.borderBottom]: borderBottom,
    },
    className,
  );

  return (
    <thead {...rest} className={usedClassName}>
      {children}
    </thead>
  );
}

Thead.defaultProps = {
  hiddenOnMobile: false,
  borderBottom: false,
};

Thead.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  hiddenOnMobile: PropTypes.bool,
  borderBottom: PropTypes.bool,
};

export default injectSheet(styles)(Thead);
