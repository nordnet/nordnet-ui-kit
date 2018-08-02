import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import InputDefault from './input-default';
import IconChevronUp from '../icon/icons/chevronUp';
import IconChevronDown from '../icon/icons/chevronDown';
import styles from './input-select-styles';
import omit from '../../utilities/omit';

function renderOption(option) {
  const { label, value, key: keyOption, ...rest } = option;
  const key = keyOption || kebabCase(value); // Assumes value is a string

  return (
    <option {...rest} key={key} value={value}>
      {label}
    </option>
  );
}

class InputSelect extends InputDefault.InnerComponent {
  constructor(props) {
    super(props);

    if (props.value && this.showValue(props.value)) {
      this.state.value = props.value;
    }
  }

  renderSelectArrow() {
    const className = 'input__select-arrow';
    const IconUsed = this.state.hasFocus ? IconChevronUp : IconChevronDown;
    return <IconUsed className={className} stroke={this.props.theme.palette.variant.primary} />;
  }

  renderFakePlaceholder() {
    const placeholder = this.props.placeholder || this.props.label;
    return (
      <span className={classNames('input__placeholder', { [this.props.classes.selectable]: this.props.selectablePlaceholder })}>
        {placeholder}
      </span>
    );
  }

  renderValueLabel() {
    const option = this.getSelectedOption();
    if (!option) {
      return null;
    }

    return <span className="input__value-label">{option.label}</span>;
  }

  getSelectedOption() {
    return this.props.options.find(opt => `${opt.value}` === this.state.value);
  }

  getTitle() {
    if (this.state.value) {
      const option = this.getSelectedOption();
      if (option && option.label) {
        return option.label;
      }
    }
    return this.props.placeholder || this.props.label;
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
    const { classes, id, placeholder, options, label, type, selectablePlaceholder, ...rest } = this.props;
    const className = classNames([classes['select-wrapper']], 'input__element-wrapper');
    const title = this.getTitle();

    return (
      <div className={className} title={title}>
        <select
          {...omit(rest, 'hasSuccess', 'hasWarning', 'hasError', 'helpText', 'leftAddon', 'rightAddon', 'theme', 'sheet', 'variant')}
          id={id}
          className="input__element input__element--select"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          placeholder=""
          value={this.state.value}
          label={label}
          type={type}
        >
          {placeholder ? (
            <option value="" disabled={!selectablePlaceholder}>
              {placeholder}
            </option>
          ) : null}
          {options.map(renderOption)}
        </select>
        {this.state.value ? null : this.renderFakePlaceholder()}
        {this.showValue() ? this.renderValueLabel() : null}
        {this.renderSelectArrow()}
      </div>
    );
  }
}

InputSelect.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** @ignore */
  theme: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]).isRequired,
    }),
  ),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  selectablePlaceholder: PropTypes.bool,
};

InputSelect.defaultProps = {
  options: [
    {
      label: '',
      value: '',
    },
  ],
  variant: 'primary',
  type: 'select',
  selectablePlaceholder: false,
};

export { InputSelect as Component, styles };
export default injectSheet(styles)(InputSelect);
