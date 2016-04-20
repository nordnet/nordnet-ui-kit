import React from 'react';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import Checkbox from './checkbox';
import Radio from './radio';
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
    return (
      <div className="input-checkbox-radio__element">
        <input
          { ...this.props }
          type={ this.props.type }
          checked={ this.state.checked }
          disabled={ this.state.disabled }
          value={ this.props.value }
          onChange={ this.onChange }
          aria-labelledby={ `${ kebabCase(this.props.label) }-label` }
        />
        { this.props.type === 'checkbox' ? <Checkbox { ...this.state } /> : null }
        { this.props.type === 'radio' ? <Radio { ...this.state } /> : null }
      </div>
    );
  }

  renderLabel() {
    if (!this.props.label) return null;

    return (
      <span id={ `${ kebabCase(this.props.label) }-label` } className="input-checkbox-radio__label">
        { this.props.label }
      </span>
    );
  }

  render() {
    const classes = classNames('input-checkbox-radio', {
      'input-checkbox-radio--is-disabled': this.state.disabled,
    }, this.props.className);

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
