import { stripIndent } from 'common-tags';
import React from 'react';
import { ThemeProvider } from '../styles';

export default function createRenderToString(renderToString) {
  const renderToStringWithContext = function renderToStringWithContext(node) {
    // eslint-disable-next-line no-console
    console.warn(stripIndent`
      nordnet-ui-kit's \`createRenderToString\` is deprecated and will be removed in major release.
      Please use default renderToString.
      See more https://github.com/nordnet/nordnet-ui-kit/releases/tag/v1.7.0
    `);
    return renderToString(
      <ThemeProvider>
        {node}
      </ThemeProvider>,
    );
  };

  return renderToStringWithContext;
}
