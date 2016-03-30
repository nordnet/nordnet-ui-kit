import React from 'react';
import './date-picker.scss';

const datePickerProps = {
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
};

export default datePickerProps;
