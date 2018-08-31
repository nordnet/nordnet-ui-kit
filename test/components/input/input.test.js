import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Component as Input } from '../../../src/components/input/input';
import { Component as InputDefault, styles as inputDefaultStyles } from '../../../src/components/input/input-default';
import { Component as InputSelect, styles as inputSelectStyles } from '../../../src/components/input/input-select';
import { Component as InputCheckboxRadio, styles as inputCheckboxRadioStyles } from '../../../src/components/input/input-checkbox-radio';
import HelpText from '../../../src/components/input/help-text';
import { mockClasses, theme } from '../../../src';

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

const renderComponent = ({ Component = Input, props }) => shallow(<Component {...defaultProps} {...props} />);

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

      it(`should render an <${type.componentName} />`, () => {
        wrapper = renderComponent({ props: { type: type.name } });
        expect(wrapper.type().InnerComponent).to.equal(type.component);
      });

      if (type.componentName !== 'InputCheckboxRadio') {
        it(`should have class ${classes.input}`, () => {
          expect(wrapper.hasClass(classes.input)).to.equals(true);
        });

        it('should print the label if text is entered', () => {
          expect(
            wrapper
              .find('Label')
              .shallow()
              .childAt(0)
              .text(),
          ).to.equal('label');
        });

        it('should set the placeholder to the property placeholder', () => {
          if (type.component === InputSelect) {
            // For the InputSelect the placeholder is only visible if no "value" is set
            const wrapperWithoutValue = renderComponent({ Component: type.component, props: { value: undefined } });

            expect(wrapperWithoutValue.find('FakePlaceholder').prop('placeholder')).to.equal('placeholder');
          } else {
            expect(wrapper.find('NativeInput').prop('placeholder')).to.equal('placeholder');
          }
        });

        it('should have class input--has-warning if warning', () => {
          wrapper.setProps({ hasWarning: true });
          expect(wrapper.hasClass('input--has-warning')).to.equals(true);
        });

        it('should have class input--has-error if error', () => {
          wrapper.setProps({ hasError: true });
          expect(wrapper.hasClass('input--has-error')).to.equals(true);
        });

        it('should have class input--has-success if success', () => {
          wrapper.setProps({ hasSuccess: true });
          expect(wrapper.hasClass('input--has-success')).to.equals(true);
        });
      } else {
        it(`should have class ${classes['input-checkbox-radio']}`, () => {
          expect(wrapper.find(`.${classes['input-checkbox-radio']}`)).to.have.length(1);
        });

        it('should have class input-checkbox-radio--has-error if error', () => {
          wrapper.setProps({ hasError: true });
          expect(wrapper.find('.input-checkbox-radio--has-error')).to.have.length(1);
        });

        it('should have class input-checkbox-radio--has-success if success', () => {
          wrapper.setProps({ hasSuccess: true });
          expect(wrapper.find('.input-checkbox-radio--has-success')).to.have.length(1);
        });

        it('should be unchecked by default', () => {
          expect(wrapper.find(`input[type="${type.name}"]`).prop('checked')).to.equal(false);
        });

        it('should be checked if checked in props', () => {
          wrapper.setProps({ checked: true });
          expect(wrapper.find(`input[type="${type.name}"]`).prop('checked')).to.equal(true);
        });

        it('should become checked if unchecked and clicked', () => {
          wrapper.find(`input[type="${type.name}"]`).simulate('change', { target: { checked: true }, currentTarget: { checked: true } });
          expect(wrapper.find(`input[type="${type.name}"]`).prop('checked')).to.equal(true);
        });

        it('should render helptext if specified', () => {
          wrapper.setProps({ helpText: 'help' });
          expect(
            wrapper
              .find(HelpText)
              .childAt(0)
              .text(),
          ).to.equal('help');
        });
      }
      if (type.name === 'text') {
        it('should have class input--text', () => {
          expect(wrapper.hasClass('input--text')).to.equal(true);
        });
      } else if (type.name === 'select') {
        it('should have class input--select', () => {
          expect(wrapper.hasClass('input--select')).to.equals(true);
        });
      }
    });
  });
});
