import React, { PropTypes } from 'react';
import InputDefault from './input-default';
import kebabCase from 'lodash.kebabcase';
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

  renderFakePlaceholder() {
    return (
      <span className="input__placeholder">
        { this.props.placeholder || this.props.label }
      </span>
    );
  }

  renderOption(option) {
    const { label, value, key: keyOption, ...rest } = option;
    const key = keyOption || kebabCase(value); // Assumes value is a string

    return (
      <option { ...rest } key={ key } value={ value }>
        { label }
      </option>
    );
  }

  showValue() {
    const { value, hasFocus } = this.state;
    const hasStringValue = typeof value === 'string' && value.length;
    const isObject = typeof value === 'object';

    if (hasFocus || hasStringValue || isObject) {
      return true;
    }

    return false;
  }

  renderInput() {
    const { id, placeholder, options, ...rest } = this.props;

    return (
      <div className="input__element-wrapper">
        <select
          { ...rest }
          id={ id }
          className="input__element input__element--select"
          onFocus={ this.onFocus }
          onBlur={ this.onBlur }
          onChange={ this.onChange }
          placeholder=""
          value={ this.state.value }
          style={ this.showValue() ? { } : { color: 'transparent' } }
        >
          { placeholder ? <option value="" disabled>{ placeholder }</option> : null }
          { options.map(this.renderOption) }
        </select>
        { this.renderFakePlaceholder() }
        { this.renderSelectArrow() }
      </div>
    );
  }
}

InputSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    key: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]).isRequired,
  })),
};

InputSelect.defaultProps = {
  options: [{
    label: '',
    value: '',
  }],
};

export default InputSelect;
