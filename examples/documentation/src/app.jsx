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
import DatePickerSection from './sections/datePickerSection';
import PaneSection from './sections/paneSection';
import IconSection from './sections/iconSection';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        'Alert',
        'Button',
        'Collapsible',
        'Dropdown',
        'Input',
        'Pane',
        'Icons',
      ],
    };
  }

  render() {
    const sections = [
      <AlertSection />,
      <ButtonSection />,
      <CollapsibleSection />,
      <DropdownSection />,
      <InputSection />,
      <DatePickerSection />,
      <PaneSection />,
      <IconSection />,
    ];

    return (
      <div>
        <Nav items={ this.state.navItems } />
        <Grid>
          {sections.map((section, index) => (
            <span key={ index }>
              { section }
            </span>))}
        </Grid>
      </div>
    );
  }
}

export default App;
