import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SelectOption from './select-option';

const renderComponent = props => shallow(<SelectOption {...props} />);

describe('<SelectOption />', () => {
  it('renders an option', () => {
    const wrapper = renderComponent();
    expect(wrapper.type()).to.equal('option');
  });

  it('has a value attribute set to value', () => {
    const value = 'test123';
    const wrapper = renderComponent({ value });
    expect(wrapper.prop('value')).to.equal(value);
  });

  it('renders label as content', () => {
    const label = 'test123';
    const wrapper = renderComponent({ label });
    expect(wrapper.text()).to.equal(label);
  });

  it('renders an optgroup if options is defined', () => {
    const options = [{ label: 'A', value: 'B' }];
    const wrapper = renderComponent({ options, label: 'C' });
    expect(wrapper.type()).to.equal('optgroup');
  });
});
