import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import Spinner from '../../../src/components/spinner';
import SpinnerStyles from '../../../src/components/spinner/spinner-styles';

describe('<Spinner />', () => {
  const shallow = createShallow(enzymeShallow);
  const classes = shallow.context.styleManager.render(SpinnerStyles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });

  it('should render <div> as container', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it(`should have the class ${classes.spinner}`, () => {
    expect(wrapper.hasClass(classes.spinner)).to.equal(true);
  });

  it('should have a height of 16', () => {
    expect(wrapper.prop('style').width).to.equal(16);
  });

  it('should have a width of 16', () => {
    expect(wrapper.prop('style').height).to.equal(16);
  });

  describe('<Spinner size={ 100 } />', () => {
    beforeEach(() => {
      wrapper = shallow(<Spinner size={100} />);
    });

    it('should have a height of 100', () => {
      expect(wrapper.prop('style').width).to.equal(100);
    });

    it('should have a width of 10px', () => {
      expect(wrapper.prop('style').height).to.equal(100);
    });
  });

  describe('<Spinner gradientStops={ 90 } />', () => {
    beforeEach(() => {
      wrapper = shallow(<Spinner gradientStops={90} />);
    });

    it('should have 90 gradient stops in total', () => {
      expect(wrapper.find('.spinner__gradient rect')).to.have.length(90);
    });
  });
});
