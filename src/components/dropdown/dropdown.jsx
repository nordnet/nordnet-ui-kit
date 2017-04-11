/* eslint jsx-a11y/no-static-element-interactions: 0, react/no-array-index-key: 0 */
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import IconChevronUp from '../icon/icons/chevronUp';
import IconChevronDown from '../icon/icons/chevronDown';
import styleSheet from './dropdown-styles';

class Dropdown extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      actionsOpen: props.actionsOpen,
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
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

    return (
      <ul className="dropdown__actions" style={style}>
        { this.props.actions.map((action, index) => (
          <li className="dropdown__action" key={`${index}-${kebabCase(action.label)}`} onClick={action.action}>
            { action.label }
          </li>
        )) }
      </ul>
    );
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);
    const className = classNames(classes.dropdown, this.props.className);
    const IconUsed = this.state.actionsOpen ? IconChevronUp : IconChevronDown;

    return (
      <div className={className}>
        <button className="dropdown__toggle" onClick={this.handleToggleClick}>
          { this.props.toggle }
          <IconUsed
            className="dropdown__toggle-icon"
            stroke={this.context.styleManager.theme.palette.variant.primary}
            width={8}
            height={8}
          />
        </button>
        { this.renderActions() }
      </div>
    );
  }
}

Dropdown.propTypes = {
  className: PropTypes.string,
  toggle: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node,
    action: PropTypes.func,
  })),
  actionsOpen: PropTypes.bool,
};

Dropdown.defaultProps = {
  actionsOpen: false,
};

Dropdown.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Dropdown;
