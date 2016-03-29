import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Row, Col } from 'react-bem-grid';
import Section from '../components/section/section';
import DatePicker from 'react-date-picker';
import '../../../../src/components/date-picker/date-picker.scss';

class DatePickerSection extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      minDate: '2015-01-01',
      maxDate: '2016-12-31',
      date: Date.now(),
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(date) {
    this.setState({
      date: date,
    });
  }

  render() {
    const example = (
      <Row>
        <Col xs={ 10 } sm={ 4 }>
          <DatePicker
            minDate={ this.state.minDate }
            maxDate={ this.state.maxDate }
            weekStartDay={ 1 }
            weekDayNames={[<span className="dp-weekend">Su</span>, 'Mo', 'Tu', 'We', 'Th', 'Fr', <span className="dp-weekend">Sa</span>]}
            highlightWeekends
            hideFooter
            date={ this.state.date }
            onChange={ this.onChangeHandler }
          />
        </Col>
      </Row>
    );

    const code = `<DatePicker
  minDate='2014-04-04'
  maxDate='2015-10-10'
  date={ Date.now() }
  onChange={ onChange }
/>`;

    return (
      <Section
        title="Date picker"
        description={ <span>This is the custom CSS for <a href="https://github.com/zippyui/react-date-picker">react-date-picker</a></span> }
        example={ example }
        code={ code }
      />
    );
  }
}

export default DatePickerSection;
