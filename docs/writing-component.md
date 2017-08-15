# Writing a Component

## Table of Content

* [Introduction](#introduction)
* [Example](#example)
* [High Order Components](#high-order-components)
* [Next: Styling a component](#next-styling-a-component)

## Introduction

Main Idea is that your component if possible should be stateless to make it simple and thus reduce amount of bugs and to ease testing.

For a Component you will need:
* `react`
* `prop-types`
* `classnames`
* `react-jss`
* Component's styles
* Component itself

You will need to export your component as `Component` and styles for tests.

Also Component doesn't depend on styles directly, but use `injectSheet` to compile styles into `classes` object and pass it as a prop.

## Example

```js
// src/components/button.js
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import injectSheet from 'react-jss'
import styles from './button-styles'

const Button = ({
  classes,
  children,
  tag: Tag,
  block,
  active,
  disabled,
}) => {
  const isInput = Tag === 'input';
  const isLink = Tag === 'a';
  return (
    <Tag
      className={cn({
        [classes.button]: true,
        [classes.block]: block,
        [classes.active]: active,
        [classes.disabled]: disabled,
      })}
      disabled={ disabled ? true : null }
      aria-pressed={ (isLink && active) ? true : null }
      aria-disabled={ (isLink && disabled) ? true : null }
    >
      { !isInput ? children : null }
    </Tag>
  );
};

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  /** Anything that can be rendered for Buttons and Text for tag="inputs" placed in `value` attribute */
  children: PropTypes.node,
  /** Block */
  block: PropTypes.bool,
  /** Active state */
  active: PropTypes.bool,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Tag */
  tag: PropTypes.string,
}

Button.defaultProps = {
  tag: 'button',
  block: false,
  active: false,
  disabled: false,
  onClick: ()=>{},
}

export { Button as Component, styles };
const enhance = injectSheet(styles);
export default enhance(Button);
```

## High Order Components

In case if you have more than one High Order Component, please use `compose` from `recompose`.

```js
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import injectSheet from 'react-jss';

import styles from './button-styles';     // styles
import messages from './button-messages'; // l10n

const Button = props => (/*…*/);

Button.PropTypes = {
  children: PropTypes.node.isRequired
  // …
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl,
  injectSheet(styles),
);

export { Button as Component, styles, messages };
export default enhance(Button);
```

## Next: Styling a component

[Continue to read about styling](./styling-component.md).
