import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow as enzymeShallow, mount as enzymeMount } from 'enzyme';
import { createShallow, createMount } from '../../../src/test-utils';
import Tooltip from '../../../src/components/tooltip/tooltip';
import TooltipStyles from '../../../src/components/tooltip/tooltip-styles';

describe('<Tooltip />', () => {
  const shallow = createShallow(enzymeShallow);
  const mount = createMount(enzymeMount);
  const classes = shallow.context.styleManager.render(TooltipStyles);
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
    wrapper.find(`.${classes.tooltip}`).simulate('mouseEnter');
    expect(wrapper.state('hover')).to.equal(true);
    wrapper.find(`.${classes.tooltip}`).simulate('mouseLeave');
    expect(wrapper.state('hover')).to.equal(false);
  });

  it('should toggle the tooltip when clicked', () => {
    wrapper.find(`.${classes.container}`).simulate('click');
    expect(wrapper.state('toggled')).to.equal(true);
  });

  it('should have fixedWidth', () => {
    wrapper = shallow(
      <Tooltip content="Lorem ipsum dolor sit amet." fixedWidth={123} />,
    );
    expect(wrapper.find(`.${classes.popup}`).props().style.width).to.equal(123);
  });

  it('should set className to above', () => {
    wrapper = shallow(
      <Tooltip content="Lorem ipsum dolor sit amet." placement={'above'} />,
    );
    wrapper.find(`.${classes.container}`).simulate('mouseEnter');
    expect(wrapper.find(`.${classes.popup}`).hasClass('above')).to.equal(true);
  });

  it('should set className to left', () => {
    wrapper = shallow(
      <Tooltip content="Lorem ipsum dolor sit amet." placement={'left'} />,
    );
    wrapper.find(`.${classes.container}`).simulate('mouseEnter');
    expect(wrapper.find(`.${classes.popup}`).hasClass('left')).to.equal(true);
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
        <Tooltip content={'abc'}>
          <div id="child">child</div>
        </Tooltip>,
        target,
      );
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should subscribe to click event on mount', () => {
      expect(
        addEventSpy.calledWith('click', component.instance().handleClick),
      ).to.equal(true);
    });

    it('should unsubscribe from click events on unmount', () => {
      const handleClick = component.instance().handleClick;
      component.unmount();
      expect(removeEventSpy.calledWith('click', handleClick)).to.equal(true);
    });

    it('should untoggle tooltip when clicked outside', () => {
      component.find(`.${classes.container}`).simulate('click');
      document.getElementById('app').click();
      expect(component.state('toggled')).to.equal(false);
    });

    it('should not untoggle tooltip when clicked inside', () => {
      component.find(`.${classes.container}`).simulate('click');
      component.find('.content').simulate('click');
      expect(component.state('toggled')).to.equal(true);
    });
  });
});
