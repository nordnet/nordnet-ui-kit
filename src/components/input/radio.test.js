import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Radio from './radio';

const renderComponent = props => shallow(<Radio {...props} />);

describe('<Radio />', () => {
  it('has class radio', () => {
    const wrapper = renderComponent();
    expect(wrapper.hasClass('radio')).to.equal(true);
  });

  it('has class radio--is-checked when checked is true', () => {
    const wrapper = renderComponent({ checked: true });
    expect(wrapper.hasClass('radio--is-checked')).to.equal(true);
  });

  it('has class radio--is-disabled when disabled is true', () => {
    const wrapper = renderComponent({ disabled: true });
    expect(wrapper.hasClass('radio--is-disabled')).to.equal(true);
  });
});
