import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Spinner from '../../../src/components/spinner';

describe('<Spinner />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });

  it('should render <div> as container', () => {
    expect(wrapper.type()).to.equal('div');
  });
  it('should have a height of 1.6rem', () => {
    expect(wrapper.prop('style').width).to.equal('1.6rem');
  });
  it('should have a width of 1.6rem', () => {
    expect(wrapper.prop('style').height).to.equal('1.6rem');
  });

  describe('<Spinner size={ 100 } />', () => {
    beforeEach(() => {
      wrapper = shallow(<Spinner size={ 100 } />);
    });

    it('should have a height of 10rem', () => {
      expect(wrapper.prop('style').width).to.equal('10rem');
    });
    it('should have a width of 10rem', () => {
      expect(wrapper.prop('style').height).to.equal('10rem');
    });
  });

  describe('<Spinner color="red" />', () => {
    beforeEach(() => {
      wrapper = shallow(<Spinner color="red" />);
    });

    it('should have a red fill', () => {
      expect(wrapper.find('.spinner__circle').prop('fill')).to.equal('red');
    });
  });

  describe('<Spinner gradientStops={ 90 } />', () => {
    beforeEach(() => {
      wrapper = shallow(<Spinner gradientStops={ 90 } />);
    });

    it('should have 90 gradient stops in total', () => {
      expect(wrapper.find('.spinner__gradient rect')).to.have.length(90);
    });
  });
});
