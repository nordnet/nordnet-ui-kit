# migration from jss-theme-reactor to react-jss

## ThemeProviders duplication in the meantime

If you use any components which are not yet refactored into `react-jss`, then you need to use two `ThemeProviders`:
So jss-theme-reactor based components will not be broken, because of lack of context.

```js
// src/root.js
import { ThemeProvider } from 'react-jss';
import { theme, ThemeProvider as UiThemeProvider } from 'nordnet-ui-kit';
import App from './App'

const Root = (
  <ThemeProvider theme={theme}>
    <UiThemeProvider>
      <App />
    </UiThemeProvider>
  </ThemeProvider>
);

ReactDOM.render(Root, document.getElementById('app'));
```

## Components refactoring

TL:DR:

* you dont care about context anymore.
* you will get classes as prop from now on.

```diff
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
-import { createStyleSheet } from '@iamstarkov/jss-theme-reactor';
-// or
-import { createStyleSheet } from 'jss-theme-reactor';
+import injectSheet from 'react-jss';

- export const styleSheet = createStyleSheet('Badge', theme => {
+ const styles = theme => {
  const { palette, typography, mixins } = theme;

  return {
    /* … */
  };
});

-function Badge({ modifier, children }, { styleManager }) {
-  const classes = styleManager.render(styleSheet);
+ function Badge({ classes, modifier, children })

/* … */

Badge.propTypes = {
+  /** @ignore */
+  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  modifier: PropTypes.oneOf(['success', 'warning', 'danger']),
};

-Badge.contextTypes = {
-  styleManager: PropTypes.object.isRequired,
-};

-export default Badge;
+export { Badge as Component, styles };
+export default injectSheet(styles)(Badge);
```
