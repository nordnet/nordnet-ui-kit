import React, { PropTypes } from 'react';
import rem from '../../utilities/rem.js';
import InputDefault from './input-default';
import variables from '../../utilities/variables';
import Icon from '../icon/icon';
import './input-select.scss';

class InputSelect extends InputDefault {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = Object.assign({}, this.state, {
  //     showPassword: props.showPassword ? true : false,
  //     hasAddon: true,
  //   });
  //
  //   this.renderPasswordToggle = this.renderPasswordToggle.bind(this);
  //   this.onPasswordToggle = this.onPasswordToggle.bind(this);
  // }

  renderSelectArrow() {
    const className = 'input__select-arrow';
    const style = {
      transform: this.state.hasFocus || this.state.hasValue ? '' : `translateY(${ rem('-6px') })`,
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

  renderInput(id, type) {
    const classes = `input__element input__element--${ type }`;

    return (
      <div className="input__element-wrapper">
        <select
          { ...this.props }
          id={ id }
          className={ classes }
          onFocus={ this.onFocus }
          onBlur={ this.onBlur }
          onChange={ this.onChange }
          placeholder=""
          value={ this.state.value }
          style={ this.state.hasFocus || this.state.value.length > 0 ? { } : { color: 'transparent' } }
        >
          <option value="" disabled>{ this.props.placeholder }</option>
          { this.props.options.map(option => <option key={ option.value } value={ option.value }>{ option.label }</option>) }
        </select>
        { this.renderSelectArrow() }
      </div>
    );
  }
}

InputSelect.propTypes = {
  options: PropTypes.array,
};

export default InputSelect;
