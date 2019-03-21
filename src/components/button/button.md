Primary button:

```js
const style = {
  marginRight: 16,
};

<div style={{ display: 'flex' }}>
  <Button variant="primary" style={style}>
    Click Me
  </Button>
  <Button variant="primary" modifier="action" style={style}>
    Click Me
  </Button>
  <Button variant="primary" modifier="danger" style={style}>
    Click Me
  </Button>
  <Button variant="primary" modifier="warning" style={style}>
    Click Me
  </Button>
  <Button variant="primary" modifier="success" style={style}>
    Click Me
  </Button>
  <div style={{ width: 300 }}>
    <Button block variant="primary" modifier="action" style={style}>
      Click Me
    </Button>
  </div>
</div>;
```

Primary, disabled:

```js
const style = {
  marginRight: 16,
};

<div>
  <Button variant="primary" disabled style={style}>
    Disabled
  </Button>
  <Button variant="primary" disabled modifier="action" style={style}>
    Disabled
  </Button>
  <Button variant="primary" disabled modifier="danger" style={style}>
    Disabled
  </Button>
  <Button variant="primary" disabled modifier="warning" style={style}>
    Disabled
  </Button>
  <Button variant="primary" disabled modifier="success" style={style}>
    Disabled
  </Button>
</div>;
```

Secondary button:

```js
const style = {
  marginRight: 16,
};

<div style={{ display: 'flex' }}>
  <Button variant="secondary" style={style}>
    Click Me
  </Button>
  <Button variant="secondary" modifier="action" style={style}>
    Click Me
  </Button>
  <Button variant="secondary" modifier="danger" style={style}>
    Click Me
  </Button>
  <Button variant="secondary" modifier="warning" style={style}>
    Click Me
  </Button>
  <Button variant="secondary" modifier="success" style={style}>
    Click Me
  </Button>
  <div style={{ width: 300 }}>
    <Button block variant="secondary" modifier="action" style={style}>
      Click Me
    </Button>
  </div>
</div>;
```

Secondary, disabled:

```js
const style = {
  marginRight: 16,
};

<div>
  <Button variant="secondary" disabled style={style}>
    Click Me
  </Button>
  <Button variant="secondary" disabled modifier="action" style={style}>
    Click Me
  </Button>
  <Button variant="secondary" disabled modifier="danger" style={style}>
    Click Me
  </Button>
  <Button variant="secondary" disabled modifier="warning" style={style}>
    Click Me
  </Button>
  <Button variant="secondary" disabled modifier="success" style={style}>
    Click Me
  </Button>
</div>;
```

Secondary, icon:

```js
import { Icon } from 'nordnet-ui-kit';
const icon = <Icon.Edit />;

const style = {
  marginRight: 16,
};

<div>
  <Button variant="secondary" icon={icon} style={style} />
  <Button variant="secondary" modifier="action" icon={icon} style={style} />
  <Button variant="secondary" modifier="danger" icon={icon} style={style} />
  <Button variant="secondary" modifier="warning" icon={icon} style={style} />
  <Button variant="secondary" modifier="success" icon={icon} style={style} />
</div>;
```

Link button:

```js
const style = {
  marginRight: 16,
};

<div>
  <Button variant="link" style={style}>
    Click Me
  </Button>
  <Button variant="link" modifier="action" style={style}>
    Click Me
  </Button>
  <Button variant="link" modifier="danger" style={style}>
    Click Me
  </Button>
  <Button variant="link" modifier="warning" style={style}>
    Click Me
  </Button>
  <Button variant="link" modifier="success" style={style}>
    Click Me
  </Button>
</div>;
```

Link icon:

```js
import { Icon, Logo } from 'nordnet-ui-kit';
const icon = <Icon.Edit />;

const style = {
  marginRight: 16,
};

const groupstyle = {
  marginTop: 16,
};

<div>
  <div style={groupstyle}>
    <Button variant="link" icon={icon} style={style} />
    <Button variant="link" icon={icon} modifier="action" style={style} />
    <Button variant="link" icon={icon} modifier="danger" style={style} />
    <Button variant="link" icon={icon} modifier="warning" style={style} />
    <Button variant="link" icon={icon} modifier="success" style={style} />
  </div>
  <div style={groupstyle}>
    <Button variant="link" style={style}>
      <Logo />
    </Button>
  </div>
</div>;
```

Href button:

```js
const style = {
  marginRight: 16,
};

<div>
  <Button variant="primary" modifier="action" style={style} href="/">
    I will link you
  </Button>
  <Button variant="primary" modifier="action" style={style} href="/" disabled>
    I won't link you
  </Button>
</div>;
```

Sizes:

```js
import { Icon } from 'nordnet-ui-kit';
const icon = <Icon.Edit />;

const style = {
  marginRight: 16,
  verticalAlign: 'bottom',
};

const groupstyle = {
  marginTop: 16,
};

<div>
  <div style={groupstyle}>
    <Button variant="primary" size="xs" style={style}>
      Button xs
    </Button>
    <Button variant="primary" size="sm" style={style}>
      Button sm (Default)
    </Button>
    <Button variant="primary" size="md" style={style}>
      Button md
    </Button>
    <Button variant="primary" size="lg" style={style}>
      Button lg
    </Button>
  </div>
  <div style={groupstyle}>
    <Button variant="secondary" size="xs" style={style}>
      Button xs
    </Button>
    <Button variant="secondary" size="sm" style={style}>
      Button sm (Default)
    </Button>
    <Button variant="secondary" size="md" style={style}>
      Button md
    </Button>
    <Button variant="secondary" size="lg" style={style}>
      Button lg
    </Button>
  </div>
  <div style={groupstyle}>
    <Button variant="secondary" icon={icon} size="xs" style={style} />
    <Button variant="secondary" icon={icon} size="sm" style={style} />
    <Button variant="secondary" icon={icon} size="md" style={style} />
    <Button variant="secondary" icon={icon} size="lg" style={style} />
  </div>
  <div style={groupstyle}>
    <Button variant="primary" modifier="action" size="xs" style={style}>
      Button xs
    </Button>
    <Button variant="primary" modifier="action" icon={icon} size="xs" style={style}>
      Button xs
    </Button>
    <Button variant="secondary" modifier="action" icon={icon} size="xs" style={style} />
    <Button variant="link" modifier="action" icon={icon} iconAbove size="xs" style={style}>
      Button xs
    </Button>
  </div>
  <div style={groupstyle}>
    <Button variant="primary" modifier="action" size="sm" style={style}>
      Button sm
    </Button>
    <Button variant="primary" modifier="action" icon={icon} size="sm" style={style}>
      Button sm (Default)
    </Button>
    <Button variant="secondary" modifier="action" icon={icon} size="sm" style={style} />
    <Button variant="link" modifier="action" icon={icon} iconAbove size="sm" style={style}>
      Button sm
    </Button>
  </div>
  <div style={groupstyle}>
    <Button variant="primary" modifier="action" size="md" style={style}>
      Button md
    </Button>
    <Button variant="primary" modifier="action" icon={icon} size="md" style={style}>
      Button md
    </Button>
    <Button variant="secondary" modifier="action" icon={icon} size="md" style={style} />
    <Button variant="link" modifier="action" icon={icon} iconAbove size="md" style={style}>
      Button md
    </Button>
  </div>
  <div style={groupstyle}>
    <Button variant="primary" modifier="action" size="lg" style={style}>
      Button lg
    </Button>
    <Button variant="primary" modifier="action" icon={icon} size="lg" style={style}>
      Button lg
    </Button>
    <Button variant="secondary" modifier="action" icon={icon} size="lg" style={style} />
    <Button variant="link" modifier="action" icon={icon} iconAbove size="lg" style={style}>
      Button lg
    </Button>
  </div>
</div>;
```
