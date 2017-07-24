# Nordnet UI Kit

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

## Installation

```js
npm install --save nordnet-ui-kit # or
yarn add nordnet-ui-kit
```

## Usage

``` javascript
import { ThemeProvider, Button } from 'nordnet-ui-kit';

const Root = (
  <ThemeProvider>
    <Component />
  </ThemeProvider>
);

const Component = (
  <Button variant="primary" modifier="success">Success</Button>
);

ReactDOM.render(Root, document.getElementById('app'));
```

*To see what is exported from nordnet-ui-kit, please see the documentation below or [index.js](https://github.com/nordnet/nordnet-ui-kit/blob/master/src/index.js)*

## Compatibility

* `v1.5.1` and lower depends on `jss-theme-reactor` and `jss@7`
* `v1.6.0+` depends on `@iamstarkov/jss-theme-reactor` and `jss@8`, so please update your components to use `@iamstarkov/jss-theme-reactor` instead of `jss-theme-reactor`

## Documentation for the latest release is available [here](https://nordnet.github.io/nordnet-ui-kit).

## [Changelog](https://github.com/nordnet/nordnet-ui-kit/blob/master/CHANGELOG.md)

## Developing

Developing workflow can be found in the [contributing guidelines](CONTRIBUTING.md).

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](CONTRIBUTING.md).

## License

This open source project released by Nordnet is licensed under the MIT license.

MIT (http://www.opensource.org/licenses/mit-license.php)

[npm-url]: https://npmjs.org/package/nordnet-ui-kit
[npm-image]: https://img.shields.io/npm/v/nordnet-ui-kit.svg?style=flat-square

[travis-url]: https://travis-ci.org/nordnet/nordnet-ui-kit
[travis-image]: https://img.shields.io/travis/nordnet/nordnet-ui-kit.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/nordnet/nordnet-ui-kit
[coveralls-image]: https://img.shields.io/coveralls/nordnet/nordnet-ui-kit.svg?style=flat-square

[depstat-url]: https://david-dm.org/nordnet/nordnet-ui-kit
[depstat-image]: https://david-dm.org/nordnet/nordnet-ui-kit.svg?style=flat-square
