import React from 'react';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';
import Icon from '../icon/icon';
import './checkbox.scss';

class Checkbox extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
      disabled: props.disabled,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      checked: event.target.checked,
    });
  }

  renderCheckbox() {
    return (
      <div className="checkbox__input">
        <input { ...this.props } type="checkbox" checked={ this.state.checked } disabled={ this.state.disabled } value={ this.props.value } onChange={ this.handleChange } />
        <span>
          { this.state.checked && !this.state.disabled ? <Icon type="checkmark" stroke="#FFFFFF" style={{ display: 'block' }} /> : null }
          { this.state.checked && this.state.disabled ? <Icon type="checkmark" stroke="#AAAAAA" style={{ display: 'block' }} /> : null }
        </span>
      </div>
    );
  }

  renderLabel() {
    if (!this.props.label) return null;

    return <span className="checkbox__label">{ this.props.label }</span>;
  }

  render() {
    const classes = classNames('checkbox', {
      'checkbox--is-disabled': this.props.disabled,
    }, this.props.className);

    return (
      <label className={ classes }>
        { this.renderCheckbox() }
        { this.renderLabel() }
      </label>
    );
  }
}

Checkbox.propTypes = {
  className: React.PropTypes.string,
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  value: React.PropTypes.string,
  label: React.PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
};

export default Checkbox;
