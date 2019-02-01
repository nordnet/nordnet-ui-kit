import React from 'react';
import { shallow } from 'enzyme';
import { Component as Badge, styles } from './badge';
import { mockClasses } from '../../';

describe('<Badge />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  test('should render <span> as container', () => {
    wrapper = shallow(<Badge classes={classes} />);
    expect(wrapper.type()).toBe('span');
  });

  test('should have the class root', () => {
    wrapper = shallow(<Badge classes={classes} />);
    expect(wrapper.hasClass(classes.root)).toBe(true);
  });

  test('should render children', () => {
    wrapper = shallow(<Badge classes={classes}>child</Badge>);
    expect(wrapper.contains('child')).toBe(true);
  });

  test('should have class success when modifier = sucess', () => {
    wrapper = shallow(<Badge classes={classes} modifier="success" />);
    expect(wrapper.hasClass(classes.success)).toBe(true);
  });

  test('should have class badge--danger with danger modifier', () => {
    wrapper = shallow(<Badge classes={classes} modifier="danger" />);
    expect(wrapper.hasClass(classes.danger)).toBe(true);
  });

  test('should have class badge--warning with warning modifier', () => {
    wrapper = shallow(<Badge classes={classes} modifier="warning" />);
    expect(wrapper.hasClass(classes.warning)).toBe(true);
  });

  test('should have 3 classes if a modifier and className is given', () => {
    wrapper = shallow(<Badge classes={classes} className="test" modifier="warning" />);
    expect(
      wrapper.hasClass(classes.root) &&
        wrapper.hasClass(classes.warning) &&
        wrapper.hasClass('test'),
    ).toBe(true);
  });
});
