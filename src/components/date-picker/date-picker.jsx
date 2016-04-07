import React from 'react';
import DatePicker from 'react-date-picker';
import './date-picker.scss';

function datePicker(props) {
  const options = Object.assign({}, {
    weekStartDay: 1,
    weekDayNames: [
      <span className="dp-weekend">Su</span>,
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
      <span className="dp-weekend">Sa</span>,
    ],
    highlightWeekends: true,
    hideFooter: true,
  }, props);

  return (
    <DatePicker { ...options } />
  );
}

export default datePicker;
