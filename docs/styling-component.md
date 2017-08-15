# Styling a component

## Table of Content

* [Introduction](#introduction)
* [Unthemed styles](#unthemed-styles)
* [Themed styles](#themed-styles)
* [Access to Component's props in styles](#access-to-components-props-in-styles)
* [Next: Testing a component](#next-testing-a-component)

## Introduction

Your styles are
* either static `object`
* or function from `theme` which returns static `object`

In latter case, you need to use `react-jss`'s `ThemeProvider` in your app's root.

Resulting object will be consumed by `react-jss`'s `injectSheet`.

Worth to mention, `injectSheet` will inject:
* `classes`—Object of styles compiled to classes.
* `theme`—will be injected only if your styles is a function from `theme`
* `sheet`—`[CSSOM][]`'s styleSheet instance, you wont need it 99% of the time, but be aware.

[CSSOM]: https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model

## Unthemed styles

```js
// src/components/button-styles.js
export default {
  button: {
    color: theme.palette .text.default,
    borderRadius: props => props.radius,
  },
  block: { /* */ },
  active: { /* */ },
  disabled: { /* */ },
};
```

## Themed styles

```js
// src/components/button-styles.js
export default theme => ({
  button: {
    color: theme.palette .text.default,
    borderRadius: props => props.radius,
  },
  block: { /* */ },
  active: { /* */ },
  disabled: { /* */ },
});
```

## Access to Component's props in styles

Yes, you can access Component's props in your css. In this case classes are separated into two styleSheet under the hood, one is static and another one for dynamic classes based on props.

Dynamic styleSheet is attached to the DOM once into and compiled to classes once as well.
But if Component got new props, then dynamic styleSheet is being updated, although it keeps classes the same. Thus it allows you to style component without extra re-renders.

```js
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = theme => ({
  root: {
    color: props => theme.palette[props.development > 0 ? 'success' : 'danger'],
  }
})

class Instrument extends React.Component {
  // re-render only if classes or children had been changed
  // and disregard any `props.development` updates,
  // because that prop is used only in styles,
  // thus is not participating in Component's render
  shouldComponentUpdate(nextProps) {
    return (
      this.props.classes !== nextProps.classes ||
      this.props.children !== nextProps.children
    )
  }
  render() {
    const { classes, children } = this.props;
    return (<div className={classes}>{ children }</div>)
  }
}

export { Instrument as Component, styles };
const enhance = injectSheet(styles);
export default enhance(Instrument);
```

## Next: Testing a component

[Continue to read about testing][./testing-component.md].
