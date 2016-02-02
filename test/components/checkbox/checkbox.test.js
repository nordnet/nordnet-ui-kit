import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Checkbox from '../../../src/components/checkbox/checkbox';

describe('<Checkbox />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Checkbox label="Checkbox" />));

  it('should render <label> as container', () => expect(wrapper.type()).to.equal('label'));
  it('should contain an <input type="checkbox">', () => expect(wrapper.find('input').prop('type')).to.equal('checkbox'));
});
