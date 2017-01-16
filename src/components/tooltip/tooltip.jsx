import React from 'react';
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

  renderPopup(text) {
    if (this.state.hover || this.state.toggled) {
      return (
        <div className="tooltip-popup" onMouseEnter={ this.mouseEnter } onMouseLeave={ this.mouseLeave }>
          <div className="tooltip-popup__content">
            <div className="tooltip-popup__content-text">
              { text }
            </div>
          </div>
        </div>
      );
    }
    return null;
  }

  renderTooltip(text) {
    return (
      <div className="tooltip">
        <div className="tooltip-container" onClick={ this.toggleShow } onMouseEnter={ this.mouseEnter } onMouseLeave={ this.mouseLeave }>
          { this.props.container }
        </div>
        { this.renderPopup(text) }
      </div>
    );
  }

  render() {
    return (
      this.renderTooltip(this.props.text)
    );
  }
}

Tooltip.defaultProps = {
  container: <Icon type="questionmark" fill="#00A9EC" stroke="#00A9EC" width={ 16 } height={ 16 } />,
};

Tooltip.propTypes = {
  /** The text found in the tooltip */
  text: React.PropTypes.string,
  /** The content that, when clicked, will show the tooltip */
  container: React.PropTypes.string,
};

export default Tooltip;
