# Nordnet UI Kit

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![Dependency Status][depstat-image]][depstat-url]

## Installation

```js
npm install --save nordnet-ui-kit # or
yarn add nordnet-ui-kit
```

## Usage

``` javascript
// src/root.js
import { ThemeProvider } from 'react-jss';
import { theme } from 'nordnet-ui-kit';
import App from './App'

const Root = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
ReactDOM.render(Root, document.getElementById('app'));

// src/App.js
import { Button } from 'nordnet-ui-kit';

const App = props => (
  <div>
    <Button variant="primary" modifier="success">
      Success
    </Button>
  </div>
);

export default App;
```

*To see what is exported from nordnet-ui-kit, please see the documentation below or [index.js](https://github.com/nordnet/nordnet-ui-kit/blob/master/src/index.js)*

## Compatibility

* `v1.5.1` and lower depends on `jss-theme-reactor` and `jss@7`
* `v1.6.0+` depends on `@iamstarkov/jss-theme-reactor` and `jss@8`, so please update your components to use `@iamstarkov/jss-theme-reactor` instead of `jss-theme-reactor`
* `v1.7.0+` depends on `react-jss` and `jss@8`, so please update your components to use `react-jss` instead of `@iamstarkov/jss-theme-reactor`.
  Also, `v1.7.0` deprecates exported `ThemeProvider`, `createShallow` and `createMount`.
  It will be removed in next major release. Read more in [v1.7.0 migration docs](./docs/migrations/v1.7.0.md)
* `v1.7.0` also features `react-jss` over `jss-theme-reactor`, please read how to migrate your components.
* We can't expect all components to be rewritten to react-jss instantly, so you will need to use both jss-theme-reactor based component  and react-jss components at the same time, read in the [jss-theme-reactor migration docs](./docs/migrations/jss-theme-reactor.md) how to do it.

## Documentation for the latest release is available [here](https://nordnet.github.io/nordnet-ui-kit).

## Documentation about how to write, style and test components is availible in the [docs](./docs) folder

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

[codecov-url]: https://codecov.io/gh/nordnet/nordnet-ui-kit
[codecov-image]: https://img.shields.io/codecov/c/github/nordnet/nordnet-ui-kit.svg?style=flat-square


[depstat-url]: https://david-dm.org/nordnet/nordnet-ui-kit
[depstat-image]: https://david-dm.org/nordnet/nordnet-ui-kit.svg?style=flat-square
