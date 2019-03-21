Radio type, Primary (using icons):

```js
import { Icon, theme } from 'nordnet-ui-kit';

<SegmentedControl value="green" name="colorRadioIcons" type="radio">
  <span value="red">
    <Icon.Trash width={18} height={18} fill={theme.palette.negative} />
  </span>
  <span value="green">
    <Icon.Trash width={18} height={18} fill={theme.palette.positive} />
  </span>
  <span value="blue">
    <Icon.Trash width={18} height={18} fill={theme.palette.cta} />
  </span>
</SegmentedControl>;
```

Radio type, Primary (using text):

```js
import { Icon, theme } from 'nordnet-ui-kit';

<SegmentedControl value="left" name="colorRadioText" type="radio">
  <span value="left">Left</span>
  <span value="right">Right</span>
</SegmentedControl>;
```

Radio type, Secondary (using text):

**Warning! This variant is deprecated, please use the Tabs component.**

```js
// This is a sample component to enable testing setting value from outside the UI-Kit
import React from 'react';

class RadioTypeSample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: 'ALL_NEWS' };
  }

  render() {
    return (
      <div>
        <SegmentedControl
          variant="secondary"
          value={this.state.value}
          name="colorRadioText2"
          type="radio"
        >
          <span value="ALL_NEWS">All news</span>
          <span value="RECOMMENDED_NEWS">Recommended news</span>
          <span value="MY_NEWS">My news</span>
        </SegmentedControl>
        <div style={{ padding: '0 20px 20px', marginTop: '50px', border: '1px solid lightgray' }}>
          <h5>Click buttons to simulate select from outside UI-Kit</h5>
          <button
            onClick={() => {
              this.setState({ value: 'ALL_NEWS' });
            }}
          >
            ALL_NEWS
          </button>
          <button
            style={{ marginLeft: '5px' }}
            onClick={() => {
              this.setState({ value: 'RECOMMENDED_NEWS' });
            }}
          >
            RECOMMENDED_NEWS
          </button>
          <button
            style={{ marginLeft: '5px' }}
            onClick={() => {
              this.setState({ value: 'MY_NEWS' });
            }}
          >
            MY_NEWS
          </button>
        </div>
      </div>
    );
  }
}

<RadioTypeSample />;
```

Checkbox type:

```js
<SegmentedControl name="colorCheck" type="checkbox">
  <span value="red" checked={true}>
    Red
  </span>
  <span value="green">Green</span>
  <span value="blue" checked={true}>
    Blue
  </span>
</SegmentedControl>
```

With single option, "checkbox" type:

```js
<SegmentedControl name="colors" type="checkbox">
  <span value="red" checked={true}>
    Red
  </span>
</SegmentedControl>
```
