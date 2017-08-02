import 'babel-polyfill';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'react-jss';
import { ThemeProvider as UiThemeProvider, theme } from '../src'

export default function Wrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <UiThemeProvider style={{ padding: 10 }} theme={theme}>
        {children}
      </UiThemeProvider>
    </ThemeProvider>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
