import React from 'react';
import PureComponent from 'react-pure-render/component';
import Section from '../components/section/section';
import Pane from '../../../../src/components/pane/pane';

class PaneSection extends PureComponent {
  renderTabContent(number) {
    return (
      <div style={{ padding: '1.6rem' }}>
        This is tab { number }!
      </div>
    );
  }

  render() {
    const example = (
      <Pane tabs={[{
        label: 'Tab 1',
        body: this.renderTabContent(1),
      }, {
        label: 'Tab 2',
        body: this.renderTabContent(2),
      }, {
        label: 'Tab 3',
        body: this.renderTabContent(3),
      }]} />
    );

    const code = `const tabs = [{
  label: 'Tab 1',
  body: <div>This is tab 1!</div>
}, {
  label: 'Tab 2',
  body: <div>This is tab 2!</div>
}, {
  label: 'Tab 3',
  body: <div>This is tab 3!</div>
}];

<Pane tabs={ tabs } />`;


    return (
      <Section
        title="Pane"
        description="This is the pane component"
        example={ example }
        code={ code }
      />
    );
  }
}

export default PaneSection;
