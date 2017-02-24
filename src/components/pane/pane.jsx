import React, { PropTypes } from 'react';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import './pane.scss';

class Pane extends React.PureComponent {
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
    const tabWidth = 100 / this.props.tabs.length;

    return (
      <ul className="pane__tabs">
        { this.props.tabs.map((tab, index) => (
          <li
            key={ `${kebabCase(tab.label)}_${index}` }
            className={ classNames('pane__tab', { 'pane__tab--is-active': this.state.activeTab === index }) }
            style={ { width: `${tabWidth}%` } }
            onClick={ () => this.handleTabClick(index) }
          >
            { tab.label }
          </li>
        )) }
      </ul>
    );
  }

  renderBody() {
    return (
      <div className="pane__body">
        { this.props.tabs.map((tab, index) => (
          <div key={ `${kebabCase(tab.label)}_body_${index}` } style={ { display: this.state.activeTab === index ? 'block' : 'none' } }>
            { tab.body }
          </div>
        )) }
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
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node,
    body: PropTypes.node,
  })),
};

Pane.defaultProps = {};

export default Pane;
