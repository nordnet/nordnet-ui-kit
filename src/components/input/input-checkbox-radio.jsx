import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
/* eslint-disable jsx-a11y/label-has-for */
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import Checkbox from './checkbox';
import Radio from './radio';
import styles from './input-checkbox-radio-styles';
import HelpText from './help-text';
import omit from '../../utilities/omit';

class InputCheckboxRadio extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      checked: props.checked,
      disabled: props.disabled,
      hasSuccess: !!props.hasSuccess,
      hasWarning: !!props.hasWarning,
      hasError: !!props.hasError,
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.checked ? nextProps.checked : false,
      disabled: nextProps.disabled ? nextProps.disabled : false,
      hasSuccess: !!nextProps.hasSuccess,
      hasWarning: !!nextProps.hasWarning,
      hasError: !!nextProps.hasError,
    });
  }

  onChange(event) {
    this.setState({
      checked: event.target.checked,
    });

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  renderHelpText() {
    const props = {
      hasSuccess: this.state.hasSuccess,
      hasWarning: this.state.hasWarning,
      hasError: this.state.hasError,
      isCheckbox: this.props.type === 'checkbox',
      isRadio: this.props.type === 'radio',
    };

    if (!this.props.helpText) {
      return null;
    }

    return <HelpText {...props}>{this.props.helpText}</HelpText>;
  }

  renderFakeInput() {
    switch (this.props.type) {
      case 'checkbox':
        return <Checkbox {...this.state} />;
      case 'radio':
        return <Radio {...this.state} />;
      default:
        return null;
    }
  }

  renderInput() {
    return (
      <div className="input-checkbox-radio__element">
        <input
          {...omit(this.props, 'hasSuccess', 'hasError', 'isCheckbox', 'isRadio', 'helpText', 'sheet', 'classes', 'theme', 'variant')}
          type={this.props.type}
          checked={this.state.checked}
          disabled={this.state.disabled}
          value={this.props.value}
          onChange={this.onChange}
          aria-labelledby={`${kebabCase(this.props.label)}-label`}
        />
        {this.renderFakeInput()}
      </div>
    );
  }

  renderLabel() {
    if (!this.props.label) return null;

    return (
      <span id={`${kebabCase(this.props.label)}-label`} className="input-checkbox-radio__label">
        {this.props.label}
      </span>
    );
  }

  render() {
    const { classes } = this.props;
    const className = classNames(
      classes['input-checkbox-radio'],
      {
        'input-checkbox-radio--has-success': this.state.hasSuccess,
        'input-checkbox-radio--has-error': this.state.hasError,
        'input-checkbox-radio--is-disabled': this.state.disabled,
      },
      this.props.className,
    );

    return (
      <span>
        <label className={className}>
          {this.renderInput()}
          {this.renderLabel()}
        </label>
        {this.renderHelpText()}
      </span>
    );
  }
}

InputCheckboxRadio.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  hasSuccess: PropTypes.bool,
  hasError: PropTypes.bool,
  hasWarning: PropTypes.bool,
  helpText: PropTypes.node,
};

InputCheckboxRadio.defaultProps = {
  checked: false,
  disabled: false,
};

export default injectSheet(styles)(InputCheckboxRadio);
