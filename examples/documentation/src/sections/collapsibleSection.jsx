import React from 'react';
import PureComponent from 'react-pure-render/component';
import Section from '../components/section/section';
import Button from '../../../../src/components/button/button';
import Collapsible from '../../../../src/components/collapsible/collapsible';
import './buttonSection.scss';

class ButtonSection extends PureComponent {
  render() {
    const example = (
      <div style={{ paddingBottom: '1.6rem' }}>
        <Collapsible toggle={ <Button secondary>Open collapsible</Button> }>
          <p style={{ margin: '0', padding: '1.6rem 0' }}>Hello there!</p>
        </Collapsible>
      </div>
    );

    const code = `const toggle = <Button secondary>Open collapsible</Button>;

<Collapsible toggle={ toggle }>
  <p>Hello there!</p>
</Collapsible>`;

    const explanation = <p>The collpasible component has been deprecated in favour of <a href="https://github.com/nkbt/react-collapse" target="_blank">react-collapse</a>.</p>;

    return (
      <Section
        title="Collapsible"
        description="This is the collapsible component"
        example={ example }
        code={ code }
        explanation={ explanation }
      />
    );
  }
}

export default ButtonSection;
