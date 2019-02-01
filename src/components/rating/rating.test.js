import React from 'react';
import { shallow } from 'enzyme';
import { Icon, mockClasses } from '../../';
import { Component as Rating, styles } from './rating';

const classes = mockClasses(styles);

const renderComponent = props => {
  const defaultProps = {
    icon: Icon.Star,
    size: 20,
    rating: 4,
    maxRating: 6,
    classes: {
      ...classes,
      active: 'active',
      inactive: 'inactive',
    },
  };
  const newProps = { ...defaultProps, ...props };

  return shallow(<Rating {...newProps} />);
};

test('Should have same number active stars as rating says', () => {
  const rating = 4;
  const component = renderComponent({ rating });
  const active = component.find('.active');
  const inactive = component.find('.inactive');
  expect(active).toHaveLength(4);
  expect(inactive).toHaveLength(2);
});
