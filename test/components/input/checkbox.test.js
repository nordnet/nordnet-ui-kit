import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Checkbox from '../../../src/components/input/checkbox';

const renderComponent = props => shallow(<Checkbox {...props} />);

describe('<Checkbox />', () => {
  it('has class checkbox', () => {
    const wrapper = renderComponent();
    expect(wrapper.hasClass('checkbox')).to.equal(true);
  });

  it('has class checkbox--is-checked when checked is true', () => {
    const wrapper = renderComponent({ checked: true });
    expect(wrapper.hasClass('checkbox--is-checked')).to.equal(true);
  });

  it('has class checkbox--is-disabled when disabled is true', () => {
    const wrapper = renderComponent({ disabled: true });
    expect(wrapper.hasClass('checkbox--is-disabled')).to.equal(true);
  });

  it('renders checkmark when checked is true', () => {
    const wrapper = renderComponent({ checked: true });
    expect(wrapper.find('Checkmark')).to.have.length(1);
  });

  it('renders no checkmark when checked is false', () => {
    const wrapper = renderComponent({ checked: false });
    expect(wrapper.find('Checkmark')).to.have.length(0);
  });
});
