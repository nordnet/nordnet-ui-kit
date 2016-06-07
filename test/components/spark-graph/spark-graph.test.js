import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SparkGraph from '../../../src/components/spark-graph';

describe('<SparkGraph />', () => {
  let component;
  const points = [1, 2, 4, 2, 3];

  describe('with default props', () => {
    beforeEach(() => {
      component = shallow(<SparkGraph points={ points } />);
    });
    it('should have a svg height of 100%', () => {
      expect(component.prop('style').height).to.equal('100%');
    });
    it('should have a svg width of 128px', () => {
      expect(component.prop('style').width).to.equal('100%');
    });
    it('should have a stroke width of 1px', () => {
      expect(component.childAt(0).prop('strokeWidth')).to.equal(1);
    });
  });
  describe('with points [1, 2], height=32, width=128', () => {
    beforeEach(() => {
      component = shallow(<SparkGraph points={ [1, 2] } height={ 32 } width={ 128 } />);
    });
    it('should have a path equal to: M 0 31.5  L 128 0.5', () => {
      expect(component.childAt(0).prop('d')).to.equal('M 0 31.5  L 128 0.5');
    });
    describe('and strokeWidth=10', () => {
      beforeEach(() => {
        component = shallow(<SparkGraph points={ [1, 2] } strokeWidth={ 10 } height={ 32 } width={ 128 } />);
      });
      it('should have a path with a strokeWidth of 10', () => {
        expect(component.childAt(0).prop('strokeWidth')).to.equal(10);
      });
      it('should have a path equal to: M 0 27  L 128 5', () => {
        expect(component.childAt(0).prop('d')).to.equal('M 0 27  L 128 5');
      });
    });
  });
  describe('with stroke=green, height=100, width=200', () => {
    beforeEach(() => {
      component = shallow(<SparkGraph points={ points } stroke="green" height={ 100 } width={ 200 } />);
    });
    it('should have a svg width of 200px', () => {
      expect(component.prop('style').width).to.equal('200px');
    });
    it('should have a svg height of 100px', () => {
      expect(component.prop('style').height).to.equal('100px');
    });
    it('should have a path with a green stroke', () => {
      expect(component.childAt(0).prop('stroke')).to.equal('green');
    });
  });
  describe('no dimensions set and points=[1, 2]', () => {
    beforeEach(() => {
      component = shallow(
        <SparkGraph points={ [1, 2] } />
      );
    });
    it('should have a path equal to: M 0 31.5  L 128 0.5 in a state of 128x32px', () => {
      component.setState({ width: 128, height: 32 });
      expect(component.find('path').prop('d')).to.equal('M 0 31.5  L 128 0.5');
    });
    it('should have a path equal to: M 0 99.5  L 200 0.5 in a state of 200x100px', () => {
      component.setState({ width: 200, height: 100 });
      expect(component.find('path').prop('d')).to.equal('M 0 99.5  L 200 0.5');
    });
  });
});
