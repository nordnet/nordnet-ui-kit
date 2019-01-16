import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Component as CurrencyFlag } from '../../../src/components/flag/flags/currency-flag';
import styles from '../../../src/components/flag/flags/styles';
import { mockClasses } from '../../../src/';

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
