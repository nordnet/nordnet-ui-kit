const hour = 3600 * 1000;
const day = 24 * hour;
const week = 5 * day;
const month = 20 * day;
const year = 360 * day;

const yearFormat = '%e %b - %y';
const fullYearFormat = '%A, %e %b - %Y';
const shortDateFormat = '%e %b';
const shortDateTimeFormat = '%e %b, %H:%M';
const fullDateTimeFormat = '%A, %e %b - %H:%M';
const timeFormat = '%H:%M';
const fullDateFormat = '%A, %e %b';

export default {
  hour, day, week, month, year,
  yearFormat, fullYearFormat,
  shortDateFormat, shortDateTimeFormat, fullDateTimeFormat,
  timeFormat, fullDateFormat,
};
