import React from 'react';
import { shallow } from 'enzyme';
import { Component as Input } from './input';
import { Component as InputDefault, styles as inputDefaultStyles } from './input-default';
import { Component as InputSelect, styles as inputSelectStyles } from './input-select';
import {
  Component as InputCheckboxRadio,
  styles as inputCheckboxRadioStyles,
} from './input-checkbox-radio';
import HelpText from './help-text';
import { mockClasses, theme } from '../../';

const inputDefaultClasses = mockClasses(inputDefaultStyles);
const inputSelectClasses = mockClasses(inputSelectStyles);
const inputRadioClasses = mockClasses(inputCheckboxRadioStyles);

const classes = { ...inputDefaultClasses, ...inputSelectClasses, ...inputRadioClasses };

const defaultProps = {
  theme,
  classes,
  label: 'label',
  value: 'value',
  placeholder: 'placeholder',
};

const renderComponent = ({ Component = Input, props }) =>
  shallow(<Component {...defaultProps} {...props} />);

describe('<Input />', () => {
  let wrapper;
  const inputTypes = [
    {
      name: 'text',
      componentName: 'InputDefault',
      component: InputDefault,
    },
    {
      name: 'select',
      componentName: 'InputSelect',
      component: InputSelect,
    },
    {
      name: 'checkbox',
      componentName: 'InputCheckboxRadio',
      component: InputCheckboxRadio,
    },
    {
      name: 'radio',
      componentName: 'InputCheckboxRadio',
      component: InputCheckboxRadio,
    },
  ];

  inputTypes.forEach(type => {
    describe(`with type=${type.name}`, () => {
      beforeEach(() => {
        wrapper = renderComponent({
          Component: type.component,
          props: type.componentName === 'InputCheckboxRadio' ? { type: type.name } : {},
        });
      });

      test(`should render an <${type.componentName} />`, () => {
        wrapper = renderComponent({ props: { type: type.name } });
        expect(wrapper.type().InnerComponent).toBe(type.component);
      });

      if (type.componentName !== 'InputCheckboxRadio') {
        test(`should have class ${classes.input}`, () => {
          expect(wrapper.hasClass(classes.input)).toBe(true);
        });

        test('should print the label if text is entered', () => {
          expect(
            wrapper
              .find('Label')
              .shallow()
              .childAt(0)
              .text(),
          ).toBe('label');
        });

        test('should set the placeholder to the property placeholder', () => {
          if (type.component === InputSelect) {
            // For the InputSelect the placeholder is only visible if no "value" is set
            const wrapperWithoutValue = renderComponent({
              Component: type.component,
              props: { value: undefined },
            });

            expect(wrapperWithoutValue.find('FakePlaceholder').prop('placeholder')).toBe(
              'placeholder',
            );
          } else {
            expect(wrapper.find('NativeInput').prop('placeholder')).toBe('placeholder');
          }
        });

        test('should have class input--has-warning if warning', () => {
          wrapper.setProps({ hasWarning: true });
          expect(wrapper.hasClass('input--has-warning')).toBe(true);
        });

        test('should have class input--has-error if error', () => {
          wrapper.setProps({ hasError: true });
          expect(wrapper.hasClass('input--has-error')).toBe(true);
        });

        test('should have class input--has-success if success', () => {
          wrapper.setProps({ hasSuccess: true });
          expect(wrapper.hasClass('input--has-success')).toBe(true);
        });
      } else {
        test(`should have class ${classes['input-checkbox-radio']}`, () => {
          expect(wrapper.find(`.${classes['input-checkbox-radio']}`)).toHaveLength(1);
        });

        test('should have class input-checkbox-radio--has-error if error', () => {
          wrapper.setProps({ hasError: true });
          expect(wrapper.find('.input-checkbox-radio--has-error')).toHaveLength(1);
        });

        test('should have class input-checkbox-radio--has-success if success', () => {
          wrapper.setProps({ hasSuccess: true });
          expect(wrapper.find('.input-checkbox-radio--has-success')).toHaveLength(1);
        });

        test('should be unchecked by default', () => {
          expect(wrapper.find(`input[type="${type.name}"]`).prop('checked')).toBe(false);
        });

        test('should be checked if checked in props', () => {
          wrapper.setProps({ checked: true });
          expect(wrapper.find(`input[type="${type.name}"]`).prop('checked')).toBe(true);
        });

        test('should become checked if unchecked and clicked', () => {
          wrapper
            .find(`input[type="${type.name}"]`)
            .simulate('change', { target: { checked: true }, currentTarget: { checked: true } });
          expect(wrapper.find(`input[type="${type.name}"]`).prop('checked')).toBe(true);
        });

        test('should render helptext if specified', () => {
          wrapper.setProps({ helpText: 'help' });
          expect(
            wrapper
              .find(HelpText)
              .childAt(0)
              .text(),
          ).toBe('help');
        });
      }
      if (type.name === 'text') {
        test('should have class input--text', () => {
          expect(wrapper.hasClass('input--text')).toBe(true);
        });
      } else if (type.name === 'select') {
        test('should have class input--select', () => {
          expect(wrapper.hasClass('input--select')).toBe(true);
        });
      }
    });
  });
});
