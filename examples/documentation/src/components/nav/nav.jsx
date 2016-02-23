import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Grid, Row, Col } from 'react-bem-grid';
import './nav.scss';

class Nav extends PureComponent {
  renderNavItem(item, index) {
    return (
      <li key={ index }>{ item.label }</li>
    );
  }

  render() {
    return (
      <nav className="nav">
        <Grid>
          <Row>
            <Col xs={ 6 }>
              <span className="nav__logo">Nordnet UI Kit</span>
            </Col>
            <Col xs={ 6 }>
              <ul className="nav__items">
                { this.props.items.map((item, index) => this.renderNavItem(item, index)) }
              </ul>
            </Col>
          </Row>
        </Grid>
      </nav>
    );
  }
}

export default Nav;
