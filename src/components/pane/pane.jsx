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

    this.classes = this.context.styleManager.render(PaneStyles);
  }

  handleTabClick(index) {
    this.setState({
      activeTab: index,
    });
  }

  renderTabs() {
    return (
      <ul className={this.classes.tabs}>
        { this.props.tabs.map((tab, index) => (
          <li
            key={`${kebabCase(tab.label)}_${index}`}
            className={classNames(
              this.classes.tab,
              this.classes[this.props.size],
              { [this.classes.active]: this.state.activeTab === index },
            )}
            onClick={() => this.handleTabClick(index)}
          >
            { tab.label }
          </li>
        )) }
      </ul>
    );
  }

  renderBody() {
    if (this.props.tabs && this.props.tabs.length > 0) {
      return (
        <div>
          { this.props.tabs.map((tab, index) => (
            <div key={`${kebabCase(tab.label)}_body_${index}`} style={{ display: this.state.activeTab === index ? 'block' : 'none' }}>
              { tab.body }
            </div>
          )) }
        </div>
      );
    }
    return null;
  }

  render() {
    const className = classNames(this.classes.pane, this.props.className);
    if (this.props.tabs && this.props.tabs.length > 0) {
      return (
        <div className={className}>
          { this.renderTabs() }
          { this.renderBody() }
        </div>
      );
    }
    return null;
  }
}

Pane.propTypes = {
  className: PropTypes.string,
  /** The number of the active tab. */
  activeTab: PropTypes.number,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node,
    body: PropTypes.node,
  })),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

Pane.defaultProps = {
  size: 'md',
};

Pane.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Pane;
