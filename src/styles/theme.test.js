import { expect } from 'chai';
import color from './color';
import { createPalette } from './palette';
import { createTheme } from '.';

describe('theme', () => {
  it('should expose a createTheme function', () => {
    expect(createTheme).to.be.a('function');
  });

  describe('createTheme', () => {
    it('should have a palette', () => {
      const theme = createTheme();
      expect(theme.palette).to.exist; // eslint-disable-line no-unused-expressions
    });

    it('should be possible to override the palette', () => {
      const theme = createTheme({
        palette: createPalette({ primary: color.gray }),
      });

      expect(theme.palette.primary).to.equal(color.gray);
    });
  });
});
