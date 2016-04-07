import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import isUndefined from 'lodash.isundefined';
import isNumber from 'lodash.isnumber';
import ValidationIcon from './validation-icon';
import Label from './label';
import HelpText from './help-text';
import './input-default.scss';

class InputDefault extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: isUndefined(props.value) ? '' : props.value,
      hasFocus: false,
      hasSuccess: props.hasSuccess ? true : false,
      hasWarning: props.hasWarning ? true : false,
      hasError: props.hasError ? true : false,
      hasAddon: props.rightAddon || props.leftAddon ? true : false,
    };

    this.state.hasValue = this.hasValue(this.state.value);

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      hasSuccess: nextProps.hasSuccess ? true : false,
      hasWarning: nextProps.hasWarning ? true : false,
      hasError: nextProps.hasError ? true : false,
      value: isUndefined(nextProps.value) ? this.state.value : nextProps.value,
    });
  }

  onFocus() {
    this.setState({
      hasFocus: true,
    });

    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  onBlur() {
    this.setState({
      hasFocus: false,
    });

    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
      hasValue: this.hasValue(event.target.value),
    });

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  hasValue(value) {
    let hasValue;

    if (isNumber(value)) {
      hasValue = true;
    } else {
      hasValue = value ? value.length > 0 : false;
    }

    return hasValue;
  }

  renderInput(id, type) {
    const classes = `input__element input__element--${ this.props.type }`;

    return (
      <input
        { ...this.props }
        id={ id }
        className={ classes }
        type={ type || this.props.type }
        onFocus={ this.onFocus }
        onBlur={ this.onBlur }
        onChange={ this.onChange }
        placeholder=""
        value={ this.state.value }
      />
    );
  }

  renderLabel(id) {
    const props = {
      label: this.props.label,
      placeholder: this.props.placeholder,
      id,
      hasFocus: this.state.hasFocus,
      hasValue: this.state.hasValue,
    };

    return <Label { ...props } />;
  }

  renderHelpText() {
    return (
      <HelpText>{ this.props.helpText }</HelpText>
    );
  }

  renderValidationIcon() {
    const { hasSuccess, hasWarning, hasError } = this.state;

    return (
      <ValidationIcon hasSuccess={ hasSuccess } hasWarning={ hasWarning } hasError={ hasError } />
    );
  }

  renderAddon(content, position) {
    const classes = classNames('input__addon', `input__addon--${ position }`);

    return (
      <div className={ classes }>{ content() }</div>
    );
  }

  renderField(id) {
    return (
      <div className="input__field">
        { this.props.leftAddon ? this.renderAddon(this.props.leftAddon, 'left') : null }
        { this.renderInput(id) }
        { this.renderLabel(id) }
        { this.props.rightAddon ? this.renderAddon(this.props.rightAddon, 'right') : null }
        { this.renderValidationIcon() }
      </div>
    );
  }

  render() {
    const id = this.props.id || kebabCase(this.props.label);
    const classes = classNames('input', {
      'input--has-focus': this.state.hasFocus,
      'input--has-value': this.state.hasValue,
      'input--has-addon': this.state.hasAddon,
      'input--has-success': this.state.hasSuccess,
      'input--has-warning': this.state.hasWarning,
      'input--has-error': this.state.hasError,
      'input--is-disabled': this.props.disabled,
    }, `input--${ kebabCase(this.props.type) }`, this.props.className);

    return (
      <div className={ classes }>
        { this.renderField(id) }
        { this.renderHelpText() }
      </div>
    );
  }
}

InputDefault.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  hasSuccess: PropTypes.bool,
  hasError: PropTypes.bool,
  hasWarning: PropTypes.bool,
  helpText: PropTypes.string,
};

InputDefault.defaultProps = {
  type: 'text',
};

export default InputDefault;
