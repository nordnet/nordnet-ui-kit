import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { mockClasses } from '../../';
import { Component as Tooltip, styles } from './tooltip';

describe('<Tooltip />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Tooltip classes={classes} content="Lorem ipsum dolor sit amet." />);
  });

  test('should render <div> as container', () => {
    expect(wrapper.type()).toBe('div');
  });

  test('should not show the tooltip as default', () => {
    expect(wrapper.state('hover')).toBe(false);
    expect(wrapper.state('toggled')).toBe(false);
  });

  test('should show the tooltip when hovered', () => {
    wrapper.find(`.${classes.tooltip}`).simulate('mouseEnter');
    expect(wrapper.state('hover')).toBe(true);
    wrapper.find(`.${classes.tooltip}`).simulate('mouseLeave');
    expect(wrapper.state('hover')).toBe(false);
  });

  test('should toggle the tooltip when clicked', () => {
    wrapper.find(`.${classes.container}`).simulate('click');
    expect(wrapper.state('toggled')).toBe(true);
  });

  test('should not display tooltip when clicked and sticky is false', () => {
    wrapper.setProps({ sticky: false });
    wrapper.find(`.${classes.container}`).simulate('click');
    expect(wrapper.state('toggled')).toBe(false);
  });

  test('should display tooltip when clicked and sticky is true', () => {
    wrapper.setProps({ sticky: true });
    wrapper.find(`.${classes.container}`).simulate('click');
    expect(wrapper.state('toggled')).toBe(true);
  });

  test('should have fixedWidth', () => {
    wrapper = shallow(
      <Tooltip classes={classes} fixedWidth={345} content="Lorem ipsum dolor sit amet." />,
    );
    wrapper.find(`.${classes.container}`).simulate('mouseEnter');
    expect(wrapper.find(`.${classes.popupFixed}`).prop('style')).toHaveProperty('width', 345);
  });

  test('should set className to above', () => {
    wrapper = shallow(
      <Tooltip classes={classes} content="Lorem ipsum dolor sit amet." placement={'above'} />,
    );
    wrapper.find(`.${classes.container}`).simulate('mouseEnter');
    expect(wrapper.find(`.${classes.popup}`).hasClass('above')).toBe(true);
  });

  test('should set className to left', () => {
    wrapper = shallow(
      <Tooltip classes={classes} content="Lorem ipsum dolor sit amet." placement={'left'} />,
    );
    wrapper.find(`.${classes.container}`).simulate('mouseEnter');
    expect(wrapper.find(`.${classes.popup}`).hasClass('left')).toBe(true);
  });

  test('should set placement to below if none is given', () => {
    wrapper = shallow(<Tooltip classes={classes} content="Lorem ipsum dolor sit amet." />);
    wrapper.find(`.${classes.container}`).simulate('mouseEnter');
    expect(wrapper.find(`.${classes.popup}`).hasClass('below')).toBe(true);
  });

  test('should set desktopOnly', () => {
    wrapper = shallow(
      <Tooltip classes={classes} content="Lorem ipsum dolor sit amet." desktopOnly />,
    );
    wrapper.find(`.${classes.container}`).simulate('mouseEnter');
    expect(wrapper.find(`.${classes.popup}`).hasClass(classes.popupDesktopOnly)).toBe(true);
  });

  describe('click outside functionality', () => {
    const target = { attachTo: document.getElementById('app') };
    let component;
    let sandbox;
    let addEventSpy;
    let removeEventSpy;
    beforeEach(() => {
      sandbox = sinon.createSandbox();
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

    test('should subscribe to click event on mount', () => {
      expect(addEventSpy.calledWith('click', component.instance().handleClick)).toBe(true);
    });

    test('should unsubscribe from click events on unmount', () => {
      const handleClick = component.instance().handleClick;
      component.unmount();
      expect(removeEventSpy.calledWith('click', handleClick)).toBe(true);
    });

    test('should untoggle tooltip when clicked outside', () => {
      component.find(`.${classes.container}`).simulate('click');
      document.getElementById('app').click();
      expect(component.state('toggled')).toBe(false);
    });

    test('should not untoggle tooltip when clicked inside', () => {
      component.find(`.${classes.container}`).simulate('click');
      component.find(`.${classes.popupContent}`).simulate('click');
      expect(component.state('toggled')).toBe(true);
    });
  });
});
