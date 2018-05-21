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
  hiddenOnMobile,
  sticky,
  stickyBorder,
  stickyOffset,
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  const usedClassName = classNames(
    classes.thead,
    size,
    {
      [classes.hiddenOnMobile]: hiddenOnMobile,
      [classes.sticky]: sticky,
      [classes.stickyBorder]: stickyBorder,
    },
    className,
  );

  const style = { top: stickyOffset || 0 };

  return (
    <thead {...rest} className={usedClassName} style={style}>
      {children}
    </thead>
  );
}

Thead.defaultProps = {
  hiddenOnMobile: false,
  sticky: false,
  stickyBorder: false,
  stickyOffset: 0,
};

Thead.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  hiddenOnMobile: PropTypes.bool,
  sticky: PropTypes.bool,
  stickyBorder: PropTypes.bool,
  stickyOffset: PropTypes.number,
};

export default injectSheet(styles)(Thead);
