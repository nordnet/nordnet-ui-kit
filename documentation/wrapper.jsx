import React, { PropTypes } from 'react';
import { ThemeProvider } from '../';

export default function Wrapper({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
