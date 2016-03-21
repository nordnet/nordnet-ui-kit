import React from 'react';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';
import isUndefined from 'lodash.isundefined';
import isNumber from 'lodash.isnumber';
import kebabCase from 'lodash.kebabcase';
import Icon from '../icon/icon';
import ValidationIcon from './ValidationIcon';
import Label from './Label';
import HelpText from './HelpText';
import variables from '../../utilities/variables';
import './input.scss';

class Input extends PureComponent {
  constructor(props) {
    super(props);

    const isBrowser = !(typeof window === 'undefined');

    this.state = {
      hasFocus: false,
      value: isUndefined(props.value) ? '' : props.value,
      hasSuccess: isUndefined(props.hasSuccess) ? false : props.hasSuccess,
      hasWarning: isUndefined(props.hasWarning) ? false : props.hasWarning,
      hasError: isUndefined(props.hasError) ? false : props.hasError,
      showPassword: false,
      inputTypes: isBrowser && window.Modernizr ? window.Modernizr.inputtypes : {},
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePasswordToggle = this.handlePasswordToggle.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
    this.renderSelectArrow = this.renderSelectArrow.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      hasSuccess: nextProps.hasSuccess ? nextProps.hasSuccess : false,
      hasWarning: nextProps.hasWarning ? nextProps.hasWarning : false,
      hasError: nextProps.hasError ? nextProps.hasError : false,
      value: isUndefined(nextProps.value) ? this.state.value : nextProps.value,
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
    // Format of date is 'yyyy-MM-dd'
    const date = this.splitDate(this.state.value);
    const value = isUndefined(event.target.value) ? '' : parseInt(event.target.value, 10);
    date[unit.index] = this.zeroFill(value, unit.label.length);

    this.setState({
      value: date.join('-'),
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
    };

    if (isNumber(this.state.value)) {
      props.hasValue = true;
    } else {
      props.hasValue = this.state.value ? this.state.value.length > 0 : false;
    }

    return <Label { ...props } />;
  }

  renderSelectArrow() {
    const className = 'input__select-arrow';
    const style = {
      transform: this.state.hasFocus || this.state.value.length > 0 ? '' : 'translateY(-.6rem)',
    };

    return (
      <Icon
        className={ className }
        stroke={ variables.colorPrimary }
        style={ style }
        type={ this.state.hasFocus ? 'chevronUp' : 'chevronDown' }
      />
    );
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
        <ValidationIcon
          hasSuccess={ this.state.hasSuccess }
          hasWarning={ this.state.hasWarning }
          hasError={ this.state.hasError }
        />
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

  zeroFill(number, length) {
    const pad = new Array(1 + length).join('0');
    return (pad + number).slice(-pad.length);
  }

  splitDate(date) {
    const dateArray = date.split('-');

    if (dateArray.length < 3) {
      return [0, 0, 0];
    }

    return dateArray;
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

    const units = [{
      label: 'dd',
      index: 2,
      min: 1,
      max: 31,
    }, {
      label: 'MM',
      index: 1,
      min: 1,
      max: 12,
    }, {
      label: 'yyyy',
      index: 0,
      min: 1000,
      max: 9999,
    }];

    const values = this.splitDate(this.state.value);

    return (
      <div className={ classes }>
        <div
          className="input__date"
          onClick={ () => {if (!this.state.hasFocus && !this.props.disabled) document.querySelector(`#${id}`).focus();}}
        >
          {units.map((unit, index) =>
            <span
              style={{
                opacity: this.state.hasFocus || this.state.value.length > 0 ? 1 : 0,
              }}
            >
              <input
                { ...this.props }
                id={ index === 0 ? id : '' }
                key={ unit.label }
                type="number"
                min={ unit.min }
                max={ unit.max }
                onFocus={ this.handleFocus }
                onBlur={ this.handleBlur }
                onChange={ (event) => this.handleDateChange(event, unit) }
                placeholder={ unit.label.toLowerCase() }
                inputMode="numeric"
                pattern="[0-9]*"
                style= {{
                  width: unit.index === 1 && !values[unit.index] ? '4ch' : `calc(${ unit.label.length }ch + .4rem)`,
                }}
                value={ parseInt(values[unit.index], 10) > 0 ? this.zeroFill(values[unit.index], unit.label.length) : null }
              />
            { index < 2 ? <span className="input__date-divider">/</span> : null }
            </span>
          )}
          { this.renderLabel(id) }
        </div>
        <HelpText>{ this.props.helpText }</HelpText>
        <ValidationIcon hasSuccess={ this.state.hasSuccess } hasWarning={ this.state.hasWarning } hasError={ this.state.hasError } />
      </div>
    );
  }

  renderNumber(id, classes) {
    return (
      <div className={ classes }>
        <div className="input__number">
          <input
            { ...this.props }
            id={ id }
            type="number"
            onFocus={ this.handleFocus }
            onBlur={ this.handleBlur }
            onChange={ this.handleChange }
            placeholder=""
            value={ this.state.value }
          />
          <ValidationIcon hasSuccess={ this.state.hasSuccess } hasWarning={ this.state.hasWarning } hasError={ this.state.hasError } />
        </div>
        { this.renderLabel(id) }
        <HelpText>{ this.props.helpText }</HelpText>
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
    const { type, label, disabled } = this.props;
    const id = this.props.id || kebabCase(label);
    const classes = classNames('input', {
      'input--has-focus': this.state.hasFocus,
      'input--has-success': this.state.hasSuccess,
      'input--has-warning': this.state.hasWarning,
      'input--has-error': this.state.hasError,
      'input--is-disabled': disabled,
    }, `input--${ kebabCase(type) }`, this.props.className);

    switch (type) {
      case 'select':
        return this.renderSelect(id, classes);
      case 'password':
        return this.renderPassword(id, classes);
      case 'date':
        return this.renderDate(id, classes);
      case 'number':
        return this.renderNumber(id, classes);
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
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.bool,
  ]),
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
};

export default Input;
