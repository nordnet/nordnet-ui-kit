import { expect } from 'chai';
import realStyles from '../../../src/components/progress-bar/progress-bar-styles';
import { createTheme } from '../../../src/styles';

describe('progress-bar-styles', () => {
  const themedRealStyle = realStyles(createTheme());

  ['xs', 'sm', 'md', 'lg'].forEach(size => {
    it(`should be able to style size ${size}`, () => {
      expect(themedRealStyle.progressBar.margin({ size })).to.be.a('number');

      ['borderWidth', 'fontSize', 'fontWeight', 'height', 'margin', 'width'].forEach(dynamicProp => {
        expect(themedRealStyle.progressStep[dynamicProp]({ size })).to.be.a('number');
      });
    });
  });
});
