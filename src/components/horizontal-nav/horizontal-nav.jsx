import React, { PropTypes } from 'react';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import c from 'color';
import './horizontal-nav.scss';

function navItem(item) {
  const { label, key, active, ...rest } = item;
  const classes = classNames('horizontal-nav__item', {
    'horizontal-nav__item--active': active,
  });

  return (
    <li {...rest} key={ key || kebabCase(label) } className={ classes }>
      { label }
    </li>
  );
}

navItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    key: PropTypes.string,
    active: PropTypes.bool,
  }),
};

function formatColor(color, opacity) {
  const { r, g, b } = c(color).rgb();
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function HorizontalNav({ className, items, fadeColor, ...rest }) {
  const classes = classNames('horizontal-nav', className);
  const fade = `linear-gradient(to right, ${formatColor(fadeColor, 0)} 0%, ${formatColor(fadeColor, 1)} 100%)`;

  return (
    <div { ...rest } className={ classes }>
      <ul className="horizontal-nav__items">
        { items.map(navItem) }
        <span
          className="horizontal-nav__fade"
          style={ { backgroundImage: fade } }
        />
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
    key: PropTypes.string,
    active: PropTypes.bool,
  })),
  fadeColor: PropTypes.string,
};

export default HorizontalNav;
