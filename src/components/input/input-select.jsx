import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import InputDefault from './input-default';
import { Icon } from '../../';
import styleSheet from './input-select-styles';
import color from '../../styles/color';

function renderOption(option) {
  const { label, value, key: keyOption, ...rest } = option;
  const key = keyOption || kebabCase(value); // Assumes value is a string

  return (
    <option {...rest} key={key} value={value}>
      { label }
    </option>
  );
}

class InputSelect extends InputDefault {
  renderSelectArrow() {
    const className = 'input__select-arrow';
    const IconUsed = this.state.hasFocus ? Icon.ChevronUp : Icon.ChevronDown;
    return (
      <IconUsed className={className} stroke={color.blue} />
    );
  }

  renderFakePlaceholder() {
    return (
      <span className="input__placeholder">
        { this.props.placeholder || this.props.label }
      </span>
    );
  }

  renderValueLabel() {
    const option = this.props.options.find(opt => `${opt.value}` === this.state.value);
    if (!option) {
      return null;
    }

    return (
      <span className="input__value-label">
        { option.label }
      </span>
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
    const classes = this.context.styleManager.render(styleSheet);
    const className = classNames([classes['select-wrapper']], 'input__element-wrapper');

    return (
      <div className={className}>
        <select
          {...rest}
          id={id}
          className="input__element input__element--select"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          placeholder=""
          value={this.state.value}
        >
          { placeholder ? <option value="" disabled>{ placeholder }</option> : null }
          { options.map(renderOption) }
        </select>
        { this.renderFakePlaceholder() }
        { this.showValue() ? this.renderValueLabel() : null }
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
