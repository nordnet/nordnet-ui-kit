import React from 'react';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../src';
import { Component as Page, styles } from '../../../src/components/pagination/page/page';
import ButtonNode from '../../../src/components/pagination/button-node';

describe('<Page />', () => {
  const classes = mockClasses(styles);
  const defaultProps = {
    classes,
    isSelected: false,
    isFirst: false,
    isLast: false,
    pageNumber: 2,
    labelText: '',
    url: '',
    selectHandler: () => {},
  };

  const shallowComponent = customProps => shallow(<Page {...defaultProps} {...customProps} />);

  test('should render a li element', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(`li.${classes.item}`).length).toBe(1);
  });

  test('should render a li element with class itemAlwaysVisible if page is selected', () => {
    const wrapper = shallowComponent({ isSelected: true });

    expect(wrapper.find(`li.${classes.item}`).hasClass(classes.itemAlwaysVisible)).toBe(true);
  });

  test('should render a li element with class itemAlwaysVisible if page is first', () => {
    const wrapper = shallowComponent({ isFirst: true });

    expect(wrapper.find(`li.${classes.item}`).hasClass(classes.itemAlwaysVisible)).toBe(true);
  });

  test('should render a li element with class itemAlwaysVisible if page is last', () => {
    const wrapper = shallowComponent({ isLast: true });

    expect(wrapper.find(`li.${classes.item}`).hasClass(classes.itemAlwaysVisible)).toBe(true);
  });

  test('should render a ButtonNode component', () => {
    const wrapper = shallowComponent({ isLast: true });

    expect(wrapper.find(ButtonNode).length).toBe(1);
  });

  test('should render disabled prop to ButtonNode component', () => {
    const wrapper = shallowComponent({ isSelected: true });

    expect(wrapper.find(ButtonNode).props().disabled).toBe(true);
  });

  test('should not render disabled prop to ButtonNode component', () => {
    const wrapper = shallowComponent({ isSelected: false });

    expect(wrapper.find(ButtonNode).props().disabled).toBe(false);
  });

  test('should render url prop to ButtonNode component', () => {
    const wrapper = shallowComponent({ url: 'www.test.com' });

    expect(wrapper.find(ButtonNode).props().url).toBe('www.test.com');
  });

  test('should have getNode prop in ButtonNode component', () => {
    const testFunc = () => true;
    const wrapper = shallowComponent({ getNode: testFunc });

    expect(wrapper.find(ButtonNode).props().getNode).toBe(testFunc);
  });

  test('should have aria-label text in defaultProps', () => {
    const wrapper = shallowComponent({ labelText: 'Go to page' });

    expect(wrapper.find(ButtonNode).props().defaultProps['aria-label']).toBe('Go to page');
  });
});
