```js
import { Icon, theme } from 'nordnet-ui-kit';

<div style={{ display: 'flex' }}>
  <Avatar size={'xs'}>xs</Avatar>
  <Avatar>Aa</Avatar>
  <Avatar size={'md'}>AF</Avatar>
  <Avatar size={'lg'}>ISK</Avatar>
  <Avatar color={theme.palette.complementaryBlue2}>Hm</Avatar>
  <Avatar style={{ width: 40, height: 40 }} color={theme.palette.negative}>
    <Icon.Trash width={18} height={18} fill={theme.palette.white} />
  </Avatar>
</div>;
```
