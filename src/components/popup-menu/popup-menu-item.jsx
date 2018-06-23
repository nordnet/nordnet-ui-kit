import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './popup-menu.styles';

const PopupMenuItem = ({ node, children, topBorder, linkTo, onClick, onKeyDown, listItemRef, disabled, classes, onFocus }) => {
  const Element = node || 'button';
  return (
    <li className={classes.item}>
      {topBorder && <hr className={classes.hr} />}
      <Element
        to={linkTo}
        onClick={onClick}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        className={classes.link}
        disabled={disabled}
        ref={listItemRef}
      >
        {children}
      </Element>
    </li>
  );
};

PopupMenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
  node: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onClick: PropTypes.func,
  linkTo: PropTypes.string,
  topBorder: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  /** These 3 are set by PopupMenuList and should not be provided by the end user. */
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  listItemRef: PropTypes.func,
};

PopupMenuItem.defaultProps = {
  onClick: () => {},
  children: '',
  linkTo: '#',
  topBorder: false,
  disabled: false,
  onFocus: () => {},
  onKeyDown: () => {},
  listItemRef: () => {},
};

export { PopupMenuItem as Component, styles };
export default injectSheet(styles)(PopupMenuItem);
