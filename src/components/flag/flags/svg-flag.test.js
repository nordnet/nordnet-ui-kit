import React from 'react';
import { shallow } from 'enzyme';
import { Component as SvgFlag } from './svg-flag';
import styles from './styles';
import { mockClasses } from '../../../';

const classes = mockClasses(styles);
const shallowComponent = props =>
  shallow(<SvgFlag classes={classes} countryCode="se" {...props} />);

describe('<SvgFlag />', () => {
  test(`has common class`, () => {
    const wrapper = shallowComponent()
      .children()
      .first();

    expect(wrapper.hasClass('common')).toBe(true);
  });

  test('renders small flag by default', () => {
    const wrapper = shallowComponent()
      .children()
      .first();

    expect(wrapper.hasClass('sm')).toBe(true);
  });

  test(`rounded container has roundedContainer classes`, () => {
    const wrapper = shallowComponent({ round: true, size: 'md' });

    expect(wrapper.hasClass('roundedContainer')).toBe(true);
    expect(wrapper.hasClass('roundedContainerMD')).toBe(true);
  });

  test(`rounded medium flag has roundedMD class`, () => {
    const wrapper = shallowComponent({ round: true, size: 'md' });
    const Flag = wrapper.children().first();

    expect(Flag.hasClass('roundedMD')).toBe(true);
  });
});
