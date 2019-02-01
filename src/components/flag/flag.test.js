import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Component as Flag, styles } from './flag-deprecated';
import { mockClasses } from '../..';
import { createTheme } from '../../styles';

const classes = mockClasses(styles);
const theme = createTheme();
const defaultProps = {
  classes,
  theme,
  countryCode: 'se',
};

const renderFlag = (props = {}) => shallow(<Flag {...defaultProps} {...props} />);

describe('<Flag />', () => {
  it(`should be able to style size`, () => {
    const size = 50;
    const expectedWidth = size;
    const expectedHeight = size * 0.75;
    const component = renderFlag({ size, hideBorder: true });
    const flagComponent = component.children().first();
    expect(flagComponent.prop('style').width).to.equal(expectedWidth);
    expect(flagComponent.prop('style').height).to.equal(expectedHeight);
  });

  it('should have the class "flag"', () => {
    const component = renderFlag();
    const flagComponent = component.children().first();
    expect(component.hasClass(classes.container)).to.equal(true);
    expect(flagComponent.hasClass('flag')).to.equal(true);
    expect(flagComponent.hasClass(classes.flagStyle)).to.equal(true);
    expect(flagComponent.hasClass(classes.roundFlagStyle)).to.equal(false);
  });

  it('should add roundClass if round prop provided', () => {
    const newElement = renderFlag({ round: true });
    expect(newElement.hasClass(classes.roundFlagContainer)).to.equal(true);
  });

  it('should be possible to show combined flag for currencies', () => {
    const currencyElement = renderFlag({ countryCode: 'us', secondaryCountryCode: 'se' });
    expect(currencyElement.html()).to.not.equal(null);
  });
});
