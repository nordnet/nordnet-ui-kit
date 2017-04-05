import { PropTypes } from 'react';
import withContext from 'recompose/withContext';

function createThemeProvider(theme, child) {
  return withContext(
    { theme: PropTypes.object.isRequired },
    () => ({ theme }),
  )(child);
}

export default createThemeProvider;
