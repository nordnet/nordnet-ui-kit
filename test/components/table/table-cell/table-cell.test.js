import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../../src';
import { Component as TableCell, styles } from '../../../../src/components/table-cell/table-cell';

describe('<TableCell />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TableCell tagName="td" classes={classes} />);
  });

  it('should render a <td />', () => {
    expect(wrapper.type()).to.equal('td');
  });

  it(`should render a component with the ${classes.td} class`, () => {
    expect(wrapper.hasClass(classes.td)).to.equal(true);
  });

  it('should render a component with ellipsis class by default', () => {
    expect(wrapper.find('div.ellipsis')).to.have.length(1);
  });

  it('should not render a component with td--ellipsis, when ellipsis have false input', () => {
    wrapper = shallow(<TableCell tagName="td" classes={classes} ellipsis={false} />);
    expect(wrapper.find('div.ellipsis')).to.have.length(0);
  });
});
