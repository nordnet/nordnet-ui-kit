import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import Label from './label';
import styles from './input-default-styles';
import HelpText from './help-text';
import InputAddon from './input-addon';
import NativeInput from './native-input';
import { isUndefined, hasValue } from './utils';
import omit from '../../utilities/omit';

class InputDefault extends React.PureComponent {
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
    const state = {};

    if (this.props.valueFormatter) {
      const value = this.props.valueFormatter(event.target.value);

      state.value = value;
      state.hasValue = hasValue(value);
    } else {
      state.value = event.target.value;
      state.hasValue = hasValue(event.target.value);
    }

    this.setState(state);

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    const {
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
    } = this.props;
    const {
      hasSuccess,
      hasWarning,
      hasError,
      value,
      hasFocus,
      hasValue: stateHasValue,
      hasAddon,
    } = this.state;

    const elementId = id || kebabCase(label);

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

    const helpTextModifiers = {
      hasSuccess,
      hasWarning,
      hasError,
    };

    const fieldProps = omit(
      this.props,
      'valueFormatter',
      'hasSuccess',
      'hasWarning',
      'hasError',
      'helpText',
      'leftAddon',
      'rightAddon',
      'options',
      'classes',
      'sheet',
      'theme',
      'variant',
      'lineCount',
      'id',
    );

    return (
      <div className={rootClassName} style={style}>
        <div className="input__field">
          <InputAddon content={leftAddon} position="left" />
          <NativeInput
            {...fieldProps}
            id={elementId}
            type={type}
            value={value}
            placeholder={placeholder}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
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

InputDefault.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  /** Needs to be a valid input type */
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
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** Manipulates the value of the input, eg. removing unsupported characters from number inputs */
  valueFormatter: PropTypes.func,
  hasSuccess: PropTypes.bool,
  hasError: PropTypes.bool,
  hasWarning: PropTypes.bool,
  helpText: PropTypes.node,
  leftAddon: PropTypes.node,
  rightAddon: PropTypes.node,
  /** Only used when type === textarea */
  lineCount: PropTypes.number, // eslint-disable-line
};

InputDefault.defaultProps = {
  type: 'text',
  variant: 'primary',
  lineCount: 3,
};

export { InputDefault as Component, styles };
export default injectSheet(styles)(InputDefault);
