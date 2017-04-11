import React from 'react';
import { expect, assert } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import Dropdown from '../../../src/components/dropdown/dropdown';
import DropdownStyles from '../../../src/components/dropdown/dropdown-styles';

describe('<Dropdown />', () => {
  const shallow = createShallow(enzymeShallow);
  const classes = shallow.context.styleManager.render(DropdownStyles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Dropdown
        toggle="Dropdown"
        actions={[{ label: 'log', function() {} }]}
      />);
  });

  it('should render <div> as container', () => expect(wrapper.type()).to.equal('div'));
  it('should contain a <button> with class \'dropdown__toggle\'', () => assert.ok(wrapper.find('button').hasClass('dropdown__toggle')));
  it('should be closed by default', () => expect(wrapper.state('actionsOpen')).to.equal(false));
  it('should be open after click', () => {
    wrapper.find('button.dropdown__toggle').simulate('click');
    expect(wrapper.state('actionsOpen')).to.equal(true);
  });

  it(`should have the ${classes.dropdown} class`, () => {
    expect(wrapper.hasClass(classes.dropdown)).to.equal(true);
  });
});
