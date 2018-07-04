import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './popup-menu.styles';
import { Icon } from '../../';
import keyCodes from './keyCodes';
import PopupMenuList from './popup-menu-list';

let idIncrement = 0;
class PopupMenu extends Component {
  state = {
    isOpen: false,
    hasFocus: false,
    // eslint-disable-next-line no-plusplus
    id: `PopUpMenu${idIncrement++}${(+new Date()).toString(36)}`, // generate a sufficiently unique id
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

  onBlur = () => this.setState({ hasFocus: false });

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
    const { width, toggleButton, classes, children, enter, exit, maxHeight, buttonLabel, isOpen: isOpenFromProps } = this.props;
    const { isOpen, id } = this.state;
    const open = isOpenFromProps !== null ? isOpenFromProps : isOpen;
    let label = null;
    if (typeof buttonLabel === 'string') label = buttonLabel;
    else if (typeof buttonLabel === 'object' && buttonLabel !== null) {
      // typeof null === 'object', see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
      // the label describes what toggling the button does, so it's the opposite of isOpen.
      label = open ? buttonLabel.close : buttonLabel.open;
    }
    return (
      <span className={classes.menuContainer} ref={this.setContainerRef}>
        <button
          aria-expanded={open}
          aria-label={label}
          id={id}
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
          aria-labelledby={id}
          classes={classes}
          isOpen={open}
          onBlur={this.onBlurList}
          onKeyDown={this.onKeyDown}
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
  /** The aria-label for the toggle button. Either a plain string or an object with different labels
   * for when the menu is opened and closed, e.g. `{ open: 'Open menu', close: 'Close menu' }`.
   * The label describes what toggling the button will do, so `open` will used when the menu is closed, and vice versa. */
  buttonLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      open: PropTypes.string,
      close: PropTypes.string,
    }),
  ]),
  children: PropTypes.node.isRequired,
  enter: PropTypes.number,
  exit: PropTypes.number,
  toggleButton: PropTypes.node,
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PopupMenu.defaultProps = {
  width: 200,
  onToggle: () => {},
  buttonLabel: null,
  isOpen: null,
  enter: 100,
  exit: 100,
  toggleButton: null,
  maxHeight: 'none',
};

export { PopupMenu as Component, styles };
export default injectSheet(styles)(PopupMenu);
