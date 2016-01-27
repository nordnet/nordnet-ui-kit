import React from 'react';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';
import './pane.scss';

class Pane extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: props.activeTab || 0,
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(index) {
    this.setState({
      activeTab: index,
    });
  }

  renderTabs() {
    return (
      <ul className="pane__tabs">
        {this.props.tabs.map((tab, index) => (
          <li
            key={ index }
            className={ classNames('pane__tab', { 'pane__tab--is-active': this.state.activeTab === index })}
            style={{ width: `${100 / this.props.tabs.length}%` }}
            onClick={ () => this.handleTabClick(index) }
          >
            { tab.label }
          </li>
        ))}
      </ul>
    );
  }

  renderBody() {
    return (
      <div className="pane__body">
        {this.props.tabs.map((tab, index) => (
          <div key={ index } style={{ display: this.state.activeTab === index ? 'block' : 'none' }}>
            { tab.body }
          </div>
        ))}
      </div>
    );
  }

  render() {
    const classes = classNames('pane', this.props.className);

    return (
      <div className={ classes }>
        { this.renderTabs() }
        { this.renderBody() }
      </div>
    );
  }
}

Pane.propTypes = {
  tabs: React.PropTypes.array,
};

Pane.defaultProps = {};

export default Pane;
