import color from './color';
import { createPalette } from './palette';
import { createTheme } from '.';

describe('theme', () => {
  test('should expose a createTheme function', () => {
    expect(typeof createTheme).toBe('function');
  });

  describe('createTheme', () => {
    test('should have a palette', () => {
      const theme = createTheme();
      expect(theme.palette).toBeDefined(); // eslint-disable-line no-unused-expressions
    });

    test('should be possible to override the palette', () => {
      const theme = createTheme({
        palette: createPalette({ primary: color.gray }),
      });

      expect(theme.palette.primary).toBe(color.gray);
    });
  });
});
