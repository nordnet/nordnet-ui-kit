import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Logo from '../../../src/components/logo/logo';

describe('<Logo />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it('should render a <span />', () => {
    expect(wrapper.type()).to.equal('span');
  });

  it('should have class logo', () => {
    expect(wrapper.hasClass('logo')).to.equal(true);
  });

  it('should have class logo--default if no type is specified', () => {
    expect(wrapper.hasClass('logo--default')).to.equal(true);
  });

  it('should have type default if no type is specified', () => {
    expect(wrapper.find('span[type="default"]')).to.have.length(1);
  });

  it('should have class logo--something if type "something" is specified', () => {
    wrapper.setProps({ type: 'something' });
    expect(wrapper.hasClass('logo--something')).to.equal(true);
  });

  it('should have type "something" if type "something" is specified', () => {
    wrapper.setProps({ type: 'something' });
    expect(wrapper.find('span[type="something"]')).to.have.length(1);
  });
});
