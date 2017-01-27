import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Tooltip from '../../../src/components/tooltip/tooltip';

describe('<Tooltip />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Tooltip content="Lorem ipsum dolor sit amet." />);
  });

  it('should render <div> as container', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should not show the tooltip as default', () => {
    expect(wrapper.state('hover')).to.equal(false);
    expect(wrapper.state('toggled')).to.equal(false);
  });

  it('should show the tooltip when hovered', () => {
    wrapper.find('.tooltip-container').simulate('mouseEnter');
    expect(wrapper.state('hover')).to.equal(true);
    wrapper.find('.tooltip-container').simulate('mouseLeave');
    expect(wrapper.state('hover')).to.equal(false);
  });

  it('should toggle the tooltip when clicked', () => {
    wrapper.find('.tooltip-container').simulate('click');
    expect(wrapper.state('toggled')).to.equal(true);
  });

  describe('click outside functionality', () => {
    const target = { attachTo: document.getElementById('app') };
    let component;
    let sandbox;
    let addEventSpy;
    let removeEventSpy;
    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      addEventSpy = sandbox.spy(document, 'addEventListener');
      removeEventSpy = sandbox.spy(document, 'removeEventListener');
      component = mount(
        <Tooltip content={ 'abc' }>
          <div id="child">child</div>
        </Tooltip>,
        target);
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should subscribe to click event on mount', () => {
      expect(addEventSpy.calledWith('click', component.instance().handleClick)).to.equal(true);
    });

    it('should unsubscribe from click events on unmount', () => {
      const handleClick = component.instance().handleClick;
      component.unmount();
      expect(removeEventSpy.calledWith('click', handleClick)).to.equal(true);
    });

    it('should untoggle tooltip when clicked outside', () => {
      component.find('.tooltip-container').simulate('click');
      document.getElementById('app').click();
      expect(component.state('toggled')).to.equal(false);
    });

    it('should not untoggle tooltip when clicked inside', () => {
      component.find('.tooltip-container').simulate('click');
      component.find('.tooltip-popup__content').simulate('click');
      expect(component.state('toggled')).to.equal(true);
    });
  });
});
