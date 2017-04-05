import { createThemeProvider, theme } from './index';

function ThemeProvider({ children }) {
  return createThemeProvider(theme, children);
}

export default ThemeProvider;
