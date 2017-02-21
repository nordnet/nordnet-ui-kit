# Changelog

## 0.0.58
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
