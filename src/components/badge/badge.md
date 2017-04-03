    const { provideTheme, createTheme } = require('../../'); // 'nordnet-ui-kit'
    const App = ({ children }) => (<div>{ children }</div>);
    const AppWithTheme = provideTheme(createTheme(), App);

    const style = {
      marginRight: '1.6rem',
    };

    <AppWithTheme>
      <Badge style={ style }>Pending</Badge>
      <Badge modifier="danger" style={ style }>Danger</Badge>
      <Badge modifier="warning" style={ style }>Warning</Badge>
      <Badge modifier="success" style={ style }>Success</Badge>
    </AppWithTheme>
