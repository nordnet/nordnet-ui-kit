import React from 'react';
import { ThemeProvider } from '../styles';

export default function createRenderToString(renderToString) {
  const renderToStringWithContext = function renderToStringWithContext(node) {
    return renderToString(
      <ThemeProvider>
        {node}
      </ThemeProvider>,
    );
  };

  return renderToStringWithContext;
}
