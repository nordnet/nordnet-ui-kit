```js
import { Input } from 'nordnet-ui-kit';

<RadioGroup name="radio-group" selectedValue="1">
  <Input
    key="radio-1"
    label="Radio input"
    type="radio"
    value="1"
  />

  <Input
    key="radio-2"
    label="Radio input with success"
    type="radio"
    value="2"
    hasSuccess
  />

  <Input
    key="radio-3"
    label="Radio input with error"
    type="radio"
    value="3"
    hasError
  />
</RadioGroup>
```

With `orientation="horizontal"` prop.
```js
import { Input } from 'nordnet-ui-kit';

<RadioGroup name="stocks-or-cash" selectedValue="stocks" orientation="horizontal">
  <Input
    key="stocks"
    label="Stocks"
    type="radio"
    value="stocks"
  />

  <Input
    key="cash"
    label="Cash"
    type="radio"
    value="cash"
  />
</RadioGroup>
```