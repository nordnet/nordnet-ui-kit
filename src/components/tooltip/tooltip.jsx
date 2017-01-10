import React from 'react';
import Icon from '../icon/icon';
import './tooltip.scss';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ show: !this.state.show });
  }

  renderPopup(text) {
    if (this.state.show) {
      return (
        <div className="tooltip-popup" >
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

  renderCloser() {
    if (this.state.show) {
      return (
        <div className="tooltip-popup__closer" onClick={ this.toggleShow }></div>
      );
    }
    return null;
  }

  renderTooltip(text) {
    return (
      <div className="tooltip">
        <div className="tooltip-questionmark" tabIndex="-1" onClick={ this.toggleShow }>
          { this.props.container }
        </div>
        { this.renderPopup(text) }
        { this.renderCloser() }
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