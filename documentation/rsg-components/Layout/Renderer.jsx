import React, { PropTypes } from 'react';
import classnames from 'classnames';
import logo from '../../nordnet-logo-ui-kit.svg';
import './Layout.scss';

export default function Renderer({ title, components, toc, sidebar }) {
  const logoHTML = {
    __html: logo,
  };

  return (
    <div className={ classnames('ReactStyleguidist-Layout__root', { 'ReactStyleguidist-Layout__sidebar': !sidebar }) }>
      <main className="ReactStyleguidist-Layout__wrapper">
        <div className="ReactStyleguidist-Layout__content">
          <div className="ReactStyleguidist-Layout__components">
            { components }
          </div>
        </div>
        <div className="ReactStyleguidist-Layout__sidebar">
          <h1 className="ReactStyleguidist-Layout__heading">
            <span className="logo" dangerouslySetInnerHTML={ logoHTML } />
          </h1>
          { toc }
        </div>
      </main>
    </div>
  );
}

Renderer.propTypes = {
  title: PropTypes.string.isRequired,
  components: PropTypes.object.isRequired,
  toc: PropTypes.node.isRequired,
  sidebar: PropTypes.bool,
};
