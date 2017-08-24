# Changelog

*(NOTE: For fresh changelogs, please see the [releases page](https://github.com/nordnet/nordnet-ui-kit/releases))*

## 1.5.0 (2017-06-22)

#### Features

* **Tooltip:** Add option to show tooltip on click ([371190e5](https://github.com/nordnet/nordnet-ui-kit/commit/371190e5))

### 1.4.4 (2017-06-16)

#### Bug Fixes

* **Alert:** Convert bare classes to jss (header, vertical). ([1315a74f](https://github.com/nordnet/nordnet-ui-kit/commit/1315a74f), closes [#245](https://github.com/nordnet/nordnet-ui-kit/issues/245))

### 1.4.3 (2017-06-16)

#### Bug Fixes

* **Td:** Reduce table cell height ([5c1f7e3d](https://github.com/nordnet/nordnet-ui-kit/commit/5c1f7e3d))

### 1.4.2 (2017-06-13)

#### Bug Fixes

* **Animate:** Use height as well as max-height when animating (#244) ([3140735e](https://github.com/nordnet/nordnet-ui-kit/commit/3140735e))

### 1.4.1 (2017-06-09)

#### Bug Fixes

* **Table:** 💄 Adapt styling to new design ([38c3d7d0](https://github.com/nordnet/nordnet-ui-kit/commit/38c3d7d0))

## 1.4.0 (2017-06-08)

#### Features

* **Icon:** update Profile icon and add new Market and Portfolio icons ([04b024c0](https://github.com/nordnet/nordnet-ui-kit/commit/04b024c0))

### 1.3.6 (2017-06-08)

#### Bug Fixes

* **Input:** Fix styling when input has display inline-block ([dab34ea6](https://github.com/nordnet/nordnet-ui-kit/commit/dab34ea6))

### 1.3.5 (2017-06-05)

#### Bug Fixes

* **Table:** 💄 Make horizontal scrolling work on iOS devices ([96af4082](https://github.com/nordnet/nordnet-ui-kit/commit/96af4082))

### 1.3.4 (2017-06-01)

#### Bug Fixes

* **Table:** More compact tables on mobile ([befa6ca9](https://github.com/nordnet/nordnet-ui-kit/commit/befa6ca9))
* **Tr:** Add pointer-events: none to the clone ([9d1006ed](https://github.com/nordnet/nordnet-ui-kit/commit/9d1006ed))

### 1.3.3 (2017-05-31)

#### Bug Fixes

* **Animate:** Add extra div around the children in Animate ([88afb874](https://github.com/nordnet/nordnet-ui-kit/commit/88afb874))

### 1.3.2 (2017-05-29)

#### Bug Fixes

* **Tr:** Height change now only affects sticky rows ([e86e4f10](https://github.com/nordnet/nordnet-ui-kit/commit/e86e4f10))


### 1.3.1 (2017-05-29)

#### Bug Fixes

* **Flag:** Check if flag exists before rendering ([96b77763](https://github.com/nordnet/nordnet-ui-kit/commit/96b77763))


## 1.3.0 (2017-05-29)

#### Features

* **Animate:** Added new Animate component (#230) ([76eba45d](https://github.com/nordnet/nordnet-ui-kit/commit/76eba45d))


## 1.2.0 (2017-05-26)

#### Bug Fixes

* **Tr:** Fix sticky row behaviour ([036953e4](https://github.com/nordnet/nordnet-ui-kit/commit/036953e4))

#### Features

* **Table:** Add responsive behaviour ([11f5f415](https://github.com/nordnet/nordnet-ui-kit/commit/11f5f415))


### 1.1.1 (2017-05-23)

#### Bug Fixes

* **Button:** Remove button text animation in IE ([40246598](https://github.com/nordnet/nordnet-ui-kit/commit/40246598))


## 1.1.0 (2017-05-23)

#### Bug Fixes

* **Icon.Questionmark:** Replace Questionmark icon ([e27937d9](https://github.com/nordnet/nordnet-ui-kit/commit/e27937d9))

#### Features

* **Icon:** Add new File icon ([1ff77096](https://github.com/nordnet/nordnet-ui-kit/commit/1ff77096))


## 1.0.0 (2017-05-18)

#### Features

* **Logo:** Add iconOnly prop to only get icon ([339e513e](https://github.com/nordnet/nordnet-ui-kit/commit/339e513e))

#### Breaking Changes

* Icon API changed: now takes `height` instead of `width`

 ([339e513e](https://github.com/nordnet/nordnet-ui-kit/commit/339e513e))

## 0.3.0 (2017-05-18)

#### Features

* **LabeledValue:** Add mobile behaviour ([04c80c2d](https://github.com/nordnet/nordnet-ui-kit/commit/04c80c2d))

### 0.2.8 (2017-05-18)

#### Bug Fixes

* **Button:**
  * Update disabled colors ([e40c58df](https://github.com/nordnet/nordnet-ui-kit/commit/e40c58df))
  * Fix focus styling ([8110c690](https://github.com/nordnet/nordnet-ui-kit/commit/8110c690))

### 0.2.7 (2017-05-18)

#### Bug Fixes

* **Button:** Update secondary button (#223) ([2f410d8d](https://github.com/nordnet/nordnet-ui-kit/commit/2f410d8d))
* **Icons:** Fix invalid propTypes declaration ([7b28c4bf](https://github.com/nordnet/nordnet-ui-kit/commit/7b28c4bf))

### 0.2.5 (2017-05-17)

#### Bug Fixes

* release flow ([d4338d06](https://github.com/nordnet/nordnet-ui-kit/commit/d4338d06), closes [#219](https://github.com/nordnet/nordnet-ui-kit/issues/219))
* styling of select input. (#221) ([7f690f8d](https://github.com/nordnet/nordnet-ui-kit/commit/7f690f8d), closes [#219](https://github.com/nordnet/nordnet-ui-kit/issues/219))
* remove broken file ([c320114a](https://github.com/nordnet/nordnet-ui-kit/commit/c320114a))
* Set pointer-events to none on icons (#217)
* change circle arrow (#218)
* Remove default marginBottom (#216)
* addonRight for small input fields (#215)
* Add new modifier to proptypes (#214)

## 0.2.4
**⚠️ Accidental release - Use at your own risk ⚠️**

## 0.2.3
* Input[type="select"]: Styling fixes 💄.
* Button: Default buttons are now gray, blue button is now `modifier="action"`.

## 0.2.2
* Docs: Expand usage section in Readme & add a `Development` section.
* SegmentedControl: Allow tabbing between options in `checkbox` mode.
* SegmentedControl: Allow using arrow keys to go between options in `radio` mode.
* Alert: Fix styling in M$ browsers.
* Flag/Logo: Fix svg styling issues in M$ browsers.
* Flag: Fix id-clashes.
* Alert: Add `vertical` option.
* Dropdown: Now closes when clicking outside.

## 0.2.1
* Flag: Is now dynamic, and accepts more combinations of countryCode + secondaryCountryCode.
* Icon, Flag: Add screen reader attributes.
* Theme.typography:
  * Add fallback fonts to fontFamily declarations
  * Add more fontWeight declarations

## 0.2.0

### Breaking changes 💥
* (S)CSS replaced with [JSS](http://cssinjs.org/?v=v7.1.1)
* Icon api changed from `<Icon type="icon-type" />` to `<Icon.IconType />`
* Removed variables (both scss and js versions)
* Removed components: GraphTooltip, HorizontalNav, Legend, NavBar, RangeSelector, RatioBar, Search, Select, SparkGraph, Widget
* Removed some icon types from Icon, see documentation for more information

### Other changes 👾
* Update eslint and styleguidist
* Remove scss from styleguidist and move essential styles to style tag in template
* Export ThemeProvider, which will provide all children with context.styleManager
* Export test-utils for createShallow, createMount and createRenderToString
* Added new colors and typography to the theme
* Change how icons are presented in the documentation

### New stuff 🌟
* New components: Avatar, Li, SegmentedControl, Ul
* New theming functionality built in 💄
* A lot of new icons added and default icon style is updated (strokeWidth 2 -> 1)
* Flag component has a `round` option for rounded flags
* Flag component has a `secondaryCountryCode` option for currency flags

```js
// ℹ️ In your provider
import React, { Component } from 'react';
// import it
import { ThemeProvider } from 'nordnet-ui-kit';

export default class Wrapper extends Component {
  // ...

  render() {
    return ( // this will get a default theme, you can override this with the `theme` prop to ThemeProvider
      <ThemeProvider>
        {this.props.children}
      </ThemeProvider>
    );
  }
}
```

```js
// ℹ️ Styling your component with the theme from nordnet-ui-kit
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// import any component from the ui-kit that you want to use
import { Badge } from 'nordnet-ui-kit';
// import createStyleSheet
import { createStyleSheet } from 'jss-theme-reactor';

// Export styleSheet to make testing easier later
export const styleSheet = createStyleSheet('YourComponent', theme => ({
  root: {
    display: 'block',
  },
  header: {
    color: theme.palette.text.default,
    backgroundColor: theme.palette.text.default,
  },
}));

// 1. If your component is a class do this:
export class YourComponent extends Component {
  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };


  render() {
    const isHeader = { this.props }
    const classes = this.context.styleManager.render(styleSheet);
    return (
      <div className={cn(classes.root, {[classes.header]: isHeader})}>
        Hello world!
      </div>
    );
  }
}


// 2. If your component is a function do this:
export function YourComponent({ isHeader }, { styleManager }) {
  const classes = styleManager.render(styleSheet);
  return (
    <div className={cn(classes.root, {[classes.header]: isHeader})}>
      Hello world!
    </div>
  );
}

YourComponent.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
```

```js
// ℹ️ Testing your themed components (example in mocha, but ava shouldn't be that different)
import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from 'nordnet-ui-kit';
import YourComponent, { styleSheet } from './YourComponent';


describe('<YourComponent />', () => {
  const shallow = createShallow(enzymeShallow);
  const classes = shallow.context.styleManager.render(styleSheet);
  let wrapper;

  it('should have the class root', () => {
    wrapper = shallow(<YourComponent />);
    expect(wrapper.hasClass(classes.root)).to.equal(true);
  });


  it('should have the class header when isHeader is set', () => {
    wrapper = shallow(<YourComponent isHeader />);
    expect(wrapper.hasClass(classes.header)).to.equal(true);
  });
});
```

## 0.2.0-rc.9
* Remove SparkGraph again (issues with d3-interpolate and d3-color)

## 0.2.0-rc.8
* Port SparkGraph

## 0.2.0-rc.7
* Pane: Re-add Pane component
* Icons: Add more icons
* Flag: Add new combined flags

## 0.2.0-rc.6
* Flag: Now accepts both uppercase and lowercase country codes
* Tooltip: Pixel pushing

## 0.2.0-rc.5
* Remove Search component
* Tweak input styles

## 0.2.0-rc.4
* Remove obsolete components: HorizontalNav, Pane, RatioBar, Widget
* Styling tweaks to: Table, Input
* New component: SegmentedControl

## 0.2.0-rc.3
* More Avatar sizes
* Improved Table styles
* Add breakpoints and mixins to theme
* Fix for hardcoded styles in styleguidist
* Move JSS related dependencies from devdeps to deps

## 0.2.0-rc.1
* Port remaining components to JSS. (SparkGraph is still missing)
* Clean up webpack dependencies
* New Li and Ul components

## 0.2.0-beta.9
* Port Legend,
Dropdown, Pane, Horizontal nav, Tooltip, Button and Search
* Add support to pass custom context to mount helper

## 0.2.0-beta.8
* Remove SparkGraph because of issues with d3-interpolate

## 0.2.0-beta.7
* All components ported to JSS

## 0.1.1
* Updated to Webpack 2
* Bumped styleguidist
* Removed some unused dependencies
* Replaced lodash.assign with Object.assign
* Replaced react-pure-render with React.PureComponent
* Replaced a few other lodash modules with own code.

## 0.1.0
* **BREAKING**: Removed ReactDatePicker component.

## 0.0.57
* **BREAKING**: Move ReactDatePicker to external dependency. Need to be imported when used.
* Tooltip: Multiple fixes. Added placement prop.

## 0.0.56
* Input Password: Removed show password toggle.
* Replaced react-onclickoutside with a custom solution that works in all browsers >= IE11.

## 0.0.55
* Icon: Added vertical-ellipsis icon.
* Tooltip: Created a tooltip component.
* Bump react-svg-sprite-icon to fix errors with IE11.

## 0.0.54
* Fixed development support for node 4.
* Icon: Added circle-arrow and ticking-clock icons.
* Badge: Changed text color of warning badge to NN Black.
* Button: Changed text color of warning button to NN Black.
* Button: Changed cursor to pointer on hover.
* Button: Changed link button color to primary.
* Button: Changed outline color to match button color.
* **BREAKING**: Removed graph themes.

## 0.0.53
* Input Select: Fix for IE11.

## 0.0.52
* Input Select: Cater for long options and placeholder.
* Legend: Accept nodes instead of just strings as labels.

## 0.0.50
* Table: Sticky rows now dissapearing when they should.
* Search: Text entered before server-side rendering complete now triggers a search.

## 0.0.49
* Legend component now scales more predictably.
* [cssnano](http://cssnano.co/) was messing up the spinner css, it is now configured more appropriately.
* Tweaks to table components.

## 0.0.48
* Added possibility to send in custom fadeRenderer to HorizontalNav component.
* Fixed styling of radio and checkbox inputs.
* Added RadioGroup component.
* Changed default color of alert box.

## 0.0.47
* Horizontal-nav: Added missing entry points.
* Search: Moved Transition to renderResults.
* Search: Moved handling of Search result to consumer, added alignResults and showNoResults props.
* Bumped react-motion-ui-pack.

## 0.0.45
* Updated `Select` component style.
* Added key to search results in `Search` component to get rid of warning from `react-motion`.

## 0.0.44
* Added arrow right icon.
* Tweak style for `Search`.
* Replaced react-addons-css-transition-group with react-motion.
* Tweaked results view for `Search`.

## 0.0.43
* Added search component.
* Added muted graph theme.
* Added muted range selector variant.
* Styled "no-data" view for graphs correctly.

## 0.0.42
* Made sure sticky prop isn't passed to `<tr />` in `<Tr />` component.

## 0.0.41
* Fixed export for flag component.

## 0.0.40
* Refactored `table` components and tweaked styles.
* Added `nav-bar` and `horizontal-nav` components.
* Added `flag` component.

## 0.0.39
* Updated graph tooltip component.
* Updated select component.
* Added new range selector component.
* Added new legend component.

## 0.0.38
* Added UMD build of UI kit.

## 0.0.37
* Added ReactDOM dependency to externals in webpack config.
* Removed x-axis min range in graph themes.

## 0.0.36
* React dependency moved to peer dependency.
* Null validation on Input components
* React Select bumped to stop warnings in React v15.0.0.
* Added candlestick and area graph icons

## 0.0.35
* Replaced reactable with custom `table`, `tbody`, `td`, `tfoot`, `th`, `thead` and `tr` components.
* Spinner now renders primary circle as string due to unsupported `mask` attribute in React 0.14.0.
* Added initial version of `graph-tooltip` component.

## 0.0.34
* Minor tweak to table component

## 0.0.33
* Added question mark icon [#68](https://github.com/nordnet/nordnet-ui-kit/pull/68).
* Added missing entry point for table component.

## 0.0.32
* Added graph themes
* Added table component

## 0.0.31
* Added spinner component.
* Chevron in select input is now clickable to expand select.
* The codebase is now much more well tested thanks to [robineng](https://github.com/robineng).

## 0.0.30
* Fixed incorrect webpack entrypoint for LabeledValue component.

## 0.0.29
* **Breaking change:** Value component renamed to LabeledValue to avoid clashes with [nordnet-component-kit](https://nordnet.github.io/nordnet-component-kit/#Value).
* Ratio bar no longer reflows to a new line if a segment is very small.
* Ratio bar now supports `labelPositive`, `labelNeutral` and `labelNegative` props to allow translation if needed.
* Button component now correctly passes down href to the underlying a tag.

## 0.0.28
* Added ratio-bar component [#50](https://github.com/nordnet/nordnet-ui-kit/issues/50).
* Added spark-graph component thanks to [robineng](https://github.com/robineng).
* Widget now has padding on top when no header is present thanks to [bstream](https://github.com/bstream).
* Minor refactoring of various components to improve code quality.

## 0.0.27
* Added value formatter function to input.
* Checkbox and radio inputs now support validation.
* More icons.
* New [react-select](https://github.com/JedWatson/react-select) component.
* `event` is now passed to input components custom onBlur and onFocus functions [#46](https://github.com/nordnet/nordnet-ui-kit/pull/46).

## 0.0.26
* Build tool improvements.
* More icons.
* New badge component.

## 0.0.25
* Documentation is now powered by [react-styleguidist](https://github.com/sapegin/react-styleguidist).

## 0.0.24
* Input now properly renders label when value is an object and when value is set via props.

## 0.0.23
* Input now uses label prop as placeholder if placeholder is missing.

## 0.0.22
* Major refactoring of input component.
  * Now supports addons (inline elements to the left or right of the actual input, great for icons).
  * Date input now has a datepicker button.
  * Mostly under the hood changes.
  * Checkbox and radio components are now in the input component.
* New value component.
* New widget component.
* New block prop added to button component.
* Removed collapsible component, use [react-collapse](https://github.com/nkbt/react-collapse) instead.
* Lots of small tweaks and bug fixes.

## 0.0.19
* Bumped react dependency in UI kit to allow both 0.14 and 15.

## 0.0.18
* Switch from `primary` and `secondary` props on buttons, to `variant` prop with the same values.
* Bumped [react-svg-sprite-icon](https://github.com/nordnet/react-svg-sprite-icon) dependency.
