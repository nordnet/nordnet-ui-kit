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
            <Button variant="primary">Variant: Primary </Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button variant="primary" modifier="danger">Primary: danger</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button variant="primary" modifier="warning">Primary: warning</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button variant="primary" modifier="success">Primary: success</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button variant="primary" disabled>Primary: disabled</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={ 6 } sm={ 3 } md>
            <Button variant="secondary">Variant: Secondary</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button variant="secondary" modifier="danger">Secondary: danger</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button variant="secondary" modifier="warning">Secondary: warning</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button variant="secondary" modifier="success">Secondary: success</Button>
          </Col>
          <Col xs={ 6 } sm={ 3 } md>
            <Button variant="secondary" disabled>Secondary: disabled</Button>
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

    const code = `<Button variant="primary" modifier="success" onClick={ this.clickHandler }>
  Click me!
</Button>`;

    const explanation = `
Deprecation note: From '0.0.17' 'primary' and 'secondary' props are deprecated.
Use 'variant="primary"' or 'variant="secondary"' instead. See issue #26.
Support will be removed in next major version update.
`;

    return (
      <Section
        title="Button"
        description="This is the button component"
        example={ example }
        explanation= { explanation }
        code={ code }
      />
    );
  }
}

export default ButtonSection;
