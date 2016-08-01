import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Alert from '../../../src/components/alert/alert';

describe('<Alert />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Alert header="header">body</Alert>);
  });

  it('should render <div> as container', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have class alert', () => {
    expect(wrapper.hasClass('alert')).to.equal(true);
  });

  ['success', 'warning', 'danger'].forEach(modifier => {
    it(`should have class alert--${modifier} if modifier is set to ${modifier}`, () => {
      wrapper.setProps({ modifier });
      expect(wrapper.hasClass(`alert--${modifier}`)).to.equal(true);
    });
  });

  it('should render the header if provided', () => {
    expect(wrapper.find('div.alert__header').childAt(0).text()).to.equal('header');
  });

  it('should render the children if provided', () => {
    expect(wrapper.find('div.alert__body').childAt(0).text()).to.equal('body');
  });

  it('should close if the dismiss button is clicked', () => {
    wrapper.find('span.alert__close').simulate('click');
    expect(wrapper.html()).to.equal(null);
  });

  it('should not render the dismiss button if dismissable is set to false', () => {
    wrapper.setProps({ dismissable: false });
    expect(wrapper.find('span.alert__close')).to.have.length(0);
  });
});
