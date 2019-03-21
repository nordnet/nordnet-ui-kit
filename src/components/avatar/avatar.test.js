import React from 'react';
import { shallow } from 'enzyme';
import { Component as Avatar, styles } from './avatar';
import { mockClasses } from '../..';

const classes = mockClasses(styles);

describe('<Avatar />', () => {
  const defaultProps = {
    classes,
    children: 'ISK',
  };
  test('should render a div', () => {
    const wrapper = shallow(<Avatar {...defaultProps} />);
    expect(wrapper.type()).toBe('div');
  });

  test('should have the class "root"', () => {
    const wrapper = shallow(<Avatar {...defaultProps} />);
    expect(wrapper.hasClass(classes.root)).toBe(true);
  });

  test('should have the class small by default', () => {
    const wrapper = shallow(<Avatar {...defaultProps} />);
    expect(wrapper.hasClass(classes.sm)).toBe(true);
  });

  test('should have the class md if size is set to "md"', () => {
    const wrapper = shallow(<Avatar {...defaultProps} size="md" />);
    expect(wrapper.hasClass(classes.md)).toBe(true);
  });

  test('should have the class lg if size is set to "lg"', () => {
    const wrapper = shallow(<Avatar {...defaultProps} size="lg" />);
    expect(wrapper.hasClass(classes.lg)).toBe(true);
  });

  test(`should render the text ${defaultProps.children}`, () => {
    const wrapper = shallow(<Avatar {...defaultProps} />);
    expect(wrapper.text()).toBe(defaultProps.children);
  });

  test('should render a <Avatar /> with custom color', () => {
    const color = '#123456';
    const wrapper = shallow(<Avatar {...defaultProps} color={color} />);
    expect(wrapper.prop('style').backgroundColor).toBe(color);
  });

  test('should be possibe to send in a custom className', () => {
    const className = 'custom-class';
    const wrapper = shallow(<Avatar {...defaultProps} className={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
  });
});
