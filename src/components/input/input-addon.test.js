import React from 'react';
import { shallow } from 'enzyme';
import InputAddon from './input-addon';

const defaultProps = { content: 'addon' };

const renderComponent = props => shallow(<InputAddon {...defaultProps} {...props} />);

describe('<InputAddon />', () => {
  test('has class input__addon', () => {
    const wrapper = renderComponent();
    expect(wrapper.hasClass('input__addon')).toBe(true);
  });

  test('has class input__addon--left if position is "left"', () => {
    const wrapper = renderComponent({ position: 'left' });
    expect(wrapper.hasClass('input__addon--left')).toBe(true);
  });

  test('renders nothing when there is content', () => {
    const wrapper = renderComponent({ content: undefined });
    expect(wrapper.type()).toBeNull();
  });

  test('renders content when it is set', () => {
    const content = 'content';
    const wrapper = renderComponent({ content });
    expect(wrapper.text()).toBe(content);
  });

  test('renders the result of content() when content is a function', () => {
    const contentResult = 'result';
    const wrapper = renderComponent({ content: () => contentResult });
    expect(wrapper.text()).toBe(contentResult);
  });
});
