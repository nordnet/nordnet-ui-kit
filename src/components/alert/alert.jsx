import React, { PropTypes } from 'react';
import classNames from 'classnames';
import IconClose from '../icon/icons/close';
import AlertStyles from './alert-styles';

class Alert extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      dismissable: props.dismissable,
      dismissed: props.dismissed,
    };

    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.classes = context.styleManager.render(AlertStyles);
  }

  handleCloseClick() {
    this.setState({
      dismissed: true,
    });
  }

  renderClose() {
    if (!this.props.dismissable) {
      return null;
    }

    return (
      <button className={this.classes.close} onClick={this.handleCloseClick}>
        <IconClose
          stroke={this.context.styleManager.theme.palette.text.default}
          width={10}
          height={10}
          style={{ display: 'block' }}
        />
      </button>
    );
  }

  render() {
    if (this.state.dismissed) {
      return null;
    }

    const usedClassName = classNames(this.classes.alert, {
      [`${this.classes[this.props.modifier]}`]: this.props.modifier,
    }, this.props.className);

    return (
      <div className={usedClassName}>
        <div className="header">{ this.props.header }</div>
        <div className={this.classes.body}>{ this.props.children }</div>
        { this.renderClose() }
      </div>
    );
  }
}

Alert.propTypes = {
  className: PropTypes.string,
  modifier: PropTypes.oneOf(['success', 'warning', 'danger']),
  header: PropTypes.node,
  children: PropTypes.node,
  dismissable: PropTypes.bool,
  dismissed: PropTypes.bool,
};

Alert.defaultProps = {
  dismissable: true,
  dismissed: false,
};

Alert.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Alert;
