import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Component as RadioGroup } from './radio-group';

const defaultProps = {
  value: 1,
  name: 'radio-group',
  type: 'radio',
  children: [<input key="1" type="radio" value="1" />],
};

const renderComponent = props => shallow(<RadioGroup {...defaultProps} {...props} />);

describe('<RadioGroup />', () => {
  test('should render <div> as container', () => {
    const wrapper = renderComponent();
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).toBe(expected);
  });

  test('should give all children inputs the name attribute sent in as prop', () => {
    const name = 'this-is-the-default-name';
    const children = [
      <input key="1" type="radio" value="1" />,
      <input key="2" type="radio" value="2" />,
    ];
    const wrapper = renderComponent({ name, children });
    const actual = wrapper.find(`input[name="${name}"]`);
    const expected = children.length;
    expect(actual).toHaveLength(expected);
  });

  test('should render the correct input as selected when selectedValue is supplied', () => {
    const selectedValue = '1';
    const children = [
      <input key="1" type="radio" value="1" />,
      <input key="2" type="radio" value="2" />,
    ];
    const wrapper = renderComponent({ selectedValue, children });
    const actual = wrapper.find(`input[value="${selectedValue}"]`).prop('checked');
    const expected = true;
    expect(actual).toBe(expected);
  });

  test('should call user supplied onChange when an input is changed to checked', () => {
    const spy = sinon.spy();
    const wrapper = renderComponent({
      selectedValue: '1',
      onChange: spy,
      children: [
        <input key="1" type="radio" value="1" />,
        <input key="2" type="radio" value="2" />,
      ],
    });
    const actual = wrapper.find('input[type="radio"][value="2"]');
    actual.simulate('change', { target: { checked: true }, currentTarget: { checked: true } });
    const expected = true;
    expect(spy.calledOnce).toBe(expected);
  });
});
