import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import styles from './editable-input-styles';
import { Button, Icon, Input, Spinner } from '../..';
import HelpText from '../input/help-text';

const SENSITIVE_PLACEHOLDER_VALUE = '****';
class EditableInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      saving: false,
      value: this.props.sensitive ? SENSITIVE_PLACEHOLDER_VALUE : this.props.value,
      originalValue: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value) this.setState({ value: nextProps.value });
  }

  onEdit = event => {
    if (this.props.sensitive) {
      this.setState(prevState => {
        return { originalValue: prevState.value, editing: true, value: '' };
      });
    } else {
      this.setState(prevState => ({ originalValue: prevState.value, editing: true }));
    }

    if (this.props.onEdit) {
      this.props.onEdit(event);
    }
  };

  onFocus = event => {
    /* NOTE: Workaround for moving cursor to end of input in IE/Edge */
    const value = event.target.value;
    const target = event.target;
    target.value = '';
    target.value = value;

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  onBlur = event => {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  onChange = event => {
    this.setState({ value: event.target.value || this.props.emptyDefaultValue });

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  onSubmit = async event => {
    event.preventDefault();
    if (!this.props.hasError) {
      if (this.props.onSubmit) {
        this.setState({ saving: true });
        await this.props.onSubmit(this.state.value);
        this.setState({ saving: false });
      }
      if (this.props.sensitive) {
        this.setState({ value: SENSITIVE_PLACEHOLDER_VALUE });
      }
      this.setState({ editing: false });
    }
  };

  onCancel = () => {
    this.setState(prevState => ({ value: prevState.originalValue }));
    if (this.props.onCancel) {
      this.props.onCancel(this.state.originalValue);
    }
    this.setState({ editing: false });
  };

  renderHelpText() {
    const modifiers = {
      hasSuccess: this.props.hasSuccess,
      hasWarning: this.props.hasWarning,
      hasError: this.props.hasError,
    };

    return !this.props.helpText ? null : <HelpText {...modifiers}>{this.props.helpText}</HelpText>;
  }

  render() {
    const { classes } = this.props;

    const input = this.state.editing ? (
      <form className={classes.form} onSubmit={this.onSubmit}>
        <Input
          autoFocus
          className={classes.input}
          style={this.props.style}
          type={this.props.type}
          variant={this.props.variant}
          disabled={this.props.disabled || this.state.saving}
          label={this.props.label}
          placeholder={this.props.placeholder}
          id={this.props.id}
          value={this.state.value}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          valueFormatter={this.props.valueFormatter}
          hasSuccess={this.props.hasSuccess}
          hasError={this.props.hasError}
          hasWarning={this.props.hasWarning}
          helpText={this.props.helpText}
          leftAddon={this.props.leftAddon}
          rightAddon={this.props.rightAddon}
        />
      </form>
    ) : (
      <div
        className={classNames(classes.readOnly, {
          [classes.hasLabel]: this.props.label,
          [classes.hasError]: this.props.hasError,
        })}
        style={this.props.style}
      >
        <div className={classes.value}>{this.state.value}</div>
        {this.renderHelpText()}
      </div>
    );

    const buttons = this.state.editing ? (
      <div className={classes.buttons}>
        <Button
          variant="primary"
          modifier="action"
          onClick={this.onSubmit}
          disabled={this.props.disabled || this.props.hasError || this.state.saving}
        >
          {this.state.saving ? <Spinner size={13} color="#FFF" /> : this.props.submitLabel}
        </Button>
        <Button
          variant="secondary"
          modifier="action"
          onClick={this.onCancel}
          disabled={this.props.disabled || this.state.saving}
        >
          {this.props.cancelLabel}
        </Button>
      </div>
    ) : (
      <Button
        className={classes.buttonEdit}
        onClick={this.onEdit}
        variant="secondary"
        icon={<Icon.Edit />}
        disabled={this.props.disabled}
      />
    );

    return (
      <div
        className={classNames(
          classes.container,
          { [classes.isEditing]: this.state.editing },
          this.props.className,
        )}
      >
        {input}
        {buttons}
      </div>
    );
  }
}

EditableInput.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  /** Needs to be a valid input type */
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  label: PropTypes.node,
  submitLabel: PropTypes.node,
  cancelLabel: PropTypes.node,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  onEdit: PropTypes.func,
  valueFormatter: PropTypes.func,
  hasSuccess: PropTypes.bool,
  hasError: PropTypes.bool,
  hasWarning: PropTypes.bool,
  helpText: PropTypes.node,
  leftAddon: PropTypes.node,
  rightAddon: PropTypes.node,
  emptyDefaultValue: PropTypes.string,
  /** true: displays **** instead of the real value */
  sensitive: PropTypes.bool,
  classes: PropTypes.object.isRequired,
};

EditableInput.defaultProps = {
  type: 'text',
  variant: 'secondary',
  submitLabel: 'Submit',
  cancelLabel: 'Cancel',
  emptyDefaultValue: '',
  sensitive: false,
};

export default injectSheet(styles)(EditableInput);
export { EditableInput as Component, styles };
