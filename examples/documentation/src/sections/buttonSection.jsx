import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Row, Col } from 'react-bem-grid';
import Section from '../components/section/section';
import Button from '../../../../src/components/button/button';
import './buttonSection.scss';

class ButtonSection extends PureComponent {
  render() {
    const example = (
      <div>
        <Row>
          <Col xs={ 6 } sm={ 2 }>
            <Button primary>Primary: Default</Button>
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Button primary modifier="danger">Primary: Danger</Button>
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Button primary modifier="warning">Primary: Warning</Button>
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Button primary modifier="success">Primary: Success</Button>
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Button primary disabled>Primary: Disabled</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={ 6 } sm={ 2 }>
            <Button secondary>Secondary: Default</Button>
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Button secondary modifier="danger">Secondary: Danger</Button>
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Button secondary modifier="warning">Secondary: Warning</Button>
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Button secondary modifier="success">Secondary: Success</Button>
          </Col>
          <Col xs={ 6 } sm={ 2 }>
            <Button secondary disabled>Secondary: Disabled</Button>
          </Col>
        </Row>
      </div>
    );

    const code = `<Button primary modifier="success" onClick={ this.clickHandler }>
  Click me!
</Button>`;

    return (
      <Section
        title="Button"
        description="This is the button component"
        example={ example }
        code={ code }
      />
    );
  }
}

export default ButtonSection;
