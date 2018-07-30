import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { mockClasses } from '../../../src';
import { Component as PopupMenu, styles } from '../../../src/components/popup-menu/popup-menu';
import { Component as PopupMenuItem, styles as itemStyles } from '../../../src/components/popup-menu/popup-menu-item';
import PopupMenuList from '../../../src/components/popup-menu/popup-menu-list';
import keyCodes from '../../../src/components/popup-menu/keyCodes';

// for expect(...).to.be.true calls
/* eslint-disable no-unused-expressions */

describe('<PopupMenu />', () => {
  const classes = mockClasses(styles);
  const itemClasses = mockClasses(itemStyles);
  let wrapper;

  it('should render <span> by default', () => {
    wrapper = shallow(
      <PopupMenu classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );
    expect(wrapper.type()).to.equal('span');
  });

  it('should render a button and a PopupMenuList as its children', () => {
    wrapper = shallow(
      <PopupMenu classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );
    expect(wrapper.find(`button.${classes.menuButton}`).length).to.equal(1);
    expect(wrapper.find(PopupMenuList).length).to.equal(1);
  });

  it('renders open if isOpen prop is true', () => {
    wrapper = shallow(
      <PopupMenu classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );
    expect(wrapper.find('PopupMenuItem')).to.have.length(1);
  });

  it('renders correct amount of PopupMenuItems', () => {
    wrapper = shallow(
      <PopupMenu classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
        <PopupMenuItem classes={itemClasses} />
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );
    expect(wrapper.find('PopupMenuItem')).to.have.length(3);
  });

  it('should not be focused by default', () => {
    wrapper = shallow(
      <PopupMenu classes={classes}>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );

    expect(wrapper.state('hasFocus')).to.be.false;
  });

  it('should set hasFocus to true on toggle button focus', () => {
    wrapper = shallow(
      <PopupMenu classes={classes}>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );

    wrapper.find(`button.${classes.menuButton}`).simulate('focus');
    expect(wrapper.state('hasFocus')).to.be.true;
  });

  it('should set hasFocus to false on toggle button blur', () => {
    wrapper = shallow(
      <PopupMenu classes={classes}>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );

    wrapper.find(`button.${classes.menuButton}`).simulate('focus');
    wrapper.find(`button.${classes.menuButton}`).simulate('blur');

    expect(wrapper.state('hasFocus')).to.be.false;
  });

  it('should focus first list element and prevent default on arrow down', () => {
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
    wrapper.find(`button.${classes.menuButton}`).simulate('keyDown', { preventDefault, keyCode: keyCodes.ARROW_DOWN });

    expect(focus.calledOnce).to.be.true;
    expect(preventDefault.calledOnce).to.be.true;
  });

  it('should toggle on esc press', () => {
    const onToggle = sinon.spy();
    wrapper = shallow(
      <PopupMenu classes={classes} onToggle={onToggle}>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );

    wrapper.find(`button.${classes.menuButton}`).simulate('click');
    wrapper.find(`button.${classes.menuButton}`).simulate('keyDown', { keyCode: keyCodes.ESC });

    // called once for the click open and once for the ESC
    expect(onToggle.calledTwice).to.be.true;
  });

  it('should take focus when PopupMenuList yields focus', () => {
    wrapper = shallow(
      <PopupMenu classes={classes}>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );

    const focus = sinon.spy();
    wrapper.instance().buttonElement = { focus };
    const yieldFocusCallback = wrapper.find(PopupMenuList).prop('yieldFocus');
    yieldFocusCallback();

    expect(focus.calledOnce).to.be.true;
  });
});
