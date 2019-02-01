import React from 'react';
import { assert, expect } from 'chai';
import { shallow } from 'enzyme';
import { Component as InputDefault, styles } from './input-default';
import { mockClasses, theme } from '../../';

const classes = mockClasses(styles);

const defaultProps = { classes, theme };

const renderComponent = props => shallow(<InputDefault {...defaultProps} {...props} />);

describe('<InputDefault />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = renderComponent();
  });

  afterEach(() => {
    wrapper = null;
  });

  test('has class input', () => {
    expect(wrapper.hasClass('input')).toBe(true);
  });

  test('adds value class when there is a value', () => {
    const nonEmtpyValues = ['a string', false, 7, [3], { someProp: 'a value' }];

    nonEmtpyValues.forEach(v => {
      wrapper = renderComponent({ value: v });
      wrapper.setProps({ value: v });
      assert(wrapper.hasClass('input--has-value'), `"${v}" did not set the value class`);
    });
  });

  test('does not add a value class when value is empty', () => {
    const emtpyValues = [undefined, null, '', [], {}];

    emtpyValues.forEach(v => {
      wrapper.setProps({ value: v });
      assert(!wrapper.hasClass('input--has-value'), `"${v}" did set the value class`);
    });
  });
});
