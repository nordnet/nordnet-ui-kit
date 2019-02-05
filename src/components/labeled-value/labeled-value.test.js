import React from 'react';
import { shallow } from 'enzyme';
import { mockClasses } from '../..';
import { Component as LabeledValue, styles } from './labeled-value';

describe('<LabeledValue />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <LabeledValue classes={classes} className="testclass" label="label">
        myvalue
      </LabeledValue>,
    );
  });

  test('should render a <div />', () => {
    expect(wrapper.type()).toBe('div');
  });

  test('should have class root', () => {
    expect(wrapper.hasClass(classes.root)).toBe(true);
  });

  test('should have input classname', () => {
    expect(wrapper.hasClass('testclass')).toBe(true);
  });

  test('should render input child as value', () => {
    expect(
      wrapper
        .find(`span.${classes.value}`)
        .childAt(0)
        .text(),
    ).toBe('myvalue');
  });

  test('should render input label', () => {
    expect(
      wrapper
        .find(`span.${classes.label}`)
        .childAt(0)
        .text(),
    ).toBe('label');
  });

  test('should have value node with md as default size', () => {
    const valueNode = wrapper.find(`span.${classes.value}`).first();
    expect(valueNode.hasClass(classes['value-md'])).toBe(true);
  });

  ['xs', 'sm', 'md', 'lg'].forEach(size => {
    test(`value should have class "value-${size}" if prop size is ${size}`, () => {
      wrapper.setProps({ size });
      const valueNode = wrapper.find(`span.${classes.value}`).first();
      expect(valueNode.hasClass(classes[`value-${size}`])).toBe(true);
    });
  });
});
