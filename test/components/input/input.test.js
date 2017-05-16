import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import Input from '../../../src/components/input/input';
import InputDefault from '../../../src/components/input/input-default';
import InputDefaultStyles from '../../../src/components/input/input-default-styles';
import InputSelect from '../../../src/components/input/input-select';
import InputCheckboxRadio from '../../../src/components/input/input-checkbox-radio';
import InputCheckboxRadioStyles from '../../../src/components/input/input-checkbox-radio-styles';

describe('<Input />', () => {
  const shallow = createShallow(enzymeShallow);
  const opts = { context: shallow.context };
  const classes = shallow.context.styleManager.render(InputDefaultStyles);
  const classesRadio = shallow.context.styleManager.render(InputCheckboxRadioStyles);
  let wrapper;
  const inputTypes = [
    {
      name: 'text',
      elementName: '<InputDefault />',
      value: InputDefault,
    },
    {
      name: 'select',
      elementName: '<InputSelect />',
      value: InputSelect,
    },
    {
      name: 'checkbox',
      elementName: '<InputCheckboxRadio />',
      value: InputCheckboxRadio,
    },
    {
      name: 'radio',
      elementName: '<InputCheckboxRadio />',
      value: InputCheckboxRadio,
    },
  ];

  inputTypes.forEach(type => {
    describe(`with type=${type.name}`, () => {
      beforeEach(() => {
        wrapper = shallow(<Input type={type.name} label="label" value="value" placeholder="placeholder" />);
      });
      it(`should render an ${type.elementName}`, () => {
        expect(wrapper.type()).to.equal(type.value);
      });
      if (type.value !== InputCheckboxRadio) {
        it(`should have class ${classes.input}`, () => {
          expect(wrapper.shallow(opts).hasClass(classes.input)).to.equals(true);
        });
        it('should print the label if text is entered', () => {
          expect(wrapper.shallow(opts).find('Label').shallow(opts).childAt(0).text()).to.equal('label');
        });
        it('should set the placeholder to the property placeholder', () => {
          if (type.value === InputSelect) {
            // For the InputSelect the placeholder is only visible if no "value" is set
            const wrapperWithoutValue = shallow(<Input type={type.name} label="label" placeholder="placeholder" />);
            expect(wrapperWithoutValue.shallow(opts).find('span.input__placeholder').childAt(0).text()).to.equal('placeholder');
          } else {
            expect(wrapper.shallow(opts).find('input.input__element').html()).to.contain('placeholder="placeholder"');
          }
        });
        it('should have class input--has-warning if warning', () => {
          wrapper.setProps({ hasWarning: true });
          expect(wrapper.shallow(opts).hasClass('input--has-warning')).to.equals(true);
        });
        it('should have class input--has-error if error', () => {
          wrapper.setProps({ hasError: true });
          expect(wrapper.shallow(opts).hasClass('input--has-error')).to.equals(true);
        });
        it('should have class input--has-success if success', () => {
          wrapper.setProps({ hasSuccess: true });
          expect(wrapper.shallow(opts).hasClass('input--has-success')).to.equals(true);
        });
      } else {
        it(`should have class ${classesRadio['input-checkbox-radio']}`, () => {
          expect(wrapper.shallow(opts).find(`.${classesRadio['input-checkbox-radio']}`)).to.have.length(1);
        });
        it('should have class input-checkbox-radio--has-error if error', () => {
          wrapper.setProps({ hasError: true });
          expect(wrapper.shallow(opts).find('.input-checkbox-radio--has-error')).to.have.length(1);
        });
        it('should have class input-checkbox-radio--has-success if success', () => {
          wrapper.setProps({ hasSuccess: true });
          expect(wrapper.shallow(opts).find('.input-checkbox-radio--has-success')).to.have.length(1);
        });
        it('should be unchecked by default', () => {
          expect(wrapper.shallow(opts).find(`input[type="${type.name}"]`).props().checked).to.equal(false);
        });
        it('should be checked if checked in props', () => {
          wrapper.setProps({ checked: true });
          expect(wrapper.shallow(opts).find(`input[type="${type.name}"]`).props().checked).to.equal(true);
        });
        it('should become checked if unchecked and clicked', () => {
          const checkbox = wrapper.shallow(opts);
          checkbox.find(`input[type="${type.name}"]`).simulate('change', { target: { checked: true } });
          expect(checkbox.find(`input[type="${type.name}"]`).props().checked).to.equal(true);
        });
        it('should render helptext if specified', () => {
          wrapper.setProps({ helpText: 'help' });
          expect(wrapper.shallow(opts).find('HelpText').childAt(0).text()).to.equal('help');
        });
      }
      switch (type.name) {
        case 'text':
          it('should have class input--text', () => {
            expect(wrapper.shallow(opts).hasClass('input--text')).to.equals(true);
          });
          it('should format the input if a formatter is provided', () => {
            wrapper.setProps({ valueFormatter: val => val.toUpperCase() });
            const defaultInput = wrapper.shallow(opts);
            defaultInput.find('input').simulate('change', { target: { value: 'abc' } });
            expect(defaultInput.find('input').html()).to.contain('value="ABC"');
          });
          break;
        case 'select':
          it('should have class input--select', () => {
            expect(wrapper.shallow(opts).hasClass('input--select')).to.equals(true);
          });
          break;
        default:
      }
    });
  });
});
