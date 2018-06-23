import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './popup-menu.styles';
import { Icon } from '../../';
import keyCodes from './keyCodes';
import PopupMenuList from './popup-menu-list';

class PopupMenu extends Component {
  state = {
    isOpen: false,
    hasFocus: false,
  };

  onKeyDown = e => {
    if (e.keyCode === keyCodes.ARROW_DOWN && this.state.hasFocus && this.firstListElement) {
      e.preventDefault();
      this.firstListElement.focus();
      this.setState({ hasFocus: false });
    }
    if (e.keyCode === keyCodes.ESC && this.state.isOpen) {
      this.onToggle();
    }
  };

  onFocus = () => this.setState({ hasFocus: true });

  // use setTimeout to put it after the onFocus event (on potentially the list) on the call stack.
  onBlur = () =>
    setTimeout(() => {
      this.setState({ hasFocus: false });
    }, 0);

  onToggle = () => {
    const { isOpen } = this.state;
    if (!isOpen) {
      document.addEventListener('click', this.documentClickOutsideListener);
    } else {
      document.removeEventListener('click', this.documentClickOutsideListener);
    }

    this.props.onToggle(!isOpen);

    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  onBlurList = () => {
    if (this.state.isOpen && !this.state.hasFocus) {
      this.onToggle();
    }
  };

  setFirstListItemRef = listItem => {
    this.firstListElement = listItem;
  };

  setButtonRef = buttonElement => {
    this.buttonElement = buttonElement;
  };

  setContainerRef = containerElement => {
    this.containerElement = containerElement;
  };

  documentClickOutsideListener = e => {
    if (e.target && this.containerElement && !this.containerElement.contains(e.target)) {
      this.onToggle();
    }
  };

  takeFocus = () => {
    if (this.buttonElement) {
      this.buttonElement.focus();
      this.onFocus();
    }
  };

  render() {
    const { width, toggleButton, classes, children, enter, exit, maxHeight, isOpen: isOpenFromProps } = this.props;
    const { isOpen, hasFocus } = this.state;
    return (
      <span className={classes.menuContainer} ref={this.setContainerRef}>
        <button
          className={classes.menuButton}
          onClick={this.onToggle}
          ref={this.setButtonRef}
          onKeyDown={this.onKeyDown}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        >
          {toggleButton || <Icon.VerticalEllipsis height={28} width={28} stroke="currentColor" fill="currentColor" />}
        </button>
        <PopupMenuList
          isOpen={isOpenFromProps !== null ? isOpenFromProps : isOpen}
          onBlur={this.onBlurList}
          onKeyDown={this.onKeyDown}
          buttonHasFocus={hasFocus}
          firstListItemRef={this.setFirstListItemRef}
          yieldFocus={this.takeFocus}
          enter={enter}
          exit={exit}
          width={width}
          maxHeight={maxHeight}
        >
          {children}
        </PopupMenuList>
      </span>
    );
  }
}

PopupMenu.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Will be deprecated. Overrides, but does not change the internal state. */
  isOpen: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  onToggle: PropTypes.func,
  children: PropTypes.node.isRequired,
  enter: PropTypes.number,
  exit: PropTypes.number,
  toggleButton: PropTypes.node,
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PopupMenu.defaultProps = {
  width: 200,
  onToggle: () => {},
  isOpen: null,
  enter: 100,
  exit: 100,
  toggleButton: null,
  maxHeight: 'none',
};

export { PopupMenu as Component, styles };
export default injectSheet(styles)(PopupMenu);
