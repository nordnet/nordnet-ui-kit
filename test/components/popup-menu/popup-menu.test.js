import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../src';
import { Component as PopupMenu, styles } from '../../../src/components/popup-menu/popup-menu';
import { Component as PopupMenuItem, styles as itemStyles } from '../../../src/components/popup-menu/popup-menu-item';
import PopupMenuList from '../../../src/components/popup-menu/popup-menu-list';

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
});
