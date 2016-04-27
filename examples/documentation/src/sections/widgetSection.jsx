import React from 'react';
import { Row, Col } from 'react-bem-grid';
import Section from '../components/section/section';
import Widget from '../../../../src/components/widget/widget';

export default function valueSection() {
  const pStyle = {
    margin: 0,
  };

  const example = (
    <Row>
      <Col xs={ 12 } sm={ 4 }>
        <Widget header="Amount">
          <p style={ pStyle }>This is a widget</p>
        </Widget>
      </Col>
      <Col xs={ 12 } sm={ 4 }>
        <Widget header="Amount">
          <p style={ pStyle }>This is a widget</p>
        </Widget>
      </Col>
      <Col xs={ 12 } sm={ 4 }>
        <Widget header="Amount">
          <p style={ pStyle }>This is a widget</p>
        </Widget>
      </Col>
    </Row>
  );

  const code = `<Widget label="Amount">
  <p>This is a widget</p>
</Widget>`;

  return (
    <Section
      title="Widget"
      description="This is the widget component"
      example={ example }
      code={ code }
    />
  );
}
