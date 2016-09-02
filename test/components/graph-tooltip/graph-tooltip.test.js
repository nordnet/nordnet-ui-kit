import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import GraphTooltip from '../../../src/components/graph-tooltip/graph-tooltip';
import CompareTooltip from '../../../src/components/graph-tooltip/compare-tooltip';
import InstrumentTooltip from '../../../src/components/graph-tooltip/instrument-tooltip';
import data from '../../../src/components/graph-tooltip/example-data';

describe('<GraphTooltip />', () => {
  let wrapper;

  const types = [{
    name: 'compare',
    elementName: '<CompareTooltip />',
    value: CompareTooltip,
  }, {
    name: 'instrument',
    elementName: '<InstrumentTooltip />',
    value: InstrumentTooltip,
  }];

  types.forEach((type) => {
    describe(`with type=${type.name}`, () => {
      beforeEach(() => {
        wrapper = shallow(<GraphTooltip type={ type.name } { ...data } />);
      });
      it('should render a div', () => {
        expect(wrapper.shallow().type()).to.equal('div');
      });
      it(`should have class ${type.name}-tooltip`, () => {
        expect(wrapper.shallow().hasClass(`${type.name}-tooltip`));
      });
      it('should render the date', () => {
        expect(wrapper.shallow().html()).to.contain(data.date);
      });
      it('should render the names of the series', () => {
        const html = wrapper.shallow().html();
        data.points.forEach(point => {
          expect(html).to.contain(point.name);
        });
      });
      if (type.name === 'compare') {
        it('should show values as percentage', () => {
          const html = wrapper.shallow().html();
          data.points.forEach(point => {
            expect(html).to.contain(`${point.value}%`);
          });
        });
        it('should not render ohlc', () => {
          const html = wrapper.shallow().html();
          ['open', 'high', 'low', 'close'].map(key => data[key]).forEach(t => {
            if (t) {
              expect(html).to.not.contain(t);
            }
          });
        });
      } else {
        it('should render ohlc', () => {
          const html = wrapper.shallow().html();
          ['open', 'high', 'low', 'close'].map(key => data[key]).forEach(t => {
            if (t) {
              expect(html).to.contain(t);
            }
          });
        });
      }
    });
  });
});
