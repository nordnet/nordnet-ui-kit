import React, { PropTypes } from 'react';
import cn from 'classnames';
import Color from 'color';
import withThemedStyles from '../../hocs/with-themed-styles';

// TODO: Move these UTILS to styles
const CONTRAST_THRESHOLD = 5;
const getContrastRatio = (c1, c2) => Color(c1).contrast(Color(c2));
const isContrast = (c1, c2, threshold = CONTRAST_THRESHOLD) => getContrastRatio(c1, c2) >= threshold;
const getTextColor = (theme, light) => theme.palette.shades[light ? 'light' : 'dark'].text.default;

const bgc = ({ theme, modifier }) => theme.palette.variant[modifier || 'primary'];
const col = p => getTextColor(p.theme, isContrast(bgc(p), getTextColor(p.theme, true)));

const styles = {
  badge: {
    display: 'inline-block',
    fontSize: 12,
    padding: '.15em .5em',
    lineHeight: 1,
    color: col,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    'background-color': bgc,
    borderRadius: '1em',
  },
};

function Badge({ classes, children, className, style }) {
  return (
    <span style={style} className={cn(classes.badge, className)}>
      { children }
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modifier: PropTypes.oneOf(['success', 'warning', 'danger']), // eslint-disable-line react/no-unused-prop-types
  classes: PropTypes.object.isRequired,
  style: PropTypes.object,
};

export default withThemedStyles(styles, Badge);
