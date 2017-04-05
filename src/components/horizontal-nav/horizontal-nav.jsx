import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import c from 'color';
// TODO: Move SCSS into JSS
// import './horizontal-nav.scss';

function navItem(item) {
  const { label, url, key, active, ...rest } = item;
  const classes = classNames('horizontal-nav__item', {
    'horizontal-nav__item--active': active,
    'horizontal-nav__item--has-link': url,
  });

  return (
    <li {...rest} key={key || kebabCase(label)} className={classes}>
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

function fade(fadeColor) {
  const fadeStyle = `linear-gradient(to right, ${formatColor(fadeColor, 0)} 0%, ${formatColor(fadeColor, 1)} 100%)`;

  return (
    <li
      className="horizontal-nav__fade"
      style={{ backgroundImage: fadeStyle }}
    />
  );
}

function HorizontalNav({ className, items, fadeColor, navItemRenderer, fadeRenderer, ...rest }) {
  const classes = classNames('horizontal-nav', className);

  return (
    <div {...rest} className={classes}>
      <ul className="horizontal-nav__items">
        { items.map(navItemRenderer || navItem) }
        { fadeRenderer ? fadeRenderer(fadeColor) : fade(fadeColor) }
      </ul>
    </div>
  );
}

HorizontalNav.defaultProps = {
  fadeColor: '#ffffff',
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

export default HorizontalNav;
