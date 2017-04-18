import React, { PropTypes } from 'react';
import ReactSelect from 'react-select';
import SelectStyles from './select-styles';
// import Icon from '../icon/icon';

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

function Select({ label, ...rest }, { styleManager }) {
  const classes = styleManager.render(SelectStyles);
  return (
    <div className={classes.select}>
      { label ? <label className={classes.label} htmlFor={rest.id ? rest.id : null}>{ label }</label> : null }
      <ReactSelect clearable={false} {...rest} />
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
};

Select.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Select;
