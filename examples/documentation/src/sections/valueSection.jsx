import React from 'react';
import { Row, Col } from 'react-bem-grid';
import Section from '../components/section/section';
import Value from '../../../../src/components/value/value';

export default function valueSection() {
  const example = (
    <Row>
      <Col xs={ 6 } sm={ 3 }>
        <Value label="Value xs" xs>10000</Value>
      </Col>
      <Col xs={ 6 } sm={ 3 }>
        <Value label="Value sm" sm>10000</Value>
      </Col>
      <Col xs={ 6 } sm={ 3 }>
        <Value label="Value md" md>10000</Value>
      </Col>
      <Col xs={ 6 } sm={ 3 }>
        <Value label="Value lg" lg>10000</Value>
      </Col>
    </Row>
  );

  const code = '<Value label="Amount">10000</Value>';

  return (
    <Section
      title="Value"
      description="This is the value component"
      example={ example }
      code={ code }
    />
  );
}
