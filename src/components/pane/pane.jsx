/** This is deprecated. This component will be removed in next major release */
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
/* eslint jsx-a11y/no-static-element-interactions: 0, react/no-array-index-key: 0 */
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import styles from './pane-styles';
import { deprecatedComponent } from '../deprecate';

class Pane extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTab: props.activeTab,
    };

    this.handleTabClick = this.handleTabClick.bind(this);

    this.classes = this.props.classes;
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.activeTab !== nextProps.activeTab &&
      nextProps.activeTab !== this.state.activeTab
    ) {
      this.setState({
        activeTab: nextProps.activeTab,
      });
    }
  }

  handleTabClick(index) {
    this.setState({
      activeTab: index,
    });
  }

  renderTabs() {
    // This is a deprecated component, the new is much more accessible.
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
    return (
      <ul className={this.classes.tabs}>
        {this.props.tabs.map((tab, index) => (
          <li
            key={`${kebabCase(tab.label)}_${index}`}
            className={classNames(this.classes.tab, this.classes[this.props.size], {
              [this.classes.active]: this.state.activeTab === index,
            })}
            onClick={() => this.handleTabClick(index)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    );
  }

  renderBody() {
    if (this.props.tabs && this.props.tabs.length > 0) {
      return (
        <div>
          {this.props.tabs.map((tab, index) => (
            <div
              key={`${kebabCase(tab.label)}_body_${index}`}
              style={{
                display: this.state.activeTab === index ? 'block' : 'none',
              }}
            >
              {tab.body}
            </div>
          ))}
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
          {this.renderTabs()}
          {this.renderBody()}
        </div>
      );
    }
    return null;
  }
}

Pane.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  /** The number of the active tab. */
  activeTab: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      body: PropTypes.node,
    }),
  ),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

Pane.defaultProps = {
  size: 'md',
  activeTab: 0,
};

export { Pane as Component, styles };
// prettier-ignore
export default 
  injectSheet(styles)(
  deprecatedComponent(
    'Pane',
    'See https://github.com/nordnet/nordnet-ui-kit/blob/v3.0.0/docs/migrations/v3.0.0.md for migration guide.',
  )
  (Pane));
