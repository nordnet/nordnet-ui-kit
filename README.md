# Nordnet UI Kit

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
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

## Documentation for the latest release is available [here](https://nordnet.github.io/nordnet-ui-kit).

## License
This open source project released by Nordnet is licensed under the MIT license.

MIT (http://www.opensource.org/licenses/mit-license.php)

[npm-url]: https://npmjs.org/package/nordnet-ui-kit
[npm-image]: https://img.shields.io/npm/v/nordnet-ui-kit.svg

[travis-url]: https://travis-ci.org/nordnet/nordnet-ui-kit
[travis-image]: https://travis-ci.org/nordnet/nordnet-ui-kit.svg?branch=master

[depstat-url]: https://david-dm.org/nordnet/nordnet-ui-kit
[depstat-image]: https://david-dm.org/nordnet/nordnet-ui-kit.svg
