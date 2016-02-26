import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Row, Col } from 'react-bem-grid';
import Section from '../components/section/section';
import Input from '../../../../src/components/input/input';

class InputSection extends PureComponent {
  render() {
    const selectOptions = [{
      label: 'Option 1',
      value: 1,
    }, {
      label: 'Option 2',
      value: 2,
    }, {
      label: 'Option 3',
      value: 3,
    }];

    const example = (
      <div>
        <Row className="input-container">
          <Col xs={ 6 } sm={ 3 }>
            <Input type="text" id="input-text-1" label="Text input" placeholder="Enter text" />
          </Col>
          <Col xs={ 6 } sm={ 3 }>
            <Input type="text" id="input-text-2" label="Text input with error" placeholder="Enter text" value="Incorrect value" hasError />
          </Col>
          <Col xs={ 6 } sm={ 3 }>
            <Input type="text" id="input-text-3" label="Text input with warning" placeholder="Enter text" value="Dubious value" hasWarning />
          </Col>
          <Col xs={ 6 } sm={ 3 }>
            <Input type="text" id="input-text-4" label="Text input with success" placeholder="Enter text" value="Correct value" hasSuccess />
          </Col>
        </Row>
        <Row className="input-container">
          <Col xs={ 6 } sm={ 3 }>
            <Input type="number" id="input-number-1" label="Number input" placeholder="Enter number" />
          </Col>
          <Col xs={ 6 } sm={ 3 }>
            <Input type="number" id="input-number-2" label="Number input with error" placeholder="Enter number" value={ 0 } hasError />
          </Col>
          <Col xs={ 6 } sm={ 3 }>
            <Input type="number" id="input-number-3" label="Number input with warning" placeholder="Enter number" value={ 1 } hasWarning />
          </Col>
          <Col xs={ 6 } sm={ 3 }>
            <Input type="number" id="input-number-4" label="Number input with success" placeholder="Enter number" value={ 2 } hasSuccess />
          </Col>
        </Row>
        <Row className="input-container">
          <Col xs={ 6 } sm={ 3 }>
            <Input type="select" id="input-select-1" label="Select input" placeholder="Pick an option" options = { selectOptions } />
          </Col>
          <Col xs={ 6 } sm={ 3 }>
            <Input type="select" id="input-select-2" label="Select input with error" placeholder="Pick an option" options = { selectOptions } value="1" hasError />
          </Col>
          <Col xs={ 6 } sm={ 3 }>
            <Input type="select" id="input-select-3" label="Select input with warning" placeholder="Pick an option" options = { selectOptions } value="2" hasWarning />
          </Col>
          <Col xs={ 6 } sm={ 3 }>
            <Input type="select" id="input-select-4" label="Select input with success" placeholder="Pick an option" options = { selectOptions } value="3" hasSuccess />
          </Col>
        </Row>
      </div>
    );

    const code = `<Input
  type="text"
  id="input-text-2"
  label="Text input with error"
  placeholder="Enter value"
  value="Incorrect value"
  hasError
/>`;

    return (
      <Section
        title="Input"
        description="This is the input component"
        example={ example }
        code={ code }
      />
    );
  }
}

export default InputSection;
