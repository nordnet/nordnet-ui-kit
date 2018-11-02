import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Component as Flag, styles } from '../../../src/components/flag/flag-deprecated';
import { mockClasses } from '../../../src/';
import { createTheme } from '../../../src/styles';

describe('<Flag />', () => {
  const classes = mockClasses(styles);
  const themedRealStyle = styles(createTheme());
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Flag countryCode="se" classes={classes} />);
  });

  it(`should be able to style size`, () => {
    expect(themedRealStyle.flagStyle.width({ size: 50 })).to.equal(50);
    expect(themedRealStyle.flagStyle.height({ size: 50 })).to.equal(38);

    expect(themedRealStyle.roundFlagContainer.width({ size: 50 })).to.equal(50 * 0.75);
    expect(themedRealStyle.roundFlagContainer.height({ size: 50 })).to.equal(50 * 0.75);
  });

  it('should have the class "flag"', () => {
    const flagComponent = wrapper.children().first();
    expect(wrapper.hasClass('container')).to.equal(true);
    expect(flagComponent.hasClass('flag')).to.equal(true);
    expect(flagComponent.hasClass('flagStyle')).to.equal(true);
    expect(flagComponent.hasClass('roundFlagStyle')).to.equal(false);
  });

  it('should add roundClass if round prop provided', () => {
    const newElement = shallow(<Flag countryCode="se" classes={classes} round />);
    expect(newElement.hasClass('roundFlagContainer')).to.equal(true);
  });

  it('should be possible to show combined flag for currencies', () => {
    const currencyElement = shallow(<Flag countryCode="us" secondaryCountryCode="se" classes={classes} />);
    expect(currencyElement.html()).to.not.equal(null);
  });
});
