import { createThemeProvider } from '@iamstarkov/jss-theme-reactor/ThemeProvider';
import { createTheme } from './theme';

// https://github.com/RikardGehlin/jss-theme-reactor/blob/master/src/ThemeProvider.js
export default createThemeProvider(createTheme);
