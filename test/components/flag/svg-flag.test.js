import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Component as SvgFlag } from '../../../src/components/flag/flags/svg-flag';
import styles from '../../../src/components/flag/flags/styles';
import { mockClasses } from '../../../src/';

const classes = mockClasses(styles);
const shallowComponent = props => shallow(<SvgFlag classes={classes} countryCode="se" {...props} />);

describe('<SvgFlag />', () => {
  it(`has common class`, () => {
    const wrapper = shallowComponent()
      .children()
      .first();

    expect(wrapper.hasClass('common')).to.equal(true);
  });

  it('renders small flag by default', () => {
    const wrapper = shallowComponent()
      .children()
      .first();

    expect(wrapper.hasClass('sm')).to.equal(true);
  });

  it(`rounded container has roundedContainer classes`, () => {
    const wrapper = shallowComponent({ round: true, size: 'md' });

    expect(wrapper.hasClass('roundedContainer')).to.equal(true);
    expect(wrapper.hasClass('roundedContainerMD')).to.equal(true);
  });

  it(`rounded medium flag has roundedMD class`, () => {
    const wrapper = shallowComponent({ round: true, size: 'md' });
    const Flag = wrapper.children().first();

    expect(Flag.hasClass('roundedMD')).to.equal(true);
  });
});
