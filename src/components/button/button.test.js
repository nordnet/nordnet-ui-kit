import React from 'react';
import { shallow } from 'enzyme';
import { mockClasses } from '../..';
import { Component as Button, styles } from './button';

describe('<Button />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  test('should render <button> by default', () => {
    wrapper = shallow(<Button classes={classes}>Button</Button>);
    expect(wrapper.type()).toBe('button');
  });

  ['primary', 'secondary', 'link'].forEach(variant => {
    test(`should have class ${classes[variant]} if variant is set to ${variant}`, () => {
      wrapper = shallow(
        <Button classes={classes} variant={variant}>
          Button
        </Button>,
      );
      expect(wrapper.hasClass(classes[variant])).toBe(true);
    });
  });

  ['danger', 'warning', 'success'].forEach(modifier => {
    test(`should have class ${modifier} if modifier is set to ${modifier}`, () => {
      wrapper = shallow(
        <Button classes={classes} modifier={modifier}>
          Button
        </Button>,
      );
      expect(wrapper.hasClass(modifier)).toBe(true);
    });
  });

  test('should render children', () => {
    wrapper = shallow(<Button classes={classes}>Button</Button>);
    expect(wrapper.childAt(0).text()).toBe('Button');
  });

  test('should be disabled if prop disabled is set', () => {
    wrapper = shallow(
      <Button classes={classes} disabled>
        Button
      </Button>,
    );
    expect(wrapper.props().disabled).toBe(true);
  });

  test(`should have class icon for an icon button`, () => {
    const icon = <svg />;
    wrapper = shallow(<Button classes={classes} icon={icon} />);
    expect(wrapper.hasClass(classes.icon)).toBe(true);
  });

  test(`should have class iconText for a button with an icon`, () => {
    const icon = <svg />;
    wrapper = shallow(
      <Button classes={classes} icon={icon}>
        Button
      </Button>,
    );
    expect(wrapper.hasClass(classes.iconText)).toBe(true);
  });
});
