import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../src';
import { Component as Pane, styles } from '../../../src/components/pane/pane';

describe('<Pane />', () => {
  const classes = mockClasses(styles);

  describe('When <Pane /> don´t have any tabs', () => {
    const wrapper = shallow(<Pane classes={classes} />);
    it('should render null', () => {
      expect(wrapper.type()).to.equal(null);
    });
  });

  describe('When <Pane /> is correctly populated with default props', () => {
    const tabs = [
      {
        label: 'Tab 1',
        body: <div>This is tab 1!</div>,
      },
      {
        label: 'Tab 2',
        body: <div>This is tab 2!</div>,
      },
      {
        label: 'Tab 3',
        body: <div>This is tab 3!</div>,
      },
    ];

    let wrapper;
    let renderedTabs;

    beforeEach(() => {
      wrapper = shallow(<Pane classes={classes} tabs={tabs} />);
      renderedTabs = wrapper.children().children().find('li');
    });

    it('should render <div> as container', () => {
      expect(wrapper.type()).to.equal('div');
    });

    it('should have the class pane', () => {
      expect(wrapper.hasClass(classes.pane)).to.equal(true);
    });

    it('should render children', () => {
      expect(wrapper.children().length).to.equal(2);
    });

    it('should render tabs', () => {
      expect(renderedTabs.length).to.equal(3);
    });

    it('should have first tab as active', () => {
      expect(renderedTabs.at(0).hasClass(classes.active));
    });

    it('default size should be md', () => {
      expect(renderedTabs.at(0).hasClass(classes.md)).to.equal(true);
    });
  });

  describe('When <Pane /> is correctly populated with another size', () => {
    const tabs = [
      {
        label: 'Tab 1',
        body: <div>This is tab 1!</div>,
      },
    ];
    const wrapper = shallow(<Pane classes={classes} tabs={tabs} size="lg" />);
    it('should render <div> as container', () => {
      expect(wrapper.type()).to.equal('div');
    });

    it('should have the class pane', () => {
      expect(wrapper.hasClass(classes.pane)).to.equal(true);
    });

    it('should have class lg', () => {
      expect(wrapper.children().children().find('li').at(0).hasClass(classes.lg)).to.equal(true);
    });
  });
});
