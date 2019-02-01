import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Component as Subsection, styles } from './subsection';
import { mockClasses, Icon } from '../../';

describe('<Subsection />', () => {
  const classes = mockClasses(styles);
  const defaultProps = {
    classes,
    title: () => <span>Title</span>,
    theme: { transitions: { duration: { shorter: 200 } } },
  };

  let clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  test('should have the class root', () => {
    const wrapper = shallow(<Subsection {...defaultProps} />);

    expect(wrapper.hasClass(classes.root)).toBe(true);
  });

  test('should render two custom icons', () => {
    const wrapper = shallow(<Subsection icon={Icon.Trash} {...defaultProps} />);

    expect(wrapper.find(Icon.Trash)).toHaveLength(2);
  });

  test('should render one custom icon with class desktopOnly', () => {
    const wrapper = shallow(<Subsection icon={Icon.Trash} {...defaultProps} />);

    expect(wrapper.find(`.${classes.icon}.${classes.desktopOnly}`)).toHaveLength(1);
  });

  test('should render one custom icon with class mobileOnly', () => {
    const wrapper = shallow(<Subsection icon={Icon.Trash} {...defaultProps} />);

    expect(wrapper.find(`.${classes.icon}.${classes.mobileOnly}`)).toHaveLength(1);
  });

  test('should set toggleActive while animating when toggled prop is changed', () => {
    const wrapper = shallow(<Subsection {...defaultProps} />);
    wrapper.setProps({ toggled: true });

    const toggleActive = wrapper.state('toggleActive');

    expect(toggleActive).toBe(true);
  });

  test('should unset toggleActive when animation is complete after toggled prop is changed', () => {
    const wrapper = shallow(<Subsection {...defaultProps} />);
    const before = wrapper.state('toggleActive');
    wrapper.setProps({ toggled: true });

    clock.tick(500);
    const after = wrapper.state('toggleActive');

    expect(before).toBe(false);
    expect(after).toBe(false);
  });

  test('should change toggled state when toggled prop is changed', () => {
    const wrapper = shallow(<Subsection {...defaultProps} />);
    const before = wrapper.state('toggled');

    wrapper.setProps({ toggled: !before });

    clock.tick(500);
    const after = wrapper.state('toggled');
    expect(after).not.toBe(before);
  });

  test('should not change toggled state when toggled prop is same', () => {
    const wrapper = shallow(<Subsection {...defaultProps} />);
    const before = wrapper.state('toggled');

    wrapper.setProps({ toggled: before });

    const after = wrapper.state('toggled');

    expect(after).toBe(before);
  });

  test('hides the chevron when loading is true', () => {
    const wrapper = shallow(<Subsection {...defaultProps} loading />);
    const chevron = wrapper.find(`.${classes.chevron}`);

    expect(chevron.length).toBe(0);
  });
});
