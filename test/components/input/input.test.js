import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Input from '../../../src/components/input/input';
import InputDefault from '../../../src/components/input/input-default';
import InputDate from '../../../src/components/input/input-date';
import InputPassword from '../../../src/components/input/input-password';
import InputSelect from '../../../src/components/input/input-select';
import InputCheckboxRadio from '../../../src/components/input/input-checkbox-radio';

describe('<Input />', () => {
  let wrapper;
  const inputTypes = [{
    name: 'text',
    elementName: '<InputDefault />',
    value: InputDefault,
  }, {
    name: 'password',
    elementName: '<InputPassword />',
    value: InputPassword,
  }, {
    name: 'date',
    elementName: '<InputDate />',
    value: InputDate,
  }, {
    name: 'select',
    elementName: '<InputSelect />',
    value: InputSelect,
  }, {
    name: 'checkbox',
    elementName: '<InputCheckboxRadio />',
    value: InputCheckboxRadio,
  }, {
    name: 'radio',
    elementName: '<InputCheckboxRadio />',
    value: InputCheckboxRadio,
  }];

  inputTypes.forEach(type => {
    describe(`with type=${type.name}`, () => {
      beforeEach(() => {
        wrapper = shallow(<Input type={ type.name } label="label" value="value" placeholder="placeholder" />);
      });
      it(`should render an ${type.elementName}`, () => {
        expect(wrapper.type()).to.equal(type.value);
      });
      if (type.value !== InputCheckboxRadio) {
        it('should have class input', () => {
          expect(wrapper.shallow().hasClass('input')).to.equals(true);
        });
        it('should print the label if text is entered', () => {
          expect(wrapper.shallow().find('Label').shallow().childAt(0).text()).to.equal('label');
        });
        if (type.value === InputDate || type.value === InputDefault) {
          it('should set the input value to the property value', () => {
            expect(wrapper.shallow().find('input').html()).to.contain('value="value"');
          });
        }
        it('should set the placeholder to the property placeholder', () => {
          if (type.value === InputSelect) {
            expect(wrapper.shallow().find('span.input__placeholder').childAt(0).text()).to.equal('placeholder');
          } else {
            expect(wrapper.shallow().find('input.input__element').html()).to.contain('placeholder="placeholder"');
          }
        });
        it('should have class input--has-warning if warning', () => {
          wrapper.setProps({ hasWarning: true });
          expect(wrapper.shallow().hasClass('input--has-warning')).to.equals(true);
        });
        it('should have class input--has-error if error', () => {
          wrapper.setProps({ hasError: true });
          expect(wrapper.shallow().hasClass('input--has-error')).to.equals(true);
        });
        it('should have class input--has-success if success', () => {
          wrapper.setProps({ hasSuccess: true });
          expect(wrapper.shallow().hasClass('input--has-success')).to.equals(true);
        });
      } else {
        it('should have class input-checkbox-radio', () => {
          expect(wrapper.shallow().find('.input-checkbox-radio')).to.have.length(1);
        });
        it('should have class input-checkbox-radio--has-error if error', () => {
          wrapper.setProps({ hasError: true });
          expect(wrapper.shallow().find('.input-checkbox-radio--has-error')).to.have.length(1);
        });
        it('should have class input-checkbox-radio--has-success if success', () => {
          wrapper.setProps({ hasSuccess: true });
          expect(wrapper.shallow().find('.input-checkbox-radio--has-success')).to.have.length(1);
        });
      }
      switch (type.name) {
        case 'text':
          it('should have class input--text', () => {
            expect(wrapper.shallow().hasClass('input--text')).to.equals(true);
          });
          it('should format the input if a formatter is provided', () => {
            wrapper.setProps({ valueFormatter: (val) => val.toUpperCase() });
            const defaultInput = wrapper.shallow();
            defaultInput.find('input').simulate('change', { target: { value: 'abc' } });
            expect(defaultInput.find('input').html()).to.contain('value="ABC"');
          });
          break;
        case 'password':
          it('should have class input--password', () => {
            expect(wrapper.shallow().hasClass('input--password')).to.equals(true);
          });
          break;
        case 'date':
          it('should have class input--date', () => {
            expect(wrapper.shallow().hasClass('input--date')).to.equals(true);
          });
          break;
        case 'select':
          it('should have class input--select', () => {
            expect(wrapper.shallow().hasClass('input--select')).to.equals(true);
          });
          break;
        case 'checkbox':
          break;
        case 'radio':
          break;
        default:
      }
    });
  });
});
