import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Row, Col } from 'react-bem-grid';
import Section from '../components/section/section';
import DatePicker from 'react-date-picker';
import datePicker from '../../../../src/components/date-picker/date-picker';

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
    const description = <span>We reccomend using <a href="https://github.com/zippyui/react-date-picker">react-date-picker</a> and provide a custom theme as well as a default set of props to be used on the component.</span>

    const example = (
      <Row>
        <Col xs={ 10 } sm={ 4 }>
          <DatePicker
            { ...datePicker }
            minDate={ this.state.minDate }
            maxDate={ this.state.maxDate }
            date={ this.state.date }
            onChange={ this.onChangeHandler }
          />
        </Col>
      </Row>
    );

    const code = `import DatePicker from 'react-date-picker';
import datePicker from 'nordnet-ui-kit/dist/date-picker';

<DatePicker
  { ...datePicker }
  minDate={ this.state.minDate }
  maxDate={ this.state.maxDate }
  date={ this.state.date }
  onChange={ this.onChangeHandler }
/>`;

    const explanation = <span>The UI kit exposes the default props to be used on <a href="https://github.com/zippyui/react-date-picker">react-date-picker</a>, import them and use the <a href="https://facebook.github.io/react/docs/jsx-spread.html#spread-attributes">spread attributes</a> feature to copy them onto the components props.</span>;

    return (
      <Section
        title="Date picker"
        description={ description }
        example={ example }
        code={ code }
        explanation={ explanation }
      />
    );
  }
}

export default DatePickerSection;
