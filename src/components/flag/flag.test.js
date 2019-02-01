import React from 'react';
import { shallow } from 'enzyme';
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
  test(`should be able to style size`, () => {
    const size = 50;
    const expectedWidth = size;
    const expectedHeight = size * 0.75;
    const component = renderFlag({ size, hideBorder: true });
    const flagComponent = component.children().first();
    expect(flagComponent.prop('style').width).toBe(expectedWidth);
    expect(flagComponent.prop('style').height).toBe(expectedHeight);
  });

  test('should have the class "flag"', () => {
    const component = renderFlag();
    const flagComponent = component.children().first();
    expect(component.hasClass(classes.container)).toBe(true);
    expect(flagComponent.hasClass('flag')).toBe(true);
    expect(flagComponent.hasClass(classes.flagStyle)).toBe(true);
    expect(flagComponent.hasClass(classes.roundFlagStyle)).toBe(false);
  });

  test('should add roundClass if round prop provided', () => {
    const newElement = renderFlag({ round: true });
    expect(newElement.hasClass(classes.roundFlagContainer)).toBe(true);
  });

  test('should be possible to show combined flag for currencies', () => {
    const currencyElement = renderFlag({ countryCode: 'us', secondaryCountryCode: 'se' });
    expect(currencyElement.html()).not.toBeNull();
  });
});
