import theme from '../theme';
import createThemeProvider from './create-theme-provider';

function ThemeProvider({ children }) {
  return createThemeProvider(theme, children);
}

export default ThemeProvider;
