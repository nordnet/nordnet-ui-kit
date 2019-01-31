import '@babel/polyfill';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'react-jss';
import { theme } from '../src';

export default function Wrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
