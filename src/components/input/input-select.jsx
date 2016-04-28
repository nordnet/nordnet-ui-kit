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

  renderPlaceholder() {
    return (
      <span className="input__placeholder">
        { this.props.placeholder }
      </span>
    );
  }

  renderOption(option) {
    const key = option.key || kebabCase(option.value);

    return (
      <option key={ key } value={ option.value }>
        { option.label }
      </option>
    );
  }

  renderInput() {
    const classes = `input__element input__element--${this.props.type}`;

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
          style={ this.state.hasFocus || this.state.value.length ? { } : { color: 'transparent' } }
        >
          <option value="" disabled>{ this.props.placeholder }</option>
          { this.props.options.map(this.renderOption) }
        </select>
        { this.renderPlaceholder() }
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
