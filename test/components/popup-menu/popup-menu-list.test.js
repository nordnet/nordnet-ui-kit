import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { mockClasses } from '../../../src';
import { styles } from '../../../src/components/popup-menu/popup-menu';
import {
  Component as PopupMenuItem,
  styles as itemStyles,
} from '../../../src/components/popup-menu/popup-menu-item';
import PopupMenuList from '../../../src/components/popup-menu/popup-menu-list';
import keyCodes from '../../../src/components/popup-menu/keyCodes';

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

  it('should not render the list if isOpen is false', () => {
    const wrapper = shallow(
      <PopupMenuList {...props} classes={classes} isOpen={false}>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenuList>,
    );

    expect(wrapper.find(PopupMenuItem).length).to.equals(0);
  });

  it('should render the list if isOpen is true', () => {
    const wrapper = shallow(
      <PopupMenuList {...props} classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
      </PopupMenuList>,
    );

    expect(wrapper.find(PopupMenuItem).length).to.equals(1);
  });

  it('should update focusIndex if list item is focused', () => {
    const wrapper = shallow(
      <PopupMenuList {...props} classes={classes} isOpen>
        <PopupMenuItem classes={itemClasses} />
        <PopupMenuItem classes={itemClasses} />
      </PopupMenuList>,
    );
    const instance = wrapper.instance();
    instance.listItemElements = [{ focus: () => {} }, { focus: () => {} }];

    expect(instance.focusIndex).to.equals(-1);

    wrapper
      .find(PopupMenuItem)
      .first()
      .prop('onFocus')();

    expect(instance.focusIndex).to.equals(0);
  });

  it('should focus next item on arrow down', () => {
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

    expect(instance.focusIndex).to.equals(0);

    instance.onKeyDown({ keyCode: keyCodes.ARROW_DOWN, preventDefault: () => {} });
    expect(instance.focusIndex).to.equals(1);
  });

  it('should focus previous item on arrow up', () => {
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

    expect(instance.focusIndex).to.equals(1);

    instance.onKeyDown({ keyCode: keyCodes.ARROW_UP, preventDefault: () => {} });
    expect(instance.focusIndex).to.equals(0);
  });

  it('should wrap to first item on arrow down on last item', () => {
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

    expect(instance.focusIndex).to.equals(1);

    instance.onKeyDown({ keyCode: keyCodes.ARROW_DOWN, preventDefault: () => {} });
    expect(instance.focusIndex).to.equals(0);
  });

  it('should blur item on esc', () => {
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

    expect(instance.focusIndex).to.equals(1);

    instance.onKeyDown({ keyCode: keyCodes.ESC, preventDefault: () => {} });
    expect(blur.calledOnce).to.be.true;
  });

  it('should not add the focus handling props to disabled children', () => {
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
    expect(nonDisabledItems.length).to.equals(2);
    expect(disabledItems.length).to.equals(1);
  });
});
