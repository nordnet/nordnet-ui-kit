import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Logo from '../logo/logo';
import HorizontalNav from '../horizontal-nav';
// TODO: Move SCSS into JSS
// import './nav-bar.scss';

function renderSubItems(subItems) {
  if (!subItems || subItems.length === 0) {
    return null;
  }

  return (
    <div className="nav-bar__sub-items">
      <div className="nav-bar__wrapper">
        <HorizontalNav className="nav-bar__sub-nav" items={subItems} />
      </div>
    </div>
  );
}

function renderOther(other) {
  if (!other) {
    return null;
  }

  return (
    <div className="nav-bar__other">
      { other }
    </div>
  );
}

function NavBar({ className, items, subItems, other, ...rest }) {
  const classes = classNames('nav-bar', className);

  return (
    <header {...rest} className={classes}>
      <div className="nav-bar__wrapper">
        <Logo className="nav-bar__logo" />
        <HorizontalNav className="nav-bar__nav" items={items} />
        { renderOther(other) }
      </div>
      { renderSubItems(subItems) }
    </header>
  );
}

NavBar.defaultProps = {};

NavBar.propTypes = {
  className: PropTypes.string,
  /** Passed to HorizontalNav component */
  items: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  /** Passed to HorizontalNav component */
  subItems: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  other: PropTypes.node,
};

export default NavBar;
