import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Grid, Row, Col } from 'react-bem-grid';
import kebabCase from 'lodash.kebabcase';
import Logo from '../../../../../src/components/logo/logo';
import './nav.scss';

class Nav extends PureComponent {
  renderNavItem(item) {
    const id = kebabCase(item);

    return (
      <li className="nav__item" key={ id }>
        <a href={ `#${ id }-section` }>
          { item }
        </a>
      </li>
    );
  }

  render() {
    return (
      <nav className="nav">
        <Grid>
          <Row>
            <Col xs={ 4 }>
              <Logo className="nav__logo" />
            </Col>
            <Col xs={ 8 }>
              <ul className="nav__items">
                { this.props.items.map(item => this.renderNavItem(item)) }
              </ul>
            </Col>
          </Row>
        </Grid>
      </nav>
    );
  }
}

export default Nav;
