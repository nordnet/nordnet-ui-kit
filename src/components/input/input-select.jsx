import React, { PropTypes } from 'react';
import InputDefault from './input-default';
import variables from '../../utilities/variables';
import Icon from '../icon/icon';
import './input-select.scss';

class InputSelect extends InputDefault {

  renderSelectArrow() {
    const className = 'input__select-arrow';

    return (
      <Icon
        className={ className }
        stroke={ variables.colorPrimary }
        type={ this.state.hasFocus ? 'chevronUp' : 'chevronDown' }
      />
    );
  }

  renderPlaceholder() {
    return (
      <span className="input__placeholder">
        { this.props.placeholder }
      </span>
    );
  }

  renderInput() {
    const classes = `input__element input__element--${ this.props.type }`;

    return (
      <div className="input__element-wrapper">
        <select
          { ...this.props }
          id={ this.props.id }
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
        { this.renderPlaceholder() }
        { this.renderSelectArrow() }
      </div>
    );
  }
}

InputSelect.propTypes = {
  options: PropTypes.array,
};

export default InputSelect;
