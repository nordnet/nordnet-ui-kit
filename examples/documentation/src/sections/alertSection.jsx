import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Row, Col } from 'react-bem-grid';
import Section from '../components/section/section';
import Alert from '../../../../src/components/alert/alert';

class AlertSection extends PureComponent {
  render() {
    const example = (
      <Row>
        <Col xs={ 12 } sm={ 4 }>
          <Alert modifier="danger" header="Oh no!">There was an error placing your order</Alert>
        </Col>
        <Col xs={ 12 } sm={ 4 }>
          <Alert modifier="warning" header="Uh oh...">Something didn’t quite go to plan</Alert>
        </Col>
        <Col xs={ 12 } sm={ 4 }>
          <Alert modifier="success" header="Nice!">Your order has been placed :)</Alert>
        </Col>
      </Row>
    );

    const code = `<Alert modifier="success" header="Nice!">Your order has been placed :)</Alert>`;

    return (
      <Section
        title="Alert"
        description="This is the alert component"
        example={ example }
        code={ code }
      />
    );
  }
}

export default AlertSection;
