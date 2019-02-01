import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../..';
import ButtonNode from '.';

describe('<ButtonNode />', () => {
  const defaultProps = {
    disabled: false,
    url: null,
    getNode: null,
    defaultNode: null,
    defaultProps: {},
  };

  const shallowComponent = customProps =>
    shallow(<ButtonNode {...defaultProps} {...customProps} />);

  test('should render a default button', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find('button').props().type).toBe('button');
  });

  test('should render a default link', () => {
    const wrapper = shallowComponent({ url: '?page=4' });

    expect(wrapper.find('a').props().href).toBe('?page=4');
  });

  test('should render a default button if disabled', () => {
    const wrapper = shallowComponent({ url: '?page=4', disabled: true });

    expect(wrapper.find('button').props().disabled).toBe(true);
  });

  test('should render a default button with type prop if disabled', () => {
    const wrapper = shallowComponent({ url: '?page=4', disabled: true });

    expect(wrapper.find('button').props().type).toBe('button');
  });

  test('should render Button component', () => {
    const wrapper = shallowComponent({ node: Button });

    expect(wrapper.find(Button).length).toBe(1);
  });

  test('should render Button component from getNode function', () => {
    const wrapper = shallowComponent({ defaultNode: Button, getNode: () => <Button>test</Button> });

    expect(
      wrapper
        .find(Button)
        .childAt(0)
        .text(),
    ).toBe('test');
  });
});
