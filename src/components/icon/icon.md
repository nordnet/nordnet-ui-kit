Basic usage:
```js
import { Icon } from 'nordnet-ui-kit';

render() {
  // ...
  return (
    <Icon.Trash fill="tomato" stroke="tomato" width={48} height={48} />
  )
}
```

    const { Icon } = require('../../'); // nordnet-ui-kit

    <Icon.Trash fill="tomato" stroke="tomato" width={48} height={48} />

All available icons:

    const { Icon } = require('../../'); // nordnet-ui-kit

    const containerStyle = {
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

    <div style={containerStyle}>
      {icons
        .map(iconName => {
          const IconComponent = Icon[iconName];

          return (
            <div key={iconName} style={{display: 'inline-block', width: '100%', padding: 4, height: 20,}}>
              <div key={ iconName } style={ style }>
                <div style={iconStyle}>
                  <IconComponent stroke="#00A9EC" fill="#00A9EC" />
                </div>
                <div style={{ fontSize: 12, fontFamily: '"Hack", monospace' }}>{ iconName }</div>
              </div>
            </div>
          );
        }
      )}
    </div>
