import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Spinner from '../../../src/components/spinner';

describe('<Spinner />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });

  it('should render <div> as container', () => expect(wrapper.type()).to.equal('div'));
  it('should have a height of 16px', () => expect(wrapper.prop('style').height).to.equal(16));
  it('should have a width of 16px', () => expect(wrapper.prop('style').width).to.equal(16));

  describe('<Spinner height={ 100 } width={ 100 } />', () => {
    beforeEach(() => {
      wrapper = shallow(<Spinner height={ 100 } width={ 100 } />);
    });
    it('should have a height of 100px', () => expect(wrapper.prop('style').height).to.equal(100));
    it('should have a width of 100px', () => expect(wrapper.prop('style').width).to.equal(100));
  });
});
