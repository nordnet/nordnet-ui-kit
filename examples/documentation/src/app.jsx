import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Grid, Row, Col } from 'react-bem-grid';
import './app.scss';
import Nav from './components/nav/nav';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [{
        label: 'Alerts',
      }],
    };
  }

  render() {
    return (
      <div>
        <Nav items={ this.state.navItems } />
        <Grid>
          <h1>Hello</h1>
        </Grid>
      </div>
    );
  }
}

export default App;
