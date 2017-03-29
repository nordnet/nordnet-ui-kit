import React, { PropTypes } from 'react';
import cn from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';

export const styleSheet = createStyleSheet('TextIcon', (theme) => {
  const { palette, typography } = theme;

  const styles = {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: typography.secondary.fontFamily,
      color: palette.shades.dark.text.default,
      backgroundColor: palette.color.grayDarkest,
      overflow: 'hidden',
      borderRadius: '50%',
      textTransform: 'capitalize',
      height: '2.4em',
      width: '2.4em',
    },
    small: {
      fontSize: 14,
      height: 32,
      width: 32,
    },
    large: {
      fontSize: 16,
      height: 48,
      width: 48,
    },
  };

  return styles;
});

function TextIcon({
  text,
  className: classNameProp,
  style: styleProp,
  iconSize,
  iconColor,
  textColor,
  ...rest
}, { styleManager }) {
  const classes = styleManager.render(styleSheet);
  const style = Object.assign({}, {
    backgroundColor: iconColor,
    color: textColor,
  }, styleProp);

  const className = cn([classes.root], {
    [classes.small]: iconSize === 'small',
    [classes.large]: iconSize === 'large',
  }, classNameProp);

  return (
    <div className={className} style={style} {...rest}>
      { text }
    </div>
  );
}

TextIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  iconSize: PropTypes.oneOf(['small', 'large', 'custom']),
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
};

TextIcon.defaultProps = {
  iconSize: 'small',
};

TextIcon.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default TextIcon;
