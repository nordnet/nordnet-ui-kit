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

## Documentation for the latest release is available [here](https://nordnet.github.io/nordnet-ui-kit).

## [Changelog](https://github.com/nordnet/nordnet-ui-kit/blob/master/CHANGELOG.md)

## Developing
```fish
git clone git@github.com:nordnet/nordnet-ui-kit.git
cd nordnet-ui-kit
yarn install
yarn start # This will start a local instance of the documentation
```

* Components can be found under `src/components`
* Examples of component usage (documentation) can be found in the same directory as the component, but with an `.md` extension instead
* Theming code can be found in `src/styles` (color, palette, breakpoints, typography, etc.)

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
