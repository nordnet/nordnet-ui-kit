import React from 'react';
import sinon from 'sinon';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses, theme } from '../../../src';
import { Component as Dropdown, styles } from '../../../src/components/dropdown/dropdown';

describe('<Dropdown />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Dropdown classes={classes} theme={theme} toggle="Dropdown" actions={[{ label: 'log', action: () => {} }]} />);
  });

  it('should render <div> as container', () => expect(wrapper.type()).to.equal('div'));
  it("should contain a <button> with class 'toggle'", () => assert.ok(wrapper.find('button').hasClass(classes.toggle)));
  it('should be closed by default', () => expect(wrapper.state('actionsOpen')).to.equal(false));
  it('should be open after click', () => {
    wrapper.find(`button.${classes.toggle}`).simulate('click');
    expect(wrapper.state('actionsOpen')).to.equal(true);
  });

  it('should be closed after click when closeOnAction is true', () => {
    const closeWrapper = shallow(
      <Dropdown closeOnAction classes={classes} theme={theme} toggle="Dropdown" actions={[{ label: 'log', action: () => {} }]} />,
    );
    closeWrapper.find(`button.${classes.toggle}`).simulate('click');
    closeWrapper
      .find('.action')
      .first()
      .simulate('click');
    expect(closeWrapper.state('actionsOpen')).to.equal(false);
  });

  it(`should have the ${classes.dropdown} class`, () => {
    expect(wrapper.hasClass(classes.dropdown)).to.equal(true);
  });

  it('should unsubscribe from click events on unmount', () => {
    const sandbox = sinon.sandbox.create();
    const removeEventSpy = sandbox.spy(document, 'removeEventListener');
    const handleClick = wrapper.instance().handleClick;
    wrapper.unmount();
    expect(removeEventSpy.calledWith('click', handleClick)).to.equal(true);
    sandbox.restore();
  });
});
