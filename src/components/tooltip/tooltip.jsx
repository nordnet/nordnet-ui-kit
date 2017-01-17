import React from 'react';
import classnames from 'classnames';
import Icon from '../icon/icon';
import './tooltip.scss';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      toggled: false,
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  componentDidMount() {
    const rect = this.container.getBoundingClientRect();
    this.contentTop = (rect.height || 0) + 8;
  }

  toggleShow() {
    this.setState({
      toggled: !this.state.toggled,
      hover: false,
    });
  }

  mouseEnter() {
    if (!this.state.toggled) {
      this.setState({
        hover: true,
      });
    }
  }

  mouseLeave() {
    if (!this.state.toggled) {
      this.setState({
        hover: false,
      });
    }
  }

  handleClickOutside() {
    this.setState({
      toggled: false,
    });
  }

  renderPopup(content) {
    const style = {
      top: this.contentTop,
      opacity: this.state.hover || this.state.toggled ? 1 : 0,
    };

    return (
      <div
        style={ style }
        className="tooltip-popup"
        onMouseEnter={ this.mouseEnter }
        onMouseLeave={ this.mouseLeave }
      >
        <div className="tooltip-popup__content">
          { content }
        </div>
      </div>
    );
  }

  render() {
    const { children, content, className } = this.props;

    return (
      <div className={ classnames('tooltip', className) }>
        <div
          ref={ (container) => { this.container = container; } }
          className="tooltip-container"
          onClick={ this.toggleShow }
          onMouseEnter={ this.mouseEnter }
          onMouseLeave={ this.mouseLeave }
        >
          { children }
        </div>
        { this.renderPopup(content) }
      </div>
    );
  }
}

Tooltip.defaultProps = {
  children: <Icon type="questionmark" fill="#00A9EC" stroke="#00A9EC" width={ 16 } height={ 16 } />,
};

Tooltip.propTypes = {
  className: React.PropTypes.string,
  /** The content found in the tooltip */
  content: React.PropTypes.node,
  /** The container that, when clicked, will show the tooltip */
  children: React.PropTypes.node,
};

export default Tooltip;
