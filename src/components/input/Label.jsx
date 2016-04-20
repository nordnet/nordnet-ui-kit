import React from 'react';
import classNames from 'classnames';
import { Motion, spring, presets } from 'react-motion';
import rem from '../../utilities/rem.js';

function Label(props) {
  const { label, id, hasFocus, hasValue } = props;
  const classes = classNames('input__label', {
    'input__label--has-value': hasValue,
  });
  const springConfig = presets.noWobble;
  const defaultStyle = {
    y: hasValue ? rem(-12) : 0,
  };
  const style = {
    y: hasFocus || hasValue ? spring(rem(-12), springConfig) : spring(0, springConfig),
  };

  return (
    <Motion defaultStyle={ defaultStyle } style={ style }>
      {({ y }) =>
        <label
          htmlFor={ id }
          className={ classes }
          style={{ transform: `translateY(${ y }${ __USE_REM__ ? 'rem' : 'px' })` }}
        >
          { label }
        </label>
      }
    </Motion>
  );
}

Label.propTypes = {
  label: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  id: React.PropTypes.string,
  hasFocus: React.PropTypes.bool,
  hasValue: React.PropTypes.bool,
};

export default Label;
