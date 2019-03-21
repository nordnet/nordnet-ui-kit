Primary, simple (default):

```js
<div>
  <ProgressBar value={3} max={20} />
</div>
```

Bigger, with numbers:

```js
<div>
  <ProgressBar size="lg" printNumbers value={3} max={5} />
</div>
```

Advanced (experimental):

```js
const clickables = [
  { label: 'A', reached: true, href: '/foo/bar', title: 'A tag' },
  { label: 'B', reached: false, onClick: () => alert('hej'), title: 'BUTTON tag' },
  { label: 'C', reached: true, disabled: true, title: 'Disabled' },
  { label: 'D', reached: false, disabled: true, title: 'Disabled' },
  { label: 'E', reached: true, active: true, title: 'Active' },
];

<div>
  <ProgressBar variant="primary" size="md" printNumbers clickables={clickables} value={6} max={9} />
</div>;
```
