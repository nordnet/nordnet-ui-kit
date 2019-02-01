import React from 'react';
import { shallow } from 'enzyme';
import FakePlaceholder from './fake-placeholder';

const defaultProps = { classes: { selectable: 'selectable' } };

const renderComponent = props => shallow(<FakePlaceholder {...defaultProps} {...props} />);

describe('<FakePlaceholder />', () => {
  test('has class input__placeholder', () => {
    const wrapper = renderComponent();
    expect(wrapper.hasClass('input__placeholder')).toBe(true);
  });

  test('has class selectable when selectable is true', () => {
    const wrapper = renderComponent({ selectable: true });
    expect(wrapper.hasClass('selectable')).toBe(true);
  });

  test('renders placeholder when set', () => {
    const placeholder = 'test321';
    const wrapper = renderComponent({ placeholder });
    expect(wrapper.text()).toBe(placeholder);
  });

  test('renders label if placeholder is not set', () => {
    const label = 'test321';
    const wrapper = renderComponent({ label });
    expect(wrapper.text()).toBe(label);
  });
});
