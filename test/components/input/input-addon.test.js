import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import InputAddon from '../../../src/components/input/input-addon';

const defaultProps = { content: 'addon' };

const renderComponent = props => shallow(<InputAddon {...defaultProps} {...props} />);

describe('<InputAddon />', () => {
  it('has class input__addon', () => {
    const wrapper = renderComponent();
    expect(wrapper.hasClass('input__addon')).to.equal(true);
  });

  it('has class input__addon--left if position is "left"', () => {
    const wrapper = renderComponent({ position: 'left' });
    expect(wrapper.hasClass('input__addon--left')).to.equal(true);
  });

  it('renders nothing when there is content', () => {
    const wrapper = renderComponent({ content: undefined });
    expect(wrapper.type()).to.equal(null);
  });

  it('renders content when it is set', () => {
    const content = 'content';
    const wrapper = renderComponent({ content });
    expect(wrapper.text()).to.equal(content);
  });

  it('renders the result of content() when content is a function', () => {
    const contentResult = 'result';
    const wrapper = renderComponent({ content: () => contentResult });
    expect(wrapper.text()).to.equal(contentResult);
  });
});
