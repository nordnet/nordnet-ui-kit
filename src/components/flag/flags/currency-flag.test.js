import React from 'react';
import { shallow } from 'enzyme';
import { Component as CurrencyFlag } from './currency-flag';
import styles from './styles';
import { mockClasses } from '../../..';

const classes = mockClasses(styles);
const shallowComponent = props =>
  shallow(<CurrencyFlag classes={classes} countryCode="se" {...props} />);

describe('<CurrencyFlag />', () => {
  test(`should have common and size classes`, () => {
    const wrapper = shallowComponent();

    expect(wrapper.hasClass('common')).toBe(true);
    expect(wrapper.hasClass('sm')).toBe(true);
  });

  test(`should have rounded class`, () => {
    const wrapper = shallowComponent({ round: true, size: 'lg' });

    expect(wrapper.hasClass('roundedLG')).toBe(true);
  });
});
