# Testing a Component

## Table of Content

* [Introduction](#introduction)
* [Ava](#ava)
* [Shallow](#shallow)
* [Mount](#mount)
* [styles](#styles)

## Introduction

To test a Component you will need:
* `ava`
* `enzyme`
* `mockClasses`
* Component's styles
* Component itself

Worth to mention—we do not test all the possible HoCs: delegate those to HoCs' tests.
Instead we rather test our dumb component.

If possible use only `shallow`—it is fast and reliable and doesn't require certain environment.

`mockClasses` is a style helper which will compile styles object like `{ button: {}, block: {}, active: {}, disabled: {} }` into `{ button: 'button', block: 'block', active: 'active', disabled: 'disabled' }`. So you can match Component variants with relevant classes it should have. It also takes care of themed styles under the hood and supply theme if `styles` is a function.

Next notable thing is that we can create helper `shallowComponent` function,
which will pass classes automatically and spread props, so you can customize result for particular test cases. For the `mount` you can do the same.

## Ava

You need to configure ava in your package.json.

```json
"ava": {
  "files": [
    "{src,test}/**/*test.js"
  ],
  "require": [
    "babel-register"
  ],
  "babel": "inherit"
},
```

Options:
* `files` option specifies where to look for test files.
* `require` option specifies how to augment ava process with. In this case we want to transpile source files as well.
* `babel` option tells ava to inherits your project's babel config. This will allow ava to understand react's jsx syntax and imports.

### Fixing slow to run tests with limiting concurrency

By default ava is spawning separate process for each test file to run tests concurrently. If you have 70 test files, ava will have to spawn 70 processes, and sometimes you will run out of memory. To mitigate this configure concurrency to be in between 5 and 10.

```json
  "concurrency": 8
```

## Shallow

Shallow tests don't require any preparation or certainly configured environment.

```js
import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { mockClasses } from 'nordnet-ui-kit';
import { Component as Button, styles } from '../components/button/button';

const classes = mockClasses(styles);

const shallowComponent = props => shallow(
  <Button classes={classes} {...props}>{ props.children || "" }</Button>
);

test('Basic render', t => {
  t.true(
    shallowComponent().is('button'),
    "it should be a type `button`"
  );

  const children = 'testChild';
  t.true(
    shallowComponent({ children }).contains(children),
    "it should contain correct children"
  );
});

test('Tags', t => {
  t.true(
    shallowComponent({ tag: 'a' }).is('a'),
    "it should be a type `a`"
  );

  t.true(
    shallowComponent({ tag: 'button' }).is('button'),
    "it should be a `button`"
  );

  t.true(
    shallowComponent({ tag: 'input' }).is('input'),
    "it should be a `input`"
  );
});

test('Block', t => {
  t.true(
    shallowComponent({ block: true }).hasClass(classes.block),
    "it should have the block class"
  );
});

test('Active', t => {
  t.true(
    shallowComponent({ active: true }).hasClass(classes.active),
    "it should have the active class"
  );
});

test('Disabled', t => {
  t.true(
    shallowComponent({ disabled: true }).hasClass(classes.disabled),
    "it should have the disabled class"
  );

 t.true(
    shallowComponent({ disabled: true }).is('[disabled=true]'),
    "input should be disabled"
  );
});
```

## Mount

If you know, that shallow rendering is not enough, embrace yourself—tests will become more fragile and slow. It is because mount needs browser environment, which can be polluted with side effects. Nevertheless, you also need to tune ava config to create browser environment.

For that you would need [browser-env](https://github.com/lukechilds/browser-env) package.

Create a `.browser-env.js` file:

```js
import browserEnv from 'browser-env';

browserEnv();
```

Add it to your ava config's require section after `babel-register`.

```json
  "require": [
    "babel-register",
    "./.browser-env"
  ]
```

After finishing this instruction you can write mount tests the same way as shallow.


## styles

As far as your styles are quite simple entity `object` or function from theme (returning `object`), you can easily write tests for that as well.


### Unthemed

```js
// button-styles.test.js
import test from 'ava';

import styles from './styles';
/*
export default {
  button: {
    borderRadius: props => props.radius,
  },
  // …
};
*/

test('render button.borderRadius with props.radius', t => {
  const props = {
    radius: 10,
  }
  const actual = styles.button.borderRadius(props);
  const expected = props.radius;

  t.is(actual, expected)
});
```

### Themed

Don't forget to import theme and invoke your styles with it if your styles are themed.

```js
// button-styles.test.js
import test from 'ava';
import { theme } from 'nordnet-ui-kit';
import styles from './styles';
/*
export default theme => ({
  button: {
    borderRadius: props => props.radius,
  },
  // …
});
*/

test('render button.borderRadius with props.radius', t => {
  const props = {
    radius: 10,
  }
  const actual = styles(theme).button.borderRadius(props);
  const expected = props.radius;

  t.is(actual, expected)
});
```
