import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Grid } from 'react-bem-grid';
import './app.scss';
import Nav from './components/nav/nav';
import AlertSection from './sections/alertSection';
import ButtonSection from './sections/buttonSection';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        'Alert',
      ],
    };
  }

  render() {
    return (
      <div>
        <Nav items={ this.state.navItems } />
        <Grid>
          <AlertSection />
          <ButtonSection />
        </Grid>
      </div>
    );
  }
}

export default App;
