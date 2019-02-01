import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Component as CurrencyFlag } from './currency-flag';
import styles from './styles';
import { mockClasses } from '../../..';

const classes = mockClasses(styles);
const shallowComponent = props =>
  shallow(<CurrencyFlag classes={classes} countryCode="se" {...props} />);

describe('<CurrencyFlag />', () => {
  it(`should have common and size classes`, () => {
    const wrapper = shallowComponent();

    expect(wrapper.hasClass('common')).to.equal(true);
    expect(wrapper.hasClass('sm')).to.equal(true);
  });

  it(`should have rounded class`, () => {
    const wrapper = shallowComponent({ round: true, size: 'lg' });

    expect(wrapper.hasClass('roundedLG')).to.equal(true);
  });
});
