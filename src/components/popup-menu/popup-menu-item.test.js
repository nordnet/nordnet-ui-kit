import React from 'react';
import { shallow } from 'enzyme';
import { mockClasses } from '../../';
import { Component as PopupMenuItem, styles } from './popup-menu-item';

describe('<PopupMenuItem />', () => {
  const classes = mockClasses(styles);
  test('renders correct nodes for items', () => {
    const divNode = shallow(
      <PopupMenuItem classes={classes} node={'div'}>
        Content
      </PopupMenuItem>,
    );
    expect(
      divNode
        .find('span')
        .at(0)
        .childAt(0)
        .type(),
    ).toBe('div');

    const defaultNode = shallow(<PopupMenuItem classes={classes}>Content</PopupMenuItem>);
    expect(
      defaultNode
        .find('span')
        .at(0)
        .childAt(0)
        .type(),
    ).toBe('button');

    const spanNode = shallow(
      <PopupMenuItem classes={classes} node={'span'}>
        Content
      </PopupMenuItem>,
    );
    expect(
      spanNode
        .find('span')
        .at(0)
        .childAt(0)
        .type(),
    ).toBe('span');
  });
});
