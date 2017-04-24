import React from 'react';
import { mount } from 'enzyme';
import { create as createJss } from 'jss';
import jssPreset from 'jss-preset-default';
import { createStyleManager } from 'jss-theme-reactor/styleManager';
import { expect } from 'chai';
import { ThemeProvider, createTheme } from '../../src/styles';
import Badge from '../../src/components/badge/badge';

describe('ThemeProvider', () => {
  it('should expose createDefaultContext function', () => {
    expect(ThemeProvider.createDefaultContext).to.be.a('function');
  });

  it('should be able to extract styles', () => {
    const theme = createTheme();
    const jss = createJss(jssPreset());
    const styleManager = createStyleManager({ jss, theme });

    const component = mount(
      <ThemeProvider theme={theme} styleManager={styleManager}>
        <Badge modifier="success">
          Badge contents
        </Badge>
      </ThemeProvider>,
    );

    const badgeClasses = component.find('span').prop('className').split(' ');
    const styleSheets = styleManager.sheetsToString();
    badgeClasses.map(className => (
      expect(styleSheets.indexOf(className) > -1).to.equal(true)
    ));
  });

  describe('createDefaultContext', () => {
    it('should return the default theme', () => {
      const { theme } = ThemeProvider.createDefaultContext();
      const expectedTheme = createTheme();

      expect(theme.palette).to.deep.equal(expectedTheme.palette);
      expect(theme.typography).to.deep.equal(expectedTheme.typography);
      expect(theme.mixins.basicBoxSizing).to.deep.equal(expectedTheme.mixins.basicBoxSizing);
      expect(theme.mixins.media.toString()).to.deep.equal(expectedTheme.mixins.media.toString());
      expect(theme.breakpoints).to.deep.equal(expectedTheme.breakpoints);

      expect(theme.transitions.easing).to.deep.equal(expectedTheme.transitions.easing);
      expect(theme.transitions.duration).to.deep.equal(expectedTheme.transitions.duration);
      expect(theme.transitions.create.toString()).to.equal(expectedTheme.transitions.create.toString());
      expect(theme.transitions.getAutoHeightDuration.toString()).to.equal(expectedTheme.transitions.getAutoHeightDuration.toString());
    });

    it('should return a styleManager that exposes a render function', () => {
      const { styleManager } = ThemeProvider.createDefaultContext();
      expect(styleManager).to.be.an('object');
      expect(styleManager.render).to.be.a('function');
    });
  });
});
