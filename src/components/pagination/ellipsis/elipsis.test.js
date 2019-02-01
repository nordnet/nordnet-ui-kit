import React from 'react';
import { shallow } from 'enzyme';
import { mockClasses } from '../../..';
import { Component as Ellipsis, styles } from './ellipsis';

describe('<Ellipsis />', () => {
  const classes = mockClasses(styles);
  const defaultProps = {
    classes,
  };
  const shallowComponent = customProps => shallow(<Ellipsis {...defaultProps} {...customProps} />);

  test('should render a li element', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(`li.${classes.item}`).length).toBe(1);
  });

  test('should not render a li element with class hiddenOnDesktop', () => {
    const wrapper = shallowComponent({ hiddenOnDesktop: false });

    expect(wrapper.find(`li.${classes.item}.${classes.hiddenOnDesktop}`).length).toBe(0);
  });

  test('should render a li element with class hiddenOnDesktop', () => {
    const wrapper = shallowComponent({ hiddenOnDesktop: true });

    expect(wrapper.find(`li.${classes.item}.${classes.hiddenOnDesktop}`).length).toBe(1);
  });

  test('should render ...', () => {
    const wrapper = shallowComponent({ children: 'Next' });

    expect(wrapper.childAt(0).text()).toBe('...');
  });
});
