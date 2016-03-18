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
          <Col xs={ 6 } sm={ 3 } md>
            <Button primary>Primary: default</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button primary modifier="danger">Primary: danger</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button primary modifier="warning">Primary: warning</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button primary modifier="success">Primary: success</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button primary disabled>Primary: disabled</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={ 6 } sm={ 3 } md>
            <Button secondary>Secondary: default</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button secondary modifier="danger">Secondary: danger</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button secondary modifier="warning">Secondary: warning</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button secondary modifier="success">Secondary: success</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button secondary disabled>Secondary: disabled</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={ 6 } sm={ 3 } md>
            <Button link>Link: default</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button link modifier="danger">Link: danger</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button link modifier="warning">Link: warning</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button link modifier="success">Link: success</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button link disabled>Link: disabled</Button>
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
