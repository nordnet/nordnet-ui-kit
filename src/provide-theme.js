import { PropTypes } from 'react';
import withContext from 'recompose/withContext';

function provideTheme(theme, child) {
  return withContext(
    { theme: PropTypes.object.isRequired },
    () => ({ theme }),
  )(child);
}

export default provideTheme;
