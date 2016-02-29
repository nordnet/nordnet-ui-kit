import React from 'react';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import { PrismCode } from 'react-prism';
import anchorIcon from '../../assets/icons/anchor-icon.svg';
import './section.scss';

class Section extends PureComponent {
  renderCode() {
    if (!this.props.code) {
      return null;
    }

    return (
      <div className="section__code">
        <pre>
          <PrismCode className="language-jsx">
            { this.props.code }
          </PrismCode>
        </pre>
      </div>
    );
  }

  render() {
    const id = kebabCase(this.props.title);
    const classes = classNames(
      'section',
      `section--${ id }`,
      this.props.className
    );

    return (
      <section id={ `${ id }-section` } className={ classes }>
        <div className="section__introduction">
          <h1 className="section__title">
            { this.props.title }
            <a
              className="section__link"
              href={ `#${ id }-section` }
              dangerouslySetInnerHTML={{ __html: anchorIcon }}
            />
          </h1>
          <p className="section__description">
            { this.props.description }
          </p>
        </div>

        <div className="section__example">
          { this.props.example }
        </div>

        { this.renderCode() }

        <div className="section__explanation">
          { this.props.explanation }
        </div>
      </section>
    );
  }
}

export default Section;
