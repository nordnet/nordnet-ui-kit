import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './popup-menu.styles';
import keyCodes from './keyCodes';

/* eslint-disable react/prop-types */

class PopupMenuItem extends Component {
  componentDidUpdate() {
    this.handleRefCallback(this.listItemElement);
  }

  componentWillUnmount() {
    this.handleRefCallback(null);
  }

  handleRefCallback = ref => {
    this.props.listItemRefCallback(ref);
    this.listItemElement = ref;
  };

  handleOnClick = () => {
    this.props.onClick();
    this.listItemElement.blur();
  };

  handleOnKeyDown = e => {
    if (e.keyCode === keyCodes.ENTER) {
      this.handleOnClick();
    }
    this.props.onKeyDownCallback(e);
  };

  render() {
    const { node, children, topBorder, linkTo, onClick, disabled, classes, onFocusCallback } = this.props;
    const Element = node || 'button';
    return (
      <li className={classes.item}>
        {topBorder && <hr className={classes.hr} />}
        <Element
          to={linkTo}
          onClick={onClick}
          onFocus={onFocusCallback}
          onKeyDown={this.handleOnKeyDown}
          className={classes.link}
          disabled={disabled}
          ref={this.handleRefCallback}
        >
          {children}
        </Element>
      </li>
    );
  }
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

export { PopupMenuItem as Component, styles };
export default injectSheet(styles)(PopupMenuItem);
