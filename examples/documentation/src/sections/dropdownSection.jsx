import React from 'react';
import PureComponent from 'react-pure-render/component';
import Section from '../components/section/section';
import Dropdown from '../../../../src/components/dropdown/dropdown';

class DropdownSection extends PureComponent {
  render() {
    const example = (
      <Dropdown toggle="Toggle dropdown" actions={[{
        label: 'Action 1',
        action: () => alert('You pressed action 1'),
      }, {
        label: 'Action 2',
        action: () => alert('You pressed action 2'),
      }]} />
    );

    const code = `const actions = [{
  label: 'Action 1',
  action: () => alert('You pressed action 1'),
}, {
  label: 'Action 2',
  action: () => alert('You pressed action 2'),
}];

<Dropdown toggle="Toggle dropdown" actions={ actions } />`;


    return (
      <Section
        title="Dropdown"
        description="This is the dropdown component"
        example={ example }
        code={ code }
      />
    );
  }
}

export default DropdownSection;
