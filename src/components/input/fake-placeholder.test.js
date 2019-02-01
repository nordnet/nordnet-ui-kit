import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FakePlaceholder from './fake-placeholder';

const defaultProps = { classes: { selectable: 'selectable' } };

const renderComponent = props => shallow(<FakePlaceholder {...defaultProps} {...props} />);

describe('<FakePlaceholder />', () => {
  it('has class input__placeholder', () => {
    const wrapper = renderComponent();
    expect(wrapper.hasClass('input__placeholder')).to.equal(true);
  });

  it('has class selectable when selectable is true', () => {
    const wrapper = renderComponent({ selectable: true });
    expect(wrapper.hasClass('selectable')).to.equal(true);
  });

  it('renders placeholder when set', () => {
    const placeholder = 'test321';
    const wrapper = renderComponent({ placeholder });
    expect(wrapper.text()).to.equal(placeholder);
  });

  it('renders label if placeholder is not set', () => {
    const label = 'test321';
    const wrapper = renderComponent({ label });
    expect(wrapper.text()).to.equal(label);
  });
});
