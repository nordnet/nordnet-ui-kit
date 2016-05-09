import React from 'react';
import ReactDatePicker from 'react-date-picker';
import './date-picker.scss';

export default function DatePicker(props) {
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
    <ReactDatePicker { ...options } />
  );
}
