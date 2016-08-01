import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import DatePicker from '../../../src/components/date-picker';
import ReactDatePicker from 'react-date-picker';

describe('<DatePicker />', () => {
  let wrapper;

  it('should render a <ReactDatePicker />', () => {
    wrapper = shallow(<DatePicker />);
    expect(wrapper.type()).to.equal(ReactDatePicker);
  });
});
