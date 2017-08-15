# In App usage

You need `ThemeProvider` from `react-jss` and `theme` from `nordnet-ui-kit` in your App.

```js
// src/root.js
import { ThemeProvider } from 'react-jss';
import { theme } from 'nordnet-ui-kit';
import App from './App'

const Root = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

ReactDOM.render(Root, document.getElementById('app'));
```

```js
// src/App.js
import { Button } from 'nordnet-ui-kit';

const App = props => (
  <div>
    <Button variant="primary" modifier="success">
      Success
    </Button>
  </div>
);

export default App;
```
