import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Widget from '../../../src/components/widget/widget';

describe('<Widget />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Widget className="class">body</Widget>);
  });

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have class widget', () => {
    expect(wrapper.hasClass('widget')).to.equal(true);
  });

  it('should have additional class if provided', () => {
    expect(wrapper.hasClass('class')).to.equal(true);
  });

  it('should render the children if provided', () => {
    expect(wrapper.find('div.widget__body').childAt(0).text()).to.equal('body');
  });

  it('should not render header if no header is set', () => {
    expect(wrapper.find('div.widget__body--no-header')).to.have.length(1);
  });

  it('should have class widget__body--full-width if full-width is set', () => {
    wrapper.setProps({ fullWidth: true });
    expect(wrapper.find('div.widget__body--full-width')).to.have.length(1);
  });

  describe('if header is set', () => {
    beforeEach(() => {
      wrapper.setProps({ header: 'header' });
    });

    it('should have a header', () => {
      expect(wrapper.find('.widget__heading').childAt(0).text()).to.equal('header');
    });

    it('should not have the widget__body--no-header class', () => {
      expect(wrapper.find('div.widget__body--no-header')).to.have.length(0);
    });
  });
});
