import React from 'react';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';
import Icon from '../icon/icon';
import variables from '../../utilities/variables';
import './alert.scss';

class Alert extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dismissable: props.dismissable,
      dismissed: props.dismissed,
    };

    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleCloseClick() {
    this.setState({
      dismissed: true,
    });
  }

  renderClose() {
    if (!this.props.dismissable) return null;

    return (
      <span className="alert__close" onClick={ this.handleCloseClick }>
        <Icon
          type="close"
          stroke={ variables.colorPrimary }
          width={ 8 }
          height={ 8 }
          style={{ display: 'block' }}
        />
      </span>
    );
  }

  render() {
    if (this.state.dismissed) return null;

    const classes = classNames('alert', {
      'alert--success': this.props.modifier === 'success',
      'alert--warning': this.props.modifier === 'warning',
      'alert--danger': this.props.modifier === 'danger',
    }, this.props.className);

    return (
      <div className={ classes }>
        <div className="alert__header">{ this.props.header }</div>
        <div className="alert__body">{ this.props.children }</div>
        { this.renderClose() }
      </div>
    );
  }
}

Alert.propTypes = {
  className: React.PropTypes.string,
  modifier: React.PropTypes.string,
  header: React.PropTypes.string,
  children: React.PropTypes.node,
  dismissable: React.PropTypes.bool,
  dismissed: React.PropTypes.bool,
};

Alert.defaultProps = {
  dismissable: true,
  dismissed: false,
};

export default Alert;
