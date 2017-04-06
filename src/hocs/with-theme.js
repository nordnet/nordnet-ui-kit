import { PropTypes } from 'react';
import getContext from 'recompose/getContext';

const withTheme = getContext({
  theme: PropTypes.object.isRequired,
});

export default withTheme;
