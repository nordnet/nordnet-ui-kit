import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { camelCase } from 'lodash';
import cn from 'classnames';
import styles from './popup-menu.styles';
import { Icon } from '../..';
import keyCodes from './keyCodes';
import PopupMenuList from './popup-menu-list';

class PopupMenu extends Component {
  state = {
    isOpen: false,
    hasFocus: false,
  };

  componentWillUnmount() {
    document.removeEventListener('click', this.documentClickOutsideListener);
  }

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
    const {
      width,
      toggleButton,
      classes,
      className,
      children,
      enter,
      exit,
      maxHeight,
      buttonLabel,
      buttonID,
      disabled,
      theme,
      popupMenuDropdownZIndex,
    } = this.props;
    const { isOpen } = this.state;
    const open = !disabled && isOpen;
    let label = null;
    if (typeof buttonLabel === 'string') label = buttonLabel;
    else if (typeof buttonLabel === 'object' && buttonLabel !== null) {
      // typeof null === 'object', see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
      // the label describes what toggling the button does, so it's the opposite of isOpen.
      label = open ? buttonLabel.close : buttonLabel.open;
    }
    // If an ID, against all odds, is not supplied, default to the camel case-ified label (we do not want whitespace in the id).
    const id = buttonID || camelCase(label);
    return (
      <span className={cn(classes.menuContainer, className)} ref={this.setContainerRef}>
        <button
          type="button"
          aria-expanded={open}
          aria-label={label}
          id={id}
          className={classes.menuButton}
          onClick={() => {
            if (this.buttonElement) this.buttonElement.focus();
            this.onToggle();
          }}
          disabled={disabled}
          ref={this.setButtonRef}
          onKeyDown={this.onKeyDown}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        >
          {toggleButton || (
            <Icon.VerticalEllipsis
              height={28}
              width={28}
              stroke={disabled ? theme.palette.gray4 : 'currentColor'}
              fill={disabled ? theme.palette.gray4 : 'currentColor'}
            />
          )}
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
          popupMenuDropdownZIndex={popupMenuDropdownZIndex}
        >
          {children}
        </PopupMenuList>
      </span>
    );
  }
}

PopupMenu.propTypes = {
  /** @ignore */
  theme: PropTypes.object.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  onToggle: PropTypes.func,
  /**
   * The aria-label for the toggle button. Either a plain string or an object with different labels
   * for when the menu is opened and closed, e.g. `{ open: 'Open menu', close: 'Close menu' }`.
   * The label describes what toggling the button will do, so `open` will used when the menu is closed, and vice versa.
   *
   * If this is used then a complementing `buttonID` must be provided as a prop as well.
   * */
  buttonLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      open: PropTypes.string,
      close: PropTypes.string,
    }),
  ]),
  /** An ID string. Must be supplied if `buttonLabel` is used, for the aria tags. */
  // Do a custom PropType check, as buttonID must be supplied if buttonLabel is used.
  // eslint-disable-next-line consistent-return
  buttonID: (props, propName, componentName) => {
    // First do a "normal" type check
    if (props[propName] && typeof props[propName] !== 'string') {
      return new Error(
        `Invalid prop \`${propName}\` of type \`${typeof props[
          propName
        ]}\` supplied to \`${componentName}\`, expected \`string\`.`,
      );
    }
    if (props.buttonLabel && !props[propName]) {
      return new Error(
        'If `buttonLabel` prop is used, a `buttonID` prop must be provided as well.',
      );
    }
  },
  children: PropTypes.node.isRequired,
  /** The duration of the enter transition, in milliseconds. */
  enter: PropTypes.number,
  /** The duration of the exit transition, in milliseconds. */
  exit: PropTypes.number,
  /** The content of the toggle button, defaults to `VerticalEllipsis` from the Icon set. */
  toggleButton: PropTypes.node,
  /** Disables the popup menu */
  disabled: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Allows setting specific z-index on the dropdown menu */
  popupMenuDropdownZIndex: PropTypes.number,
};

PopupMenu.defaultProps = {
  width: 200,
  onToggle: () => {},
  buttonLabel: null,
  enter: 100,
  exit: 100,
  toggleButton: null,
  maxHeight: 'none',
  disabled: false,
  popupMenuDropdownZIndex: 1,
};

export { PopupMenu as Component, styles };
export default injectSheet(styles)(PopupMenu);
