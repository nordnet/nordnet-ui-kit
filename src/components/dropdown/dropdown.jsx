/* eslint jsx-a11y/no-static-element-interactions: 0, react/no-array-index-key: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import IconChevronUp from '../icon/icons/chevronUp';
import IconChevronDown from '../icon/icons/chevronDown';
import styles from './dropdown-styles';

class Dropdown extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      actionsOpen: props.actionsOpen,
    };

    this.handleClick = this.handleClick.bind(this);
    this.close = this.close.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.classes = this.props.classes;
    this.theme = this.props.theme;
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick({ target } = {}) {
    if (target && this.onOutsideElement && !this.onOutsideElement.contains(target)) {
      this.close();
    }
  }

  close() {
    if (this.state.actionsOpen) {
      this.setState({
        actionsOpen: false,
      });
    }
  }

  handleToggleClick() {
    this.setState({
      actionsOpen: !this.state.actionsOpen,
    });
  }

  renderActions() {
    const style = {
      display: this.state.actionsOpen ? 'block' : 'none',
    };

    const { actions, closeOnAction } = this.props;

    return (
      <ul className={this.classes.actions} style={style}>
        {actions.map((action, index) => (
          <li
            className={this.classes.action}
            key={`${index}-${kebabCase(action.label)}`}
            onClick={() => {
              action.action();
              if (closeOnAction) {
                this.close();
              }
            }}
          >
            {action.label}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const className = classNames(this.classes.dropdown, this.props.className);
    const IconUsed = this.state.actionsOpen ? IconChevronUp : IconChevronDown;

    return (
      <div
        className={className}
        ref={element => {
          this.onOutsideElement = element;
        }}
      >
        <button className={this.classes.toggle} onClick={this.handleToggleClick}>
          {this.props.toggle}
          <IconUsed
            className={this.classes.toggleIcon}
            stroke={this.theme.palette.text.secondary}
            width={8}
            height={8}
            style={{ position: 'absolute', right: '8px', top: '12px' }}
          />
        </button>
        {this.renderActions()}
      </div>
    );
  }
}

Dropdown.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** @ignore */
  theme: PropTypes.object.isRequired,
  className: PropTypes.string,
  toggle: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      action: PropTypes.func,
    }),
  ),
  actionsOpen: PropTypes.bool,
  closeOnAction: PropTypes.bool,
};

Dropdown.defaultProps = {
  actionsOpen: false,
  closeOnAction: false,
};

export { Dropdown as Component, styles };
export default injectSheet(styles)(Dropdown);
