import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Component as Subsection, styles } from '../../../src/components/subsection/subsection';
import { mockClasses } from '../../../src';

describe('<Subsection />', () => {
  const classes = mockClasses(styles);
  const defaultProps = { classes, title: () => <span>Title</span> };

  it('should have the class root', () => {
    const wrapper = shallow(<Subsection {...defaultProps} />);

    expect(wrapper.hasClass(classes.root)).to.equal(true);
  });

  it('should change toggled state when toggled prop is changed', () => {
    const wrapper = shallow(<Subsection {...defaultProps} />);
    const before = wrapper.state('toggled');

    wrapper.setProps({ toggled: !before });

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
    const chevron = wrapper.find('.chevron');

    expect(chevron.length).to.equal(0);
  });

  it('has instance property onDesktop set to true when matchMedia returns true', () => {
    const matchMedia = () => ({ matches: true });
    const wrapper = shallow(<Subsection {...defaultProps} matchMedia={matchMedia} />);

    expect(wrapper.instance().onDesktop).to.equal(true);
  });
});
