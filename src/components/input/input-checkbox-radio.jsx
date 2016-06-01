import React from 'react';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import Checkbox from './checkbox';
import Radio from './radio';
import HelpText from './help-text.jsx';
import './input-checkbox-radio.scss';

class InputCheckboxRadio extends PureComponent {
  constructor(props) {
    super(props);

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

    return (
      <HelpText { ...props }>{ this.props.helpText }</HelpText>
    );
  }

  renderFakeInput() {
    switch (this.props.type) {
      case 'checkbox':
        return <Checkbox { ...this.state } />;
      case 'radio':
        return <Radio { ...this.state } />;
      default:
        return null;
    }
  }

  renderInput() {
    return (
      <div className="input-checkbox-radio__element">
        <input
          { ...this.props }
          type={ this.props.type }
          checked={ this.state.checked }
          disabled={ this.state.disabled }
          value={ this.props.value }
          onChange={ this.onChange }
          aria-labelledby={ `${kebabCase(this.props.label)}-label` }
        />
      { this.renderFakeInput() }
      </div>
    );
  }

  renderLabel() {
    if (!this.props.label) return null;

    return (
      <span id={ `${kebabCase(this.props.label)}-label` } className="input-checkbox-radio__label">
        { this.props.label }
      </span>
    );
  }

  render() {
    const classes = classNames('input-checkbox-radio', {
      'input-checkbox-radio--has-success': this.state.hasSuccess,
      'input-checkbox-radio--has-error': this.state.hasError,
      'input-checkbox-radio--is-disabled': this.state.disabled,
    }, this.props.className);

    return (
      <span>
        <label className={ classes }>
          { this.renderInput() }
          { this.renderLabel() }
        </label>
        { this.renderHelpText() }
      </span>
    );
  }
}

InputCheckboxRadio.propTypes = {
  className: React.PropTypes.string,
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  value: React.PropTypes.string,
  label: React.PropTypes.string,
};

InputCheckboxRadio.defaultProps = {
  checked: false,
  disabled: false,
};

export default InputCheckboxRadio;
