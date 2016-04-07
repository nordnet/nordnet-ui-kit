import React from 'react';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import Icon from '../icon/icon';
import './input-checkbox-radio.scss';

class InputCheckboxRadio extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
      disabled: props.disabled,
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.checked ? nextProps.checked : false,
      disabled: nextProps.disabled ? nextProps.disabled : false,
    });
  }

  onChange(event) {
    this.setState({
      checked: event.target.checked,
    });

    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  renderInput() {
    const classes = classNames('input__element', `input__element--${ kebabCase(this.props.type) }`);

    return (
      <div className={ classes }>
        <input
          { ...this.props }
          type={ this.props.type }
          checked={ this.state.checked }
          disabled={ this.state.disabled }
          value={ this.props.value }
          onChange={ this.onChange }
        />
        <span>
          { this.state.checked && !this.state.disabled ? <Icon type="checkmark" stroke="#FFFFFF" style={{ display: 'block' }} /> : null }
          { this.state.checked && this.state.disabled ? <Icon type="checkmark" stroke="#AAAAAA" style={{ display: 'block' }} /> : null }
        </span>
      </div>
    );
  }

  renderLabel() {
    if (!this.props.label) return null;

    return <span className="input__label">{ this.props.label }</span>;
  }

  render() {
    const classes = classNames('input', {
      'input--is-disabled': this.state.disabled,
    }, `input--${ kebabCase(this.props.type) }`, this.props.className);

    return (
      <label className={ classes }>
        { this.renderInput() }
        { this.renderLabel() }
      </label>
    );
  }
}

InputCheckboxRadio.propTypes = {
  className: React.PropTypes.string,
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  value: React.PropTypes.string,
  label: React.PropTypes.string,
};

InputCheckboxRadio.defaultProps = {
  checked: false,
  disabled: false,
};

export default InputCheckboxRadio;
