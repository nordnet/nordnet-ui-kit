import React from 'react';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';
import { Motion, spring, presets } from 'react-motion';
import './collapsible.scss';

class Collapsible extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: props.collapsed,
      hasContent: !props.collapsed,
      height: 0,
    };

    this.setContentHeight = this.setContentHeight.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    this.setContentHeight(this.content);
  }

  componentDidUpdate() {
    this.setContentHeight(this.content);
    if (!this.state.hasContent) this.setHasContent();
  }

  setContentHeight(content) {
    this.setState({
      height: content.offsetHeight,
    });
  }

  setHasContent() {
    this.setState({
      hasContent: true,
    });
  }

  handleToggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  renderToggle() {
    return (
      <div className="collapsible__toggle" onClick={ this.handleToggle }>
        { this.props.toggle }
      </div>
    );
  }

  renderBody() {
    const springConfig = presets.noWobble;
    const defaultStyle = {
      height: this.state.hasContent ? 100 : 0,
    };
    const style = {
      height: this.state.collapsed ? spring(0, springConfig) : spring(this.state.height, springConfig),
    };

    return (
      <Motion defaultStyle={ defaultStyle } style={ style }>
        {({ height }) =>
          <div className="collapsible__body" style={{ height: `${height / 10}rem` }}>
            { this.renderContent() }
          </div>
        }
      </Motion>
    );
  }

  renderContent() {
    return (
      <div ref={ content => this.content = content }>
        { this.state.collapsed && !this.state.hasContent ? null : this.props.children }
      </div>
    );
  }

  render() {
    const classes = classNames('collapsible', {
      'collapsible--collapsed': this.state.collapsed,
      'collapsible--expanded': !this.state.collapsed,
    }, this.props.className);

    return (
      <div className={ classes }>
        { this.renderToggle() }
        { this.renderBody() }
      </div>
    );
  }
}

Collapsible.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  toggle: React.PropTypes.node,
  collapsed: React.PropTypes.bool,
};

Collapsible.defaultProps = {
  toggle: <h3>Toggle</h3>,
  collapsed: true,
};

export default Collapsible;
