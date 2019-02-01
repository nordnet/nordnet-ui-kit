import realStyles from './progress-bar-styles';
import { createTheme } from '../../styles';

describe('progress-bar-styles', () => {
  const themedRealStyle = realStyles(createTheme());

  ['xs', 'sm', 'md', 'lg'].forEach(size => {
    test(`should be able to style size ${size}`, () => {
      expect(typeof themedRealStyle.progressBar.margin({ size })).toBe('number');

      ['borderWidth', 'fontSize', 'fontWeight', 'height', 'margin', 'width'].forEach(
        dynamicProp => {
          expect(typeof themedRealStyle.progressStep[dynamicProp]({ size })).toBe('number');
        },
      );
    });
  });
});
