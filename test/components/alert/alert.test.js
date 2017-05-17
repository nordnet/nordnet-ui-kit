import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import Alert from '../../../src/components/alert';
import AlertStyles from '../../../src/components/alert/alert-styles';

describe('<Alert />', () => {
  const shallow = createShallow(enzymeShallow);
  const classes = shallow.context.styleManager.render(AlertStyles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Alert header="header">body</Alert>);
  });

  it('should render <div> as container', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have class alert', () => {
    expect(wrapper.hasClass(classes.alert)).to.equal(true);
  });

  ['success', 'warning', 'danger'].forEach(modifier => {
    it(`should have class ${classes[modifier]} if modifier is set to ${modifier}`, () => {
      wrapper.setProps({ modifier });
      expect(wrapper.hasClass(`${classes[modifier]}`)).to.equal(true);
    });
  });

  it('should render the header if provided', () => {
    expect(wrapper.find('div.header').childAt(0).text()).to.equal('header');
  });

  it('should render the children if provided', () => {
    expect(wrapper.find(`div.${classes.body}`).childAt(0).text()).to.equal('body');
  });

  it('should close if the dismiss button is clicked', () => {
    wrapper.find(`button.${classes.close}`).simulate('click');
    expect(wrapper.html()).to.equal(null);
  });

  it('should not render the dismiss button if dismissable is set to false', () => {
    wrapper.setProps({ dismissable: false });
    expect(wrapper.find(`button.${classes.close}`)).to.have.length(0);
  });
});
