import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NativeInput from '../../../src/components/input/native-input';

const noop = () => {};

const defaultProps = {
  type: 'text',
  onFocus: noop,
  onBlur: noop,
  onChange: noop,
};

const renderComponent = props => shallow(<NativeInput {...defaultProps} {...props} />);

describe('<NativeInput />', () => {
  it('has class input__element', () => {
    const wrapper = renderComponent();
    expect(wrapper.hasClass('input__element')).to.equal(true);
  });

  it('has class input__element--text when type is "text"', () => {
    const wrapper = renderComponent({ type: 'text' });
    expect(wrapper.hasClass('input__element--text')).to.equal(true);
  });

  it('appends custom className', () => {
    const customClass = 'custom-class';
    const wrapper = renderComponent({ className: customClass });
    expect(wrapper.hasClass(customClass)).to.equal(true);
    expect(wrapper.hasClass('input__element')).to.equal(true);
    expect(wrapper.hasClass('input__element--text')).to.equal(true);
  });

  it('renders an input when type is not textarea', () => {
    const wrapper = renderComponent();
    expect(wrapper.type()).to.equal('input');
  });

  it('renders an textarea when type is textarea', () => {
    const wrapper = renderComponent({ type: 'textarea' });
    expect(wrapper.type()).to.equal('textarea');
  });

  it('sets placeholder to placeholder if it is defined', () => {
    const placeholder = 'test123';
    const wrapper = renderComponent({ placeholder });
    expect(wrapper.prop('placeholder')).to.equal(placeholder);
  });

  it('sets placeholder to label if placeholder is not defined', () => {
    const label = 'test123';
    const wrapper = renderComponent({ label });
    expect(wrapper.prop('placeholder')).to.equal(label);
  });
});
