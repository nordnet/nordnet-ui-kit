# Changelog

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
