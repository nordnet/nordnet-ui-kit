import { PropTypes } from 'react';
import { create as createJss } from 'jss';
import { createStyleManager } from 'jss-theme-reactor/styleManager';
import jssPreset from 'jss-preset-default';
import withContext from 'recompose/withContext';

function createThemeProvider(theme, child) {
  return withContext(
    {
      theme: PropTypes.object.isRequired,
      styleManager: PropTypes.object.isRequired, // TODO, remove when nobody uses styleManager anymore
    },
    () => ({
      theme,
      styleManager: createStyleManager({ // TODO, remove when nobody uses styleManager anymore
        theme,
        jss: createJss(jssPreset()),
      }),
    }),
  )(child);
}

export default createThemeProvider;
