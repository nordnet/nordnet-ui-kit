import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './popup-menu.styles';
import { Icon } from '../../';

class PopupMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      this.setState({
        isOpen: nextProps.isOpen,
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick = ({ target } = {}) => {
    if (target && this.onOutsideElement && !this.onOutsideElement.contains(target)) {
      this.handleClickOutside();
    }
  };

  handleClickOutside = () => {
    if (this.state.isOpen) {
      this.toggleMenu(false);
    }
  };

  toggleMenu = (forceOpenToggle = null) => {
    const isOpen = forceOpenToggle !== null ? forceOpenToggle : !this.state.isOpen;
    this.setState({
      isOpen,
    });
    this.props.onToggle(isOpen);
  };

  toggleMenuClick = () => {
    this.toggleMenu();
  };

  render() {
    const { width, toggleButton, classes, children, enter, exit } = this.props;
    const { isOpen } = this.state;
    return (
      <span
        className={classes.menuContainer}
        ref={element => {
          this.onOutsideElement = element;
        }}
      >
        <button className={classes.menuButton} onClick={this.toggleMenuClick}>
          {toggleButton || <Icon.VerticalEllipsis height={28} width={28} stroke="currentColor" fill="currentColor" />}
        </button>
        <TransitionGroup>
          {isOpen && (
            <CSSTransition classNames={classes.menuSlideDown} timeout={{ exit, enter }}>
              <div className={classes.menuPopup} style={{ width }}>
                <div className={classes.menuItemContainer}>
                  <ul className={classes.menuItems}>{children}</ul>
                </div>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </span>
    );
  }
}

PopupMenu.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isOpen: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  onToggle: PropTypes.func,
  children: PropTypes.node.isRequired,
  enter: PropTypes.number,
  exit: PropTypes.number,
  toggleButton: PropTypes.node,
};

PopupMenu.defaultProps = {
  width: 200,
  onToggle: () => {},
  isOpen: false,
  enter: 100,
  exit: 100,
  toggleButton: null,
};

export default injectSheet(styles)(PopupMenu);
