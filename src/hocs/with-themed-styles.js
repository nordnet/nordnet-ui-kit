import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import withTheme from './with-theme';
import injectSheet from './inject-sheet';

// console.log(injectSheet);
function withThemedStyles(styles, component) {
  const name = component.displayName || component.name;
  return compose(
    setDisplayName(`${name}-styled`),
    withTheme,
    injectSheet(styles),
  )(component);
}

export default withThemedStyles;
