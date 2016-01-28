import React from 'react';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';
import Icon from '../icon/icon';
import ValidationIcon from './ValidationIcon';
import Label from './Label';
import HelpText from './HelpText';
import './input.scss';

class Input extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasFocus: false,
      value: props.value ? props.value : '',
      hasSuccess: props.hasSuccess ? props.hasSuccess : false,
      hasWarning: props.hasWarning ? props.hasWarning : false,
      hasError: props.hasError ? props.hasError : false,
      showPassword: false,
      inputTypes: window.Modernizr ? window.Modernizr.inputtypes : {},
      valueDD: '',
      valueMM: '',
      valueYYYY: '',
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePasswordToggle = this.handlePasswordToggle.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
    this.renderHelpText = this.renderHelpText.bind(this);
    this.renderSelectArrow = this.renderSelectArrow.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      hasSuccess: nextProps.hasSuccess ? nextProps.hasSuccess : false,
      hasWarning: nextProps.hasWarning ? nextProps.hasWarning : false,
      hasError: nextProps.hasError ? nextProps.hasError : false,
    });
  }

  handleFocus() {
    this.setState({
      hasFocus: true,
    });

    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  handleBlur() {
    this.setState({
      hasFocus: false,
    });

    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  handleDateChange(event, unit) {
    const state = {};
    const value = parseInt(event.target.value, 10);
    state[`value${unit}`] = value;

    this.setState(state);

    this.setState({
      value: `${unit === 'YYYY' ? value : this.state.valueYYYY}-${unit === 'MM' ? value : this.state.valueMM}-${unit === 'DD' ? value : this.state.valueDD}`,
    });
  }

  handlePasswordToggle() {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  }

  renderLabel(id) {
    const props = {
      label: this.props.label,
      placeholder: this.props.placeholder,
      id,
      hasFocus: this.state.hasFocus,
      hasValue: this.state.value.length > 0,
    };

    return <Label { ...props } />;
  }

  renderSelectArrow() {
    const className = 'input__select-arrow';
    const style = {
      transform: this.state.hasFocus || this.state.value.length > 0 ? '' : 'translateY(-.6rem)',
    };

    if (this.state.hasFocus) return <Icon className={ className } style={ style } type="arrowUp" />;
    return <Icon className={ className } style={ style } type="arrowDown" />;
  }

  renderPasswordToggle() {
    const classes = classNames('input__password-toggle', {
      'input__password-toggle--has-focus': this.state.hasFocus,
    });

    return (
      <div className={ classes } onClick={ this.handlePasswordToggle }>
        <span style={ this.state.hasFocus || this.state.value.length > 0 ? { transform: 'translateY(.5rem)' } : { } }>
          { this.state.showPassword ? 'Hide' : 'Show' }
        </span>
      </div>
    );
  }

  renderSelect(id, classes) {
    return (
      <div className={ classes }>
        <select
          { ...this.props }
          id={ id }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
          onChange={ this.handleChange }
          placeholder=""
          value={ this.state.value }
          style={ this.state.hasFocus || this.state.value.length > 0 ? { } : { color: 'transparent' } }
        >
          <option value="" disabled>{ this.props.placeholder }</option>
          { this.props.options.map(option => <option key={ option.value } value={ option.value }>{ option.label }</option>) }
        </select>
        { this.renderLabel(id) }
        <HelpText>{ this.props.helpText }</HelpText>
        <ValidationIcon hasSuccess={ this.state.hasSuccess } hasWarning={ this.state.hasWarning } hasError={ this.state.hasError } />
        { this.renderSelectArrow() }
      </div>
    );
  }

  renderPassword(id, classes) {
    return (
      <div className={ classes }>
        <div className="input__password">
          <input
            { ...this.props }
            id={ id }
            type={ this.state.showPassword ? 'text' : 'password' }
            onFocus={ this.handleFocus }
            onBlur={ this.handleBlur }
            onChange={ this.handleChange }
            placeholder=""
            value={ this.state.value }
          />
          { this.renderLabel(id) }
          { this.renderPasswordToggle() }
        </div>
        <HelpText>{ this.props.helpText }</HelpText>
        <ValidationIcon hasSuccess={ this.state.hasSuccess } hasWarning={ this.state.hasWarning } hasError={ this.state.hasError } />
      </div>
    );
  }

  renderDate(id, classes) {
    if (this.state.inputTypes.date) {
      return (
        <div className={ classes }>
          <input
            { ...this.props }
            id={ id }
            type="date"
            onFocus={ this.handleFocus }
            onBlur={ this.handleBlur }
            onChange={ this.handleChange }
            placeholder=""
            value={ this.state.value }
            style={ this.state.hasFocus || this.state.value.length > 0 ? { } : { color: 'transparent' } }
          />
          { this.renderLabel(id) }
          <HelpText>{ this.props.helpText }</HelpText>
          <ValidationIcon hasSuccess={ this.state.hasSuccess } hasWarning={ this.state.hasWarning } hasError={ this.state.hasError } />
        </div>
      );
    }

    const units = ['DD', 'MM', 'YYYY'];
    const min = {
      DD: 1,
      MM: 1,
      YYYY: 1000,
    };
    const max = {
      DD: 31,
      MM: 12,
      YYYY: 9999,
    };

    function zeroFill(number, length) {
      const pad = new Array(1 + length).join('0');
      return (pad + number).slice(-pad.length);
    }

    return (
      <div className={ classes }>
        <div className="input__date" onClick={ () => {
          if (!this.state.hasFocus) document.querySelector(`#${id}`).focus();
        }}>
          {units.map((unit, index) =>
            <span style={{
              opacity: this.state.hasFocus || this.state.valueDD > 0 || this.state.valueMM > 0 || this.state.valueYYYY > 0 ? 1 : 0,
            }}>
              <input
                { ...this.props }
                id={ index === 0 ? id : '' }
                key={ unit }
                type="number"
                min={ min[unit] }
                max={ max[unit] }
                onFocus={ this.handleFocus }
                onBlur={ this.handleBlur }
                onChange={ (event) => this.handleDateChange(event, unit) }
                placeholder={ unit.toLowerCase() }
                inputMode="numeric"
                pattern="[0-9]*"
                value={ this.state[`value${unit}`] ? zeroFill(this.state[`value${unit}`], unit.length) : null }
              />
            { index < 2 ? '/' : null }
            </span>
          )}
          { this.renderLabel(id) }
        </div>
        <HelpText>{ this.props.helpText }</HelpText>
        <ValidationIcon hasSuccess={ this.state.hasSuccess } hasWarning={ this.state.hasWarning } hasError={ this.state.hasError } />
      </div>
    );
  }

  renderDefault(id, classes, type) {
    return (
      <div className={ classes }>
        <input
          { ...this.props }
          id={ id }
          type={ type }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
          onChange={ this.handleChange }
          placeholder=""
          value={ this.state.value }
        />
        { this.renderLabel(id) }
        <HelpText>{ this.props.helpText }</HelpText>
        <ValidationIcon hasSuccess={ this.state.hasSuccess } hasWarning={ this.state.hasWarning } hasError={ this.state.hasError } />
      </div>
    );
  }

  render() {
    const { type, label } = this.props;
    const id = this.props.id || label.toLowerCase().replace(/ /g, '-');
    const classes = classNames('input', {
      'input--has-focus': this.state.hasFocus,
      'input--has-success': this.state.hasSuccess,
      'input--has-warning': this.state.hasWarning,
      'input--has-error': this.state.hasError,
    }, this.props.className);

    switch (type) {
      case 'select':
        return this.renderSelect(id, classes);
      case 'password':
        return this.renderPassword(id, classes);
      case 'date':
        return this.renderDate(id, classes);
      default:
        return this.renderDefault(id, classes, type);
    }
  }
}

Input.propTypes = {
  className: React.PropTypes.string,
  type: React.PropTypes.string,
  label: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  id: React.PropTypes.string,
  value: React.PropTypes.string,
  onFocus: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  onChange: React.PropTypes.func,
  hasSuccess: React.PropTypes.bool,
  hasError: React.PropTypes.bool,
  hasWarning: React.PropTypes.bool,
  helpText: React.PropTypes.string,
  options: React.PropTypes.array,
};

Input.defaultProps = {
  type: 'text',
  label: 'Label',
  placeholder: 'Enter value',
};

export default Input;
