/* eslint jsx-a11y/no-static-element-interactions: 0, react/no-array-index-key: 0 */
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import PaneStyles from './pane-styles';

class Pane extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

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
            key={`${kebabCase(tab.label)}_${index}`}
            className={classNames('pane__tab', { 'pane__tab--is-active': this.state.activeTab === index })}
            style={{ width: `${tabWidth}%` }}
            onClick={() => this.handleTabClick(index)}
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
          <div key={`${kebabCase(tab.label)}_body_${index}`} style={{ display: this.state.activeTab === index ? 'block' : 'none' }}>
            { tab.body }
          </div>
        )) }
      </div>
    );
  }

  render() {
    const classes = this.context.styleManager.render(PaneStyles);
    const className = classNames(classes.pane, this.props.className);

    return (
      <div className={className}>
        { this.renderTabs() }
        { this.renderBody() }
      </div>
    );
  }
}

Pane.propTypes = {
  className: PropTypes.string,
  activeTab: PropTypes.number,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node,
    body: PropTypes.node,
  })),
};

Pane.defaultProps = {};

Pane.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};


export default Pane;
