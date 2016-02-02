import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Button from '../../../src/components/button/button';

describe('<Button />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Button>Hello</Button>));

  it('should render <button> by default', () => expect(wrapper.type()).to.equal('button'));
});
