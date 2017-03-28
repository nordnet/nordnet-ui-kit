import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './text-icon.scss';

function TextIcon({ text, iconSize, iconColor, textColor, ...rest }) {
  const styles = {
    backgroundColor: iconColor,
    color: textColor,
  };

  const classes = classNames('table', {
    'text-icon--xs': iconSize === 'xs',
    'text-icon--sm': iconSize === 'sm',
    'text-icon--md': iconSize === 'md',
    'text-icon--lg': iconSize === 'lg',
  }, 'text-icon');
  return (
    <div className={classes} style={styles} {...rest}>
      { text }
    </div>
  );
}

TextIcon.propTypes = {
  text: PropTypes.string.isRequired,
  iconSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
};

TextIcon.defaultProps = {
  iconSize: 'md',
  iconColor: null,
  textColor: null,
};

export default TextIcon;
