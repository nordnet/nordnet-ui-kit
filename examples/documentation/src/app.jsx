import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Grid } from 'react-bem-grid';
import './app.scss';
import Nav from './components/nav/nav';
import AlertSection from './sections/alertSection';
import ButtonSection from './sections/buttonSection';
import CollapsibleSection from './sections/collapsibleSection';
import DropdownSection from './sections/dropdownSection';
import InputSection from './sections/inputSection';
import PaneSection from './sections/paneSection';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        'Alert',
        'Button',
        'Collapsible',
        'Dropdown',
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
          <CollapsibleSection />
          <DropdownSection />
          <InputSection />
          <PaneSection />
        </Grid>
      </div>
    );
  }
}

export default App;
