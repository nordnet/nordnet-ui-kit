import { PropTypes } from 'react';
import withContext from 'recompose/withContext';

const ThemeProvider = withContext(
  { theme: PropTypes.object.isRequired },
  ({ theme }) => ({ theme }),
)(({ children }) => children);

export default ThemeProvider;
