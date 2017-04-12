import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import c from 'color';
import HorizontalNavStyles from './horizontal-nav-styles';

function navItem(item) {
  const { label, url, key, active, ...rest } = item;
  const className = classNames(this.classes.item, {
    [this.classes.active]: active,
    [this.classes.hasLink]: url,
  });

  return (
    <li {...rest} key={key || kebabCase(label)} className={className}>
      { url ? <a href={url}>{ label }</a> : <span>{ label }</span> }
    </li>
  );
}

navItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    key: PropTypes.string,
    active: PropTypes.bool,
  }),
};

function formatColor(color, opacity) {
  const { r, g, b } = c(color).rgb();
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function fade(fadeColor, classes) {
  const fadeStyle = `linear-gradient(to right, ${formatColor(fadeColor, 0)} 0%, ${formatColor(fadeColor, 1)} 100%)`;

  return (
    <li
      className={classes.fade}
      style={{ backgroundImage: fadeStyle }}
    />
  );
}

function HorizontalNav({ className, items, fadeColor, navItemRenderer, fadeRenderer, ...rest }, { styleManager }) {
  const classes = styleManager.render(HorizontalNavStyles);

  return (
    <div {...rest} className={classNames(classes.horizontalNav, className)}>
      <ul className={classes.items}>
        { items.map(navItemRenderer || navItem, { classes }) }
        { fadeRenderer ? fadeRenderer(fadeColor) : fade(fadeColor, classes) }
      </ul>
    </div>
  );
}

HorizontalNav.defaultProps = {
  fadeColor: '#fff',
};

HorizontalNav.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    key: PropTypes.string,
    active: PropTypes.bool,
  })),
  fadeColor: PropTypes.string,
  fadeRenderer: PropTypes.func,
  navItemRenderer: PropTypes.func,
};

HorizontalNav.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};


export default HorizontalNav;
