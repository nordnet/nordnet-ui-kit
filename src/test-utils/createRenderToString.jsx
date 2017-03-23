import React from 'react';
import { renderToString } from 'react-dom/server';
import { ThemeProvider } from '../styles';

export default function createRenderToString() {
  const renderToStringWithContext = function renderToStringWithContext(node) {
    return renderToString(
      <ThemeProvider>
        {node}
      </ThemeProvider>,
    );
  };

  return renderToStringWithContext;
}
