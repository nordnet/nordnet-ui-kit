import React from 'react';
import { shallow } from 'enzyme';
import { Button, mockClasses } from '../../..';
import { Component as Stepper, styles } from './stepper';
import ButtonNode from '../button-node';

describe('<Stepper />', () => {
  const classes = mockClasses(styles);
  const defaultProps = {
    classes,
    clickHandler: () => {},
    disabled: false,
    url: '?page=4',
    getNode: () => {},
  };

  const shallowComponent = customProps => shallow(<Stepper {...defaultProps} {...customProps} />);

  test('should render ButtonNode component', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(ButtonNode).length).toBe(1);
  });

  test('should have node prop as Button component', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(ButtonNode).props().node).toBe(Button);
  });

  test('should have getNode prop in ButtonNode component', () => {
    const testFunc = () => true;
    const wrapper = shallowComponent({ getNode: testFunc });

    expect(wrapper.find(ButtonNode).props().getNode).toBe(testFunc);
  });

  test('should render url prop to ButtonNode component', () => {
    const wrapper = shallowComponent({ url: 'www.test.com' });

    expect(wrapper.find(ButtonNode).props().url).toBe('www.test.com');
  });

  test('should render disabled prop to ButtonNode component', () => {
    const wrapper = shallowComponent({ disabled: true });

    expect(wrapper.find(ButtonNode).props().disabled).toBe(true);
  });

  test('should have variant in defaultProps', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(ButtonNode).props().defaultProps.variant).toBe('link');
  });

  test('should have modifier in defaultProps', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(ButtonNode).props().defaultProps.modifier).toBe('action');
  });
});
