import React, { PropTypes } from 'react';
import ReactSelect from 'react-select';
// import Icon from '../icon/icon';
// import variables from '../../utilities/variables';
import './select.scss';

// TODO: react-select with arrowRenderer prop not yet published on npm
// function arrowRenderer({ onMouseDown }) {
//   return (
//     <div onMouseDown={ onMouseDown }>
//       <Icon
//         className="dropdown__toggle-icon"
//         stroke={ variables.colorPrimary }
//         width={ 8 }
//         height={ 8 }
//         type="chevronDown"
//       />
//     </div>
//   );
// }

function Select({ label, ...rest }) {
  return (
    <div className="select">
      { label ? <label className="select__label" htmlFor={ rest.id ? rest.id : null }>{ label }</label> : null }
      <ReactSelect clearable={ false } { ...rest } />
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
};

export default Select;
