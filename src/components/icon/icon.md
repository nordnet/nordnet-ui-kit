Basic usage:

```html
<Icon.Trash fill="tomato" stroke="tomato" width={48} height={48} />
```
---
```js
import { Icon } from 'nordnet-ui-kit'; // nordnet-ui-kit

<Icon.Trash fill="tomato" stroke="tomato" width={48} height={48} />
```

All available icons:
```js
import { Icon, Input } from 'nordnet-ui-kit';

const containerStyle = {
  paddingTop: 20,
  columns: 'auto 200px',
};

const style = {
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 16,
};

const icons = Object.keys(Icon);

const options = [{
  label: 'Nordnet blue',
  value: '#00A9EC',
}, {
  label: 'Black',
  value: '#222',
}, {
  label: 'Nordnet blue dark',
  value: '#365299',
}];

initialState = { icons, value: '', color: '' };

const iconFilter = (
  <div>
    <label htmlFor="icon_filter">Filter: </label>
    <Input
      id="icon_filter"
      type="text"
      value={state.value}
      onChange={
        ({ target: { value }}) => {
          setState({
            icons: icons.filter(name => name.toLowerCase().indexOf(value.toLowerCase()) > -1),
            value,
          });
        }}
      placeholder="Filter icons: "
    />
  </div>
);

const colorPicker = (
  <div>
    <label htmlFor="color_picker">Icon color: </label>
    <Input
      id="color_picker"
      type="text"
      value={state.color}
      placeholder="Choose a color wisely, try cornflowerblue or #234567?"
      onChange={({ target: { value }}) => {
        setState({ color: value });
      }}
    />
  </div>
);

<div>
  {iconFilter}
  {colorPicker}
  <div style={containerStyle}>
    {state.icons
      .map(iconName => {
        const IconComponent = Icon[iconName];

        return (
          <div key={iconName} style={{display: 'inline-block', width: '100%', padding: 4, height: 20,}}>
            <div key={ iconName } style={ style }>
              <div style={iconStyle}>
                <IconComponent stroke={state.color || '#00A9EC'} fill={state.color || '#00A9EC'} />
              </div>
              <div style={{ fontSize: 12, fontFamily: '"Hack", monospace' }}>{ iconName }</div>
            </div>
          </div>
        );
      }
    )}
  </div>
</div>
```