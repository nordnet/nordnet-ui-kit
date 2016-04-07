import React from 'react';
import InputDefault from './input-default';
import DatePicker from '../date-picker/date-picker';
import Icon from '../icon/icon';
import variables from '../../utilities/variables';
import './input-date.scss';

class InputDate extends InputDefault {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.state, {
      hasAddon: true,
      showDatePicker: false,
    });

    this.onDatePickerChange = this.onDatePickerChange.bind(this);
    this.onDatePickerToggleClick = this.onDatePickerToggleClick.bind(this);
    this.renderDatePickerToggle = this.renderDatePickerToggle.bind(this);
  }

  onDatePickerChange(date) {
    this.setState({
      value: date,
      hasValue: this.hasValue(date),
    });
  }

  renderDatePicker() {
    return (
      <DatePicker
        style={{ display: this.state.showDatePicker ? 'block' : 'none' }}
        date={ this.state.value }
        defaultViewDate={ this.state.value }
        onChange={ this.onDatePickerChange }
      />
    );
  }

  onDatePickerToggleClick() {
    this.setState({
      showDatePicker: !this.state.showDatePicker,
    });
  }

  renderDatePickerToggle() {
    return (
      <button className="input__toggle-datepicker" onClick={ this.onDatePickerToggleClick }>
        <Icon type="calendar" stroke={ variables.colorPrimary } style={{ display: 'block', verticalAlign: 'bottom' }} />
      </button>
    );
  }

  renderField(id) {
    return (
      <div className="input__field">
        { this.renderInput(id) }
        { this.renderAddon(this.renderDatePickerToggle, 'right') }
        { this.renderDatePicker() }
        { this.renderLabel(id) }
        { this.renderValidationIcon() }
      </div>
    );
  }
}

export default InputDate;
