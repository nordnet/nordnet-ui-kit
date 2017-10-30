import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { times as _times } from 'lodash';
import styles from './progress-bar-styles';

function ProgressBar({
  classes,
  className,
  variant,
  size,
  value,
  max,
  printNumbers,
  highlightActive,
  clickables,
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';

  const getElementType = clickable => {
    if (clickable && clickable.href) {
      return 'a';
    } else if (clickable && (clickable.onClick || clickable.disabled)) {
      return 'button';
    }
    return 'span';
  };

  const containerClasses = classNames(classes.progressBarContainer, className);

  return (
    <div {...rest} className={containerClasses}>
      <div aria-hidden={clickables.length === 0 ? 'true' : 'false'} className={classNames(classes.progressBar)}>
        {_times(max, i => {
          const Element = getElementType(clickables[i]);
          const { label, reached, active, ...clickablesRest } = clickables[i] || {};
          const elementClassNames = classNames(classes.progressStep, {
            [classes.clickable]: Element !== 'span',
            [classes.primary]: isPrimary,
            [classes.secondary]: isSecondary,
            [classes.reached]: typeof reached !== 'undefined' ? reached : i < value,
            [classes.active]: typeof active !== 'undefined' ? active : highlightActive && i === value - 1,
          });

          return (
            <Element key={i} className={elementClassNames} {...clickablesRest}>
              {printNumbers && !label ? <span>{i + 1}</span> : null}
              {label ? <span>{label}</span> : null}
            </Element>
          );
        })}
      </div>
      <progress value={value} max={max} className={classNames(classes.ariaProgressBar)} />
    </div>
  );
}

ProgressBar.defaultProps = {
  variant: 'primary',
  size: 'xs',
  value: 0,
  printNumbers: false,
  highlightActive: false,
  clickables: [],
};

ProgressBar.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  /** The current value of the progress */
  value: PropTypes.number,
  /** The max value of the progress */
  max: PropTypes.number.isRequired,
  /** Print a number for each step */
  printNumbers: PropTypes.bool,
  /** Highlight the active (current) value */
  highlightActive: PropTypes.bool,
  /** Experimental: For each step you can override the label and status, and make it clickable. See advanced examples for inspiration. */
  clickables: PropTypes.arrayOf(PropTypes.object),
};

export { ProgressBar as Component, styles };
export default injectSheet(styles)(ProgressBar);
