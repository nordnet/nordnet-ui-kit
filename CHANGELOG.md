# Changelog

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
