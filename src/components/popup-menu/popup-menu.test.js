import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { mockClasses } from '../../';
import { Component as PopupMenu, styles } from './popup-menu';
import { Component as PopupMenuItem, styles as itemStyles } from './popup-menu-item';
import PopupMenuList from './popup-menu-list';
import keyCodes from './keyCodes';

// for expect(...).to.be.true calls
/* eslint-disable no-unused-expressions */

describe('<PopupMenu />', () => {
  const classes = mockClasses(styles);
  const itemClasses = mockClasses(itemStyles);
  let wrapper;

  test('should render <span> by default', () => {
    wrapper = shallow(
      <PopupMenu classes={classes}>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );
    expect(wrapper.type()).toBe('span');
  });

  test('should render a button and a PopupMenuList as its children', () => {
    wrapper = shallow(
      <PopupMenu classes={classes}>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );

    expect(wrapper.find(`button.${classes.menuButton}`)).toHaveLength(1);
    expect(wrapper.find(PopupMenuList)).toHaveLength(1);
  });

  test('renders correct amount of PopupMenuItems', () => {
    wrapper = shallow(
      <PopupMenu classes={classes}>
        <PopupMenuItem classes={itemClasses} />
        <PopupMenuItem classes={itemClasses} />
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );
    expect(wrapper.find('PopupMenuItem')).toHaveLength(3);
  });

  test('should not be focused by default', () => {
    wrapper = shallow(
      <PopupMenu classes={classes}>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );

    expect(wrapper.state('hasFocus')).toBe(false);
  });

  test('should set hasFocus to true on toggle button focus', () => {
    wrapper = shallow(
      <PopupMenu classes={classes}>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );

    wrapper.find(`button.${classes.menuButton}`).simulate('focus');
    expect(wrapper.state('hasFocus')).toBe(true);
  });

  test('should set hasFocus to false on toggle button blur', () => {
    wrapper = shallow(
      <PopupMenu classes={classes}>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );

    wrapper.find(`button.${classes.menuButton}`).simulate('focus');
    wrapper.find(`button.${classes.menuButton}`).simulate('blur');

    expect(wrapper.state('hasFocus')).toBe(false);
  });

  test('should focus first list element and prevent default on arrow down', () => {
    wrapper = shallow(
      <PopupMenu classes={classes}>
        <PopupMenuItem classes={itemClasses} />
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );
    const focus = sinon.spy();
    const preventDefault = sinon.spy();
    wrapper.instance().firstListElement = { focus };
    wrapper.find(`button.${classes.menuButton}`).simulate('focus');
    wrapper.find(`button.${classes.menuButton}`).simulate('click');
    wrapper
      .find(`button.${classes.menuButton}`)
      .simulate('keyDown', { preventDefault, keyCode: keyCodes.ARROW_DOWN });

    expect(focus.calledOnce).toBe(true);
    expect(preventDefault.calledOnce).toBe(true);
  });

  test('should toggle on esc press', () => {
    const onToggle = sinon.spy();
    wrapper = shallow(
      <PopupMenu classes={classes} onToggle={onToggle}>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );

    wrapper.find(`button.${classes.menuButton}`).simulate('click');
    wrapper.find(`button.${classes.menuButton}`).simulate('keyDown', { keyCode: keyCodes.ESC });

    // called once for the click open and once for the ESC
    expect(onToggle.calledTwice).toBe(true);
  });

  test('should take focus when PopupMenuList yields focus', () => {
    wrapper = shallow(
      <PopupMenu classes={classes}>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );

    const focus = sinon.spy();
    wrapper.instance().buttonElement = { focus };
    const yieldFocusCallback = wrapper.find(PopupMenuList).prop('yieldFocus');
    yieldFocusCallback();

    expect(focus.calledOnce).toBe(true);
  });
});
