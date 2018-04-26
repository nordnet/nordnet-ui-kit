import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './popup-menu.styles';

function PopupMenuItem({ node, children, topBorder, linkTo, onClick, disabled, classes }) {
  const Element = node || 'button';
  return (
    <li className={classes.item}>
      {topBorder && <hr className={classes.hr} />}
      <Element to={linkTo} onClick={onClick} className={classes.link} disabled={disabled}>
        {children}
      </Element>
    </li>
  );
}

PopupMenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
  node: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onClick: PropTypes.func,
  linkTo: PropTypes.string,
  topBorder: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
};

PopupMenuItem.defaultProps = {
  onClick: () => {},
  children: '',
  linkTo: '#',
  topBorder: false,
  disabled: false,
};

export default injectSheet(styles)(PopupMenuItem);
