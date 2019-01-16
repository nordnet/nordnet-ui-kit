import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import IconChevronUp from '../icon/icons/chevronUp';
import IconChevronDown from '../icon/icons/chevronDown';
import styles from './input-select-styles';
import omit from '../../utilities/omit';
import { hasValue, isUndefined } from './utils';
import InputAddon from './input-addon';
import Label from './label';
import HelpText from './help-text';
import FakePlaceholder from './fake-placeholder';
import SelectOption from './select-option';

class InputSelect extends React.Component {
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

    this.state.hasValue = hasValue(this.state.value);
  }

  componentWillReceiveProps({ hasSuccess, hasWarning, hasError, rightAddon, leftAddon, value }) {
    this.setState({
      hasSuccess: !!hasSuccess,
      hasWarning: !!hasWarning,
      hasError: !!hasError,
      hasAddon: !!rightAddon || !!leftAddon,
      hasValue: hasValue(value),
      value: isUndefined(value) ? this.state.value : value,
    });
  }

  onFocus = event => {
    this.setState({
      hasFocus: true,
    });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  onBlur = event => {
    this.setState({
      hasFocus: false,
    });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  onChange = event => {
    this.setState({
      value: event.target.value,
      hasValue: hasValue(event.target.value),
    });

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  getSelectedOption() {
    return this.props.options
      .reduce((prev, opt) => [...prev, ...(opt.options ? opt.options : [opt])], [])
      .find(opt => `${opt.value}` === `${this.state.value}`);
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
    const isNumber = typeof value === 'number';

    if (hasFocus || hasStringValue || isNumber || isObject) {
      return true;
    }

    return false;
  }

  render() {
    const {
      theme,
      classes,
      helpText,
      id,
      label,
      style,
      className,
      placeholder,
      leftAddon,
      rightAddon,
      variant,
      type,
      disabled,
      selectablePlaceholder,
      options,
    } = this.props;
    const {
      hasSuccess,
      hasWarning,
      hasError,
      hasFocus,
      hasValue: stateHasValue,
      hasAddon,
      value,
    } = this.state;

    const title = this.getTitle();
    const selectedOption = this.getSelectedOption();

    const rootClassName = classNames(
      ['input', classes.input],
      {
        'input--has-focus': hasFocus,
        'input--has-value': stateHasValue,
        'input--has-addon': hasAddon,
        'input--has-success': hasSuccess,
        'input--has-warning': hasWarning,
        'input--has-error': hasError,
        'input--is-disabled': disabled,
      },
      `input--${kebabCase(type)}`,
      classes[variant],
      className,
    );

    const selectProps = omit(
      this.props,
      'hasSuccess',
      'hasWarning',
      'hasError',
      'helpText',
      'leftAddon',
      'rightAddon',
      'classes',
      'theme',
      'sheet',
      'options',
      'variant',
      'selectablePlaceholder',
    );

    const helpTextModifiers = {
      hasSuccess,
      hasWarning,
      hasError,
    };

    const SelectArrow = hasFocus ? IconChevronUp : IconChevronDown;

    const elementId = id || kebabCase(label);

    return (
      <div className={rootClassName} style={style}>
        <div className="input__field">
          <InputAddon content={leftAddon} position="left" />
          <div
            className={classNames([classes['select-wrapper']], 'input__element-wrapper')}
            title={title}
          >
            <select
              {...selectProps}
              id={elementId}
              className="input__element input__element--select"
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.onChange}
              placeholder={placeholder}
              value={value}
              label={label}
              type={type}
            >
              {placeholder && (
                <option value="" disabled={!selectablePlaceholder}>
                  {placeholder}
                </option>
              )}
              {options.map((option, index) => (
                <SelectOption
                  optionKey={option.key}
                  key={option.key || option.value || `${kebabCase(option.label)}-${index}`}
                  {...option}
                />
              ))}
            </select>
            {stateHasValue ? null : (
              <FakePlaceholder
                placeholder={placeholder}
                label={label}
                classes={classes}
                selectable={selectablePlaceholder}
              />
            )}
            {this.showValue() && selectedOption && (
              <span className="input__value-label">{selectedOption.label}</span>
            )}
            <SelectArrow className="input__select-arrow" stroke={theme.palette.variant.primary} />
          </div>
          <Label
            id={elementId}
            label={label}
            placeholder={placeholder}
            hasFocus={hasFocus}
            hasValue={stateHasValue}
          />
          <InputAddon content={rightAddon} position="right" />
        </div>
        <HelpText {...helpTextModifiers}>{helpText}</HelpText>
      </div>
    );
  }
}

InputSelect.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** @ignore */
  theme: PropTypes.object.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          key: PropTypes.string,
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
            .isRequired,
        }),
      ),
    }),
  ),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  selectablePlaceholder: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
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
  hasSuccess: PropTypes.bool,
  hasError: PropTypes.bool,
  hasWarning: PropTypes.bool,
  helpText: PropTypes.node,
  leftAddon: PropTypes.node,
  rightAddon: PropTypes.node,
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
