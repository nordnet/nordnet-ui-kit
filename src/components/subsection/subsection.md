Basic usage:

```html
<Subsection title={() => (<span>Fruit</span>)}>
  Fruits are the means by which angiosperms disseminate seeds.
</Subsection>
```
---

Loading
```js
<Subsection loading title={() => (<span>Fruit</span>)} />
```

Toggled
```js
<Subsection toggled title={() => (<span>Fruit</span>)}>
  Fruits are the means by which angiosperms disseminate seeds.
</Subsection>
```

With icon
```js
import { Icon } from 'nordnet-ui-kit';

<Subsection icon={Icon.Apartment} title={() => (<span>Apartment</span>)}>
  The apartment is a part of the house.
</Subsection>
```

Long body

```js
<Subsection title={() => (<span>Lorem ipsum dolor sit amet</span>)}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Subsection>
```

Without separator

```js
<Subsection noSeparator title={() => (<span>Vegetable</span>)}>
  In everyday usage, vegetables are certain parts of plants that are consumed by humans as food as part of a savory meal.
</Subsection>
```

Long title

```js
<Subsection title={() => (<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>)}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Subsection>
```
