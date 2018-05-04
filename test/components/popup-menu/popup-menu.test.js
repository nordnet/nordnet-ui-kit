import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { mockClasses } from '../../../src';
import { Component as PopupMenu, styles } from '../../../src/components/popup-menu/popup-menu';
import { Component as PopupMenuItem, styles as itemStyles } from '../../../src/components/popup-menu/popup-menu-item';

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

  it('renders open is isOpen prop is true', () => {
    wrapper = shallow(
      <PopupMenu classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );
    expect(wrapper.find('PopupMenuItem')).to.have.length(1);
  });

  it('renders correct amount of children', () => {
    wrapper = shallow(
      <PopupMenu classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
        <PopupMenuItem classes={itemClasses} />
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );
    expect(wrapper.find('PopupMenuItem')).to.have.length(3);
  });

  it('closes if open and toggleButton is pressed', () => {
    wrapper = shallow(
      <PopupMenu classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenu>,
    );
    const openLength = wrapper.find('PopupMenuItem').length;
    wrapper.find(`button.${classes.menuButton}`).simulate('click');
    const closedLength = wrapper.find('PopupMenuItem').length;
    expect(openLength).to.not.equal(closedLength);
  });

  it('renders correct nodes for items', () => {
    wrapper = mount(
      <PopupMenu classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} node={'div'}>
          Content
        </PopupMenuItem>
        <PopupMenuItem classes={itemClasses}>Content</PopupMenuItem>
        <PopupMenuItem classes={itemClasses} node={'span'}>
          Content
        </PopupMenuItem>
      </PopupMenu>,
    );
    expect(
      wrapper
        .find('li')
        .at(0)
        .childAt(0)
        .type(),
    ).to.equals('div');
    expect(
      wrapper
        .find('li')
        .at(1)
        .childAt(0)
        .type(),
    ).to.equals('button');
    expect(
      wrapper
        .find('li')
        .at(2)
        .childAt(0)
        .type(),
    ).to.equals('span');
  });
});
