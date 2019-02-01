import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { mockClasses } from '../../';
import { styles } from './popup-menu';
import { Component as PopupMenuItem, styles as itemStyles } from './popup-menu-item';
import PopupMenuList from './popup-menu-list';
import keyCodes from './keyCodes';

// for expect(...).to.be.true calls
/* eslint-disable no-unused-expressions */

describe('<PopupMenuList />', () => {
  const classes = mockClasses(styles);
  const itemClasses = mockClasses(itemStyles);

  const props = {
    onBlur: () => {},
    onKeyDown: () => {},
    firstListItemRef: () => {},
    yieldFocus: () => {},
    width: 200,
    'aria-labelledby': 'PopupMenu',
    enter: 100,
    exit: 100,
    maxHeight: 'none',
  };

  test('should not render the list if isOpen is false', () => {
    const wrapper = shallow(
      <PopupMenuList {...props} classes={classes} isOpen={false}>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenuList>,
    );

    expect(wrapper.find(PopupMenuItem)).toHaveLength(0);
  });

  test('should render the list if isOpen is true', () => {
    const wrapper = shallow(
      <PopupMenuList {...props} classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenuList>,
    );

    expect(wrapper.find(PopupMenuItem)).toHaveLength(1);
  });

  test('should update focusIndex if list item is focused', () => {
    const wrapper = shallow(
      <PopupMenuList {...props} classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
        <PopupMenuItem classes={itemClasses} />
      </PopupMenuList>,
    );
    const instance = wrapper.instance();
    instance.listItemElements = [{ focus: () => {} }, { focus: () => {} }];

    expect(instance.focusIndex).toBe(-1);

    wrapper
      .find(PopupMenuItem)
      .first()
      .prop('onFocus')();

    expect(instance.focusIndex).toBe(0);
  });

  test('should focus next item on arrow down', () => {
    const wrapper = shallow(
      <PopupMenuList {...props} classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
        <PopupMenuItem classes={itemClasses} />
      </PopupMenuList>,
    );
    const instance = wrapper.instance();
    instance.listItemElements = [{ focus: () => {} }, { focus: () => {} }];

    wrapper
      .find(PopupMenuItem)
      .first()
      .prop('onFocus')();

    expect(instance.focusIndex).toBe(0);

    instance.onKeyDown({ keyCode: keyCodes.ARROW_DOWN, preventDefault: () => {} });
    expect(instance.focusIndex).toBe(1);
  });

  test('should focus previous item on arrow up', () => {
    const wrapper = shallow(
      <PopupMenuList {...props} classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
        <PopupMenuItem classes={itemClasses} />
      </PopupMenuList>,
    );
    const instance = wrapper.instance();
    instance.listItemElements = [{ focus: () => {} }, { focus: () => {} }];

    wrapper
      .find(PopupMenuItem)
      .last()
      .prop('onFocus')();

    expect(instance.focusIndex).toBe(1);

    instance.onKeyDown({ keyCode: keyCodes.ARROW_UP, preventDefault: () => {} });
    expect(instance.focusIndex).toBe(0);
  });

  test('should wrap to first item on arrow down on last item', () => {
    const wrapper = shallow(
      <PopupMenuList {...props} classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
        <PopupMenuItem classes={itemClasses} />
      </PopupMenuList>,
    );
    const instance = wrapper.instance();
    instance.listItemElements = [{ focus: () => {} }, { focus: () => {} }];

    wrapper
      .find(PopupMenuItem)
      .last()
      .prop('onFocus')();

    expect(instance.focusIndex).toBe(1);

    instance.onKeyDown({ keyCode: keyCodes.ARROW_DOWN, preventDefault: () => {} });
    expect(instance.focusIndex).toBe(0);
  });

  test('should blur item on esc', () => {
    const wrapper = shallow(
      <PopupMenuList {...props} classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
        <PopupMenuItem classes={itemClasses} />
      </PopupMenuList>,
    );
    const instance = wrapper.instance();
    const blur = sinon.spy();
    instance.listItemElements = [{}, { focus: () => {}, blur }];

    wrapper
      .find(PopupMenuItem)
      .last()
      .prop('onFocus')();

    expect(instance.focusIndex).toBe(1);

    instance.onKeyDown({ keyCode: keyCodes.ESC, preventDefault: () => {} });
    expect(blur.calledOnce).toBe(true);
  });

  test('should not add the focus handling props to disabled children', () => {
    const wrapper = shallow(
      <PopupMenuList {...props} classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
        <PopupMenuItem classes={itemClasses} disabled />
        <PopupMenuItem classes={itemClasses} />
      </PopupMenuList>,
    );
    const items = wrapper.find(PopupMenuItem);

    const nonDisabledItems = items.findWhere(
      i => i.prop('listItemRef') && i.prop('onFocus') && i.prop('onKeyDown'),
    );
    const disabledItems = items.findWhere(
      i => !i.prop('listItemRef') && !i.prop('onFocus') && !i.prop('onKeyDown'),
    );
    expect(nonDisabledItems).toHaveLength(2);
    expect(disabledItems).toHaveLength(1);
  });
});
