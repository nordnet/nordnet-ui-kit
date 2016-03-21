# Nordnet UI Kit

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][depstat-image]][depstat-url]

## Installation
`npm install --save nordnet-ui-kit`

## Usage
``` javascript
import { Button } from 'nordnet-ui-kit';

const button = (
  <Button primary type="success">Success</Button>
);

ReactDOM.render(button, mountNode);

```

## Documentation
More complete docs as well as example are available [here](https://nordnet.github.io/nordnet-ui-kit).

## Components
### Alert
**In use:**
```javascript
<Alert type="success" header="Well done!">Your message was sent</Alert>
```

The `<Alert />` component takes the following props:
- `modifier`: either `success`, `warning` or `danger`
- `header`
- `dismissable`
- `dismissed`

### Button
**In use:**
```javascript
<Button primary type="danger">Delete</Button>
```

The `<Button />` component takes the following props:
- `primary`
- `secondary`
- `link`
- `modifier`: either `success`, `warning` or `danger`
- `href`
- `disabled`

### Checkbox
**In use:**
```javascript
<Checkbox label="Check me out" />
```

The `<Checkbox />` component takes the following props:
- `checked`
- `disabled`
- `value`
- `label`

### Collapsible
**In use:**
```javascript
const toggle = <Button secondary>Toggle Collapsible</Button>;

<Collapsible toggle={ toggle }>
  <div>
    Hello there
  </div>
</Collapsible>
```

The `<Collapsible />` component takes the following props:
- `toggle`
- `collapsed`

### Dropdown
**In use:**
```javascript
<Dropdown toggle="Toggle dropdown" actions={[{
  label: 'Action 1',
  action: () => alert('You pressed action 1'),
}, {
  label: 'Action 2',
  action: () => alert('You pressed action 2'),
}]} />
```

The `<Dropdown />` component takes the following props:
- `toggle`
- `actions`
- `actionsOpen`

### Icon
**In use:**
```javascript
<Icon type="checkmark" stroke="green" width={ 16 } height={ 16 } />
```

The `<Icon />` component takes the following props:
- `type`
- `fill`
- `stroke`
- `strokeWidth`
- `width`
- `height`
- `componentClass`

### Input
**In use:**
```javascript
<Input type="text" label="Text input" placeholder="Enter value" />
```

The `<Input />` component takes the following props:
- `type`
- `label`
- `placeholder`
- `id`
- `value`
- `onFocus`
- `onBlur`
- `onChange`
- `hasSuccess`
- `hasError`
- `hasWarning`
- `helpText`
- `options`

### Pane
**In use:**
```javascript
<Pane tabs={[{
  label: 'Tab 1',
  body: <span>This is tab 1!</span>
}, {
  label: 'Tab 2',
  body: <span>This is tab 2!</span>
}, {
  label: 'Tab 3',
  body: <span>This is tab 3!</span>
}]} />
```

The `<Pane />` component takes the following props:
- `tabs`

### Radio
**In use:**
```javascript
<Radio label="Check me out" />
```

The `<Radio />` component takes the following props:
- `checked`
- `disabled`
- `value`
- `label`

## License
This open source project released by Nordnet is licensed under the MIT license.

MIT (http://www.opensource.org/licenses/mit-license.php)

[npm-url]: https://npmjs.org/package/nordnet-ui-kit
[npm-image]: https://img.shields.io/npm/v/nordnet-ui-kit.svg

[travis-url]: https://travis-ci.org/nordnet/nordnet-ui-kit
[travis-image]: https://travis-ci.org/nordnet/nordnet-ui-kit.svg?branch=master

[depstat-url]: https://david-dm.org/nordnet/nordnet-ui-kit
[depstat-image]: https://david-dm.org/nordnet/nordnet-ui-kit.svg
