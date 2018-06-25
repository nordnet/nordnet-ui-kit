import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../src';
import { Component as PopupMenuItem, styles } from '../../../src/components/popup-menu/popup-menu-item';

describe('<PopupMenuItem />', () => {
  const classes = mockClasses(styles);
  it('renders correct nodes for items', () => {
    const divNode = shallow(
      <PopupMenuItem classes={classes} node={'div'}>
        Content
      </PopupMenuItem>,
    );
    expect(
      divNode
        .find('li')
        .at(0)
        .childAt(0)
        .type(),
    ).to.equals('div');

    const defaultNode = shallow(<PopupMenuItem classes={classes}>Content</PopupMenuItem>);
    expect(
      defaultNode
        .find('li')
        .at(0)
        .childAt(0)
        .type(),
    ).to.equals('button');

    const spanNode = shallow(
      <PopupMenuItem classes={classes} node={'span'}>
        Content
      </PopupMenuItem>,
    );
    expect(
      spanNode
        .find('li')
        .at(0)
        .childAt(0)
        .type(),
    ).to.equals('span');
  });
});
