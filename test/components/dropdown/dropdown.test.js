import React from 'react';
import { shallow } from 'enzyme';
import { expect, assert } from 'chai';
import Dropdown from '../../../src/components/dropdown/dropdown';

describe('<Dropdown />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Dropdown toggle="Dropdown" actions={[
    {
      label: 'log',
      action: function() { console.log('I was clicked!'); },
    },
  ]} />));

  it('should render <div> as container', () => expect(wrapper.type()).to.equal('div'));
  it('should contain a <button> with class \'dropdown__toggle\'', () => assert.ok(wrapper.find('button').hasClass('dropdown__toggle')));
  it('should be closed by default', () => expect(wrapper.state('actionsOpen')).to.equal(false));
  it('should be open after click', () => {
    wrapper.find('button.dropdown__toggle').simulate('click');
    expect(wrapper.state('actionsOpen')).to.equal(true);
  });
});
