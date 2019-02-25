```js
import { Icon, theme } from 'nordnet-ui-kit';

<div style={{display: 'flex'}}>
  <Avatar size={ 'xs' }>
    xs
  </Avatar>
  <Avatar>
    Aa
  </Avatar>
  <Avatar size={ 'md' }>
    AF
  </Avatar>
  <Avatar size={ 'lg' }>
    ISK
  </Avatar>
  <Avatar color={ theme.palette.color.blueDarker }>
    Hm
  </Avatar>
  <Avatar style={{ width: 40, height: 40 }} color={ theme.palette.color.red }>
    <Icon.Trash width={18} height={18} fill={theme.palette.color.white} />
  </Avatar>
</div>
```