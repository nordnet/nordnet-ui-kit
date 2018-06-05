import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { mockClasses } from '../../../src';
import { Component as Tooltip, styles } from '../../../src/components/tooltip/tooltip';

describe('<Tooltip />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Tooltip classes={classes} content="Lorem ipsum dolor sit amet." />);
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

  it('should not display tooltip when clicked and sticky is false', () => {
    wrapper.setProps({ sticky: false });
    wrapper.find(`.${classes.container}`).simulate('click');
    expect(wrapper.state('toggled')).to.equal(false);
  });

  it('should display tooltip when clicked and sticky is true', () => {
    wrapper.setProps({ sticky: true });
    wrapper.find(`.${classes.container}`).simulate('click');
    expect(wrapper.state('toggled')).to.equal(true);
  });

  it('should have fixedWidth', () => {
    wrapper = shallow(<Tooltip classes={classes} fixedWidth={345} content="Lorem ipsum dolor sit amet." />);
    wrapper.find(`.${classes.container}`).simulate('mouseEnter');
    expect(wrapper.find(`.${classes.popupFixed}`).prop('style')).to.have.property('width', 345);
  });

  it('should set className to above', () => {
    wrapper = shallow(<Tooltip classes={classes} content="Lorem ipsum dolor sit amet." placement={'above'} />);
    wrapper.find(`.${classes.container}`).simulate('mouseEnter');
    expect(wrapper.find(`.${classes.popup}`).hasClass('above')).to.equal(true);
  });

  it('should set className to left', () => {
    wrapper = shallow(<Tooltip classes={classes} content="Lorem ipsum dolor sit amet." placement={'left'} />);
    wrapper.find(`.${classes.container}`).simulate('mouseEnter');
    expect(wrapper.find(`.${classes.popup}`).hasClass('left')).to.equal(true);
  });

  it('should set placement to below if none is given', () => {
    wrapper = shallow(<Tooltip classes={classes} content="Lorem ipsum dolor sit amet." />);
    wrapper.find(`.${classes.container}`).simulate('mouseEnter');
    expect(wrapper.find(`.${classes.popup}`).hasClass('below')).to.equal(true);
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
        <Tooltip classes={classes} content={'abc'}>
          <div id="child">child</div>
        </Tooltip>,
        target,
      );
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
      component.find(`.${classes.container}`).simulate('click');
      document.getElementById('app').click();
      expect(component.state('toggled')).to.equal(false);
    });

    it('should not untoggle tooltip when clicked inside', () => {
      component.find(`.${classes.container}`).simulate('click');
      component.find(`.${classes.popupContent}`).simulate('click');
      expect(component.state('toggled')).to.equal(true);
    });
  });
});
