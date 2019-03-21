import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import IconClose from '../icon/icons/close';
import styles from './alert-styles';

class Alert extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      dismissed: props.dismissed,
    };

    this.classes = this.props.classes;
    this.theme = this.props.theme;
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleCloseClick() {
    this.setState({
      dismissed: true,
    });
    this.props.dismissedCallback();
  }

  renderClose() {
    if (!this.props.dismissable) {
      return null;
    }

    return (
      <button className={this.classes.close} onClick={this.handleCloseClick} type="button">
        <IconClose stroke="#282823" width={10} height={10} style={{ display: 'block' }} />
      </button>
    );
  }

  render() {
    if (this.state.dismissed) {
      return null;
    }

    const usedClassName = classNames(
      this.classes.alert,
      {
        [`${this.classes[this.props.modifier]}`]: this.props.modifier,
      },
      this.props.className,
    );
    const headerClassName = classNames(this.classes.header, {
      [this.classes.vertical]: this.props.vertical,
    });

    return (
      <div className={usedClassName} style={this.props.style}>
        {this.props.header ? <div className={headerClassName}>{this.props.header}</div> : null}
        <div className={this.classes.body}>{this.props.children}</div>
        {this.renderClose()}
      </div>
    );
  }
}

Alert.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** @ignore */
  theme: PropTypes.object.isRequired,
  className: PropTypes.string,
  modifier: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
  style: PropTypes.object,
  header: PropTypes.node,
  children: PropTypes.node,
  vertical: PropTypes.bool,
  dismissable: PropTypes.bool,
  dismissed: PropTypes.bool,
  dismissedCallback: PropTypes.func,
};

Alert.defaultProps = {
  style: {},
  vertical: false,
  dismissable: true,
  dismissed: false,
  dismissedCallback: () => {},
};

export { Alert as Component, styles };
export default injectSheet(styles)(Alert);
