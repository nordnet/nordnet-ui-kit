import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Component as Subsection, styles } from '../../../src/components/subsection/subsection';
import { mockClasses, Icon } from '../../../src';

describe('<Subsection />', () => {
  const classes = mockClasses(styles);
  const defaultProps = { classes, title: () => <span>Title</span>, theme: { transitions: { duration: { shorter: 200 } } } };

  let clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  it('should have the class root', () => {
    const wrapper = shallow(<Subsection {...defaultProps} />);

    expect(wrapper.hasClass(classes.root)).to.equal(true);
  });

  it('should render two custom icons', () => {
    const wrapper = shallow(<Subsection icon={Icon.Trash} {...defaultProps} />);

    expect(wrapper.find(Icon.Trash)).to.have.length(2);
  });

  it('should render one custom icon with class desktopOnly', () => {
    const wrapper = shallow(<Subsection icon={Icon.Trash} {...defaultProps} />);

    expect(wrapper.find(`.${classes.icon}.${classes.desktopOnly}`)).to.have.length(1);
  });

  it('should render one custom icon with class mobileOnly', () => {
    const wrapper = shallow(<Subsection icon={Icon.Trash} {...defaultProps} />);

    expect(wrapper.find(`.${classes.icon}.${classes.mobileOnly}`)).to.have.length(1);
  });

  it('should set toggleActive while animating when toggled prop is changed', () => {
    const wrapper = shallow(<Subsection {...defaultProps} />);
    wrapper.setProps({ toggled: true });

    const toggleActive = wrapper.state('toggleActive');

    expect(toggleActive).to.equal(true);
  });

  it('should unset toggleActive when animation is complete after toggled prop is changed', () => {
    const wrapper = shallow(<Subsection {...defaultProps} />);
    const before = wrapper.state('toggleActive');
    wrapper.setProps({ toggled: true });

    clock.tick(500);
    const after = wrapper.state('toggleActive');

    expect(before).to.equal(false);
    expect(after).to.equal(false);
  });

  it('should change toggled state when toggled prop is changed', () => {
    const wrapper = shallow(<Subsection {...defaultProps} />);
    const before = wrapper.state('toggled');

    wrapper.setProps({ toggled: !before });

    clock.tick(500);
    const after = wrapper.state('toggled');
    expect(after).to.not.equal(before);
  });

  it('should not change toggled state when toggled prop is same', () => {
    const wrapper = shallow(<Subsection {...defaultProps} />);
    const before = wrapper.state('toggled');

    wrapper.setProps({ toggled: before });

    const after = wrapper.state('toggled');

    expect(after).to.equal(before);
  });

  it('hides the chevron when loading is true', () => {
    const wrapper = shallow(<Subsection {...defaultProps} loading />);
    const chevron = wrapper.find(`.${classes.chevron}`);

    expect(chevron.length).to.equal(0);
  });
});
