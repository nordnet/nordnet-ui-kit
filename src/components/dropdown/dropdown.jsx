import React from 'react';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';
import Icon from '../icon/icon';
import './dropdown.scss';

class Dropdown extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      actionsOpen: props.actionsOpen,
    }

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState({
      actionsOpen: !this.state.actionsOpen,
    });
  }

  renderOptions() {
    const style = {
      display: this.state.actionsOpen ? 'block' : 'none',
    }

    return (
      <ul className="dropdown__actions" style={ style }>
        {this.props.actions.map((action, index) => (
          <li className="dropdown__action" key={ index } onClick={ action.action }>
            { action.label }
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const classes = classNames('dropdown', this.props.className);

    return (
      <div className={ classes }>
        <button className="dropdown__toggle" onClick={ this.handleToggleClick }>
          { this.props.toggle }
          <Icon className="dropdown__toggle-icon" type={ this.state.actionsOpen ? 'arrowUp' : 'arrowDown' } />
        </button>
        { this.renderOptions() }
      </div>
    );
  }
}

Dropdown.propTypes = {
  className: React.PropTypes.string,
  toggle: React.PropTypes.string,
  actions: React.PropTypes.array,
  actionsOpen: React.PropTypes.bool,
};

Dropdown.defaultProps = {
  actionsOpen: false,
};

export default Dropdown;
