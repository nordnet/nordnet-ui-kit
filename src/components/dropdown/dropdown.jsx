import React, { PropTypes } from 'react';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import Icon from '../icon/icon';
import variables from '../../utilities/variables';
import './dropdown.scss';

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);

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
      <ul className="dropdown__actions" style={ style }>
        { this.props.actions.map((action, index) => (
          <li className="dropdown__action" key={ `${index}-${kebabCase(action.label)}` } onClick={ action.action }>
            { action.label }
          </li>
        )) }
      </ul>
    );
  }

  render() {
    const classes = classNames('dropdown', this.props.className);

    return (
      <div className={ classes }>
        <button className="dropdown__toggle" onClick={ this.handleToggleClick }>
          { this.props.toggle }
          <Icon
            className="dropdown__toggle-icon"
            stroke={ variables.colorPrimary }
            width={ 8 }
            height={ 8 }
            type={ this.state.actionsOpen ? 'chevronUp' : 'chevronDown' }
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

export default Dropdown;
