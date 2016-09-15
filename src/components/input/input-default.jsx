import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import isNumber from 'lodash.isnumber';
import isEmpty from 'lodash.isempty';
import ValidationIcon from './validation-icon';
import Label from './label';
import HelpText from './help-text';
import './input-default.scss';

const isUndefined = value => value === undefined;

class InputDefault extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: isUndefined(props.value) ? '' : props.value,
      hasFocus: false,
      hasSuccess: !!props.hasSuccess,
      hasWarning: !!props.hasWarning,
      hasError: !!props.hasError,
      hasAddon: !!props.rightAddon || !!props.leftAddon,
    };

    this.state.hasValue = this.hasValue(this.state.value);

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps({ hasSuccess, hasWarning, hasError, value }) {
    this.setState({
      hasSuccess: !!hasSuccess,
      hasWarning: !!hasWarning,
      hasError: !!hasError,
      hasValue: this.hasValue(value),
      value: isUndefined(value) ? this.state.value : value,
    });
  }

  onFocus(event) {
    this.setState({
      hasFocus: true,
    });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  onBlur(event) {
    this.setState({
      hasFocus: false,
    });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  onChange(event) {
    const state = {};

    if (this.props.valueFormatter) {
      const value = this.props.valueFormatter(event.target.value);

      state.value = value;
      state.hasValue = this.hasValue(value);
    } else {
      state.value = event.target.value;
      state.hasValue = this.hasValue(event.target.value);
    }

    this.setState(state);

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  hasValue(value) {
    return isNumber(value) || typeof value === 'boolean' || !!(value && value.length) || !isEmpty(value);
  }

  renderInput(id, type) {
    const classes = `input__element input__element--${this.props.type}`;
    const placeholder = this.props.placeholder || this.props.label;

    return (
      <input
        { ...this.props }
        id={ id }
        className={ classes }
        type={ type || this.props.type }
        onFocus={ this.onFocus }
        onBlur={ this.onBlur }
        onChange={ this.onChange }
        placeholder={ placeholder }
        value={ this.state.value }
      />
    );
  }

  renderLabel(id) {
    const props = {
      id,
      label: this.props.label,
      placeholder: this.props.placeholder,
      hasFocus: this.state.hasFocus,
      hasValue: this.state.hasValue,
    };

    return <Label { ...props } />;
  }

  renderHelpText() {
    const modifiers = {
      hasSuccess: this.state.hasSuccess,
      hasWarning: this.state.hasWarning,
      hasError: this.state.hasError,
    };

    if (!this.props.helpText) {
      return null;
    }

    return (
      <HelpText { ...modifiers }>{ this.props.helpText }</HelpText>
    );
  }

  renderValidationIcon() {
    const { hasSuccess, hasWarning, hasError } = this.state;

    return (
      <ValidationIcon hasSuccess={ hasSuccess } hasWarning={ hasWarning } hasError={ hasError } />
    );
  }

  renderAddon(content, position) {
    if (!content) {
      return null;
    }

    const classes = classNames('input__addon', `input__addon--${position}`);

    return (
      <div className={ classes }>{ typeof content === 'function' ? content() : content }</div>
    );
  }

  renderField(id) {
    return (
      <div className="input__field">
        { this.renderAddon(this.props.leftAddon, 'left') }
        { this.renderInput(id) }
        { this.renderLabel(id) }
        { this.renderAddon(this.props.rightAddon, 'right') }
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
    }, `input--${kebabCase(this.props.type)}`, this.props.className);

    return (
      <div className={ classes } style={ this.props.style }>
        { this.renderField(id) }
        { this.renderHelpText() }
      </div>
    );
  }
}

InputDefault.propTypes = {
  className: PropTypes.string,
  /** Needs to be a valid input type */
  type: PropTypes.string,
  label: PropTypes.node,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
  ]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  /** Manipulates the value of the input, eg. removing unsupported characters from number inputs */
  valueFormatter: PropTypes.func,
  hasSuccess: PropTypes.bool,
  hasError: PropTypes.bool,
  hasWarning: PropTypes.bool,
  helpText: PropTypes.node,
};

InputDefault.defaultProps = {
  type: 'text',
};

export default InputDefault;
