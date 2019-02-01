import React from 'react';
import { shallow } from 'enzyme';
import NativeInput from './native-input';

const noop = () => {};

const defaultProps = {
  type: 'text',
  onFocus: noop,
  onBlur: noop,
  onChange: noop,
};

const renderComponent = props => shallow(<NativeInput {...defaultProps} {...props} />);

describe('<NativeInput />', () => {
  test('has class input__element', () => {
    const wrapper = renderComponent();
    expect(wrapper.hasClass('input__element')).toBe(true);
  });

  test('has class input__element--text when type is "text"', () => {
    const wrapper = renderComponent({ type: 'text' });
    expect(wrapper.hasClass('input__element--text')).toBe(true);
  });

  test('appends custom className', () => {
    const customClass = 'custom-class';
    const wrapper = renderComponent({ className: customClass });
    expect(wrapper.hasClass(customClass)).toBe(true);
    expect(wrapper.hasClass('input__element')).toBe(true);
    expect(wrapper.hasClass('input__element--text')).toBe(true);
  });

  test('renders an input when type is not textarea', () => {
    const wrapper = renderComponent();
    expect(wrapper.type()).toBe('input');
  });

  test('renders an textarea when type is textarea', () => {
    const wrapper = renderComponent({ type: 'textarea' });
    expect(wrapper.type()).toBe('textarea');
  });

  test('sets placeholder to placeholder if it is defined', () => {
    const placeholder = 'test123';
    const wrapper = renderComponent({ placeholder });
    expect(wrapper.prop('placeholder')).toBe(placeholder);
  });

  test('sets placeholder to label if placeholder is not defined', () => {
    const label = 'test123';
    const wrapper = renderComponent({ label });
    expect(wrapper.prop('placeholder')).toBe(label);
  });
});
