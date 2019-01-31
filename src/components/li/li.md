# Basic list example
```js
const accounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
<ul>
  {accounts.map(account => (
    <Li key={account}>
      {`Account ${account}`}
    </Li>
  ))}
</ul>
```

# Basic list example 2
```js
const accounts = [0, 1, 2, 3];
<ul>
  {accounts.map(account => (
    <Li key={account} style={{ borderColor: 'black', padding: '10px', textAlign: 'center' }}>
      {`Account ${account}`}
    </Li>
  ))}
</ul>
```