import React, { PropTypes } from 'react';
import InputDefault from './input-default';
import './input-password.scss';

class InputPassword extends InputDefault {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.state, {
      showPassword: props.showPassword ? true : false,
      hasAddon: true,
    });

    this.renderPasswordToggle = this.renderPasswordToggle.bind(this);
    this.onPasswordToggleChange = this.onPasswordToggleChange.bind(this);
  }

  // TODO: How to handle this when there's already a componentWillReceiveProps method?
  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     showPassword: nextProps.showPassword ? true : false,
  //   });
  // }

  onPasswordToggleChange(event) {
    this.setState({
      showPassword: event.target.checked,
    });
  }

  renderPasswordToggle() {
    return (
      <label
        className="input__toggle"
        style={{
          display: this.state.hasValue ? 'block' : 'none',
        }}
      >
        <input
          type="checkbox"
          className="input__toggle-input"
          name="show-password"
          onChange={ this.onPasswordToggleChange }
          checked={ this.state.showPassword }
        />
        { this.state.showPassword ? 'Hide' : 'Show' }
      </label>
    );
  }

  renderField(id) {
    const type = this.state.showPassword ? 'text' : 'password';

    return (
      <div className="input__field">
        { this.renderInput(id, type) }
        { this.renderLabel(id) }
        { this.renderAddon(this.renderPasswordToggle, 'left') }
        { this.renderValidationIcon() }
      </div>
    );
  }
}

InputPassword.propTypes = {
  showPassword: PropTypes.bool,
};

InputPassword.defaultProps = {
  showPassword: false,
};

export default InputPassword;
