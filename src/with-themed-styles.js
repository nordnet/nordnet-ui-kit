import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import { withTheme, injectSheet } from './';

// return withTheme(injectSheet(styles)(component));
function withThemedStyles(styles, component) {
  const name = component.displayName || component.name;
  return compose(
    setDisplayName(`${name}-styled`),
    withTheme,
    injectSheet(styles),
  )(component);
}

export default withThemedStyles;
