import React from 'react';
import { shallow } from 'enzyme';
import SelectOption from './select-option';

const renderComponent = props => shallow(<SelectOption {...props} />);

describe('<SelectOption />', () => {
  test('renders an option', () => {
    const wrapper = renderComponent();
    expect(wrapper.type()).toBe('option');
  });

  test('has a value attribute set to value', () => {
    const value = 'test123';
    const wrapper = renderComponent({ value });
    expect(wrapper.prop('value')).toBe(value);
  });

  test('renders label as content', () => {
    const label = 'test123';
    const wrapper = renderComponent({ label });
    expect(wrapper.text()).toBe(label);
  });

  test('renders an optgroup if options is defined', () => {
    const options = [{ label: 'A', value: 'B' }];
    const wrapper = renderComponent({ options, label: 'C' });
    expect(wrapper.type()).toBe('optgroup');
  });
});
