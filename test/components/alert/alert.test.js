import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Alert from '../../../src/components/alert/alert';

describe('<Alert />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Alert>Hello</Alert>));

  it('should render <div> as container', () => expect(wrapper.type()).to.equal('div'));
});
