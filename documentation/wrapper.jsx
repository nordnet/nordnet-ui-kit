import React, { PropTypes } from 'react';
import ThemeProvider from '../src/styles/ThemeProvider';
import { createPalette } from '../src/styles/palette';
import { createTheme } from '../src/styles/theme';


export default function Wrapper({ children }) {
  const palette = createPalette({ type: 'light' });
  const theme = createTheme({ palette });

  return (
    <ThemeProvider style={{ padding: '1rem' }} theme={theme}>
      {children}
    </ThemeProvider>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
