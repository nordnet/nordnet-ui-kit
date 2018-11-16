import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import ButtonNode from '../buttonNode';
import styles from './page-styles';

class Page extends Component {
  onPageClick = e => {
    const { pageNumber, selectHandler } = this.props;

    selectHandler(pageNumber, 'PAGE', e);
  };

  render() {
    const { classes, isSelected, isFirst, isLast, labelText, url, getNode, children } = this.props;
    const pageProps = {
      className: cn(classes.button, {
        [classes.buttonSelected]: isSelected,
      }),
      onClick: this.onPageClick,
      'aria-label': labelText,
    };

    return (
      <li
        className={cn(classes.item, {
          [classes.itemAlwaysVisible]: isSelected || isFirst || isLast,
        })}
      >
        <ButtonNode getNode={getNode} url={url} disabled={isSelected} defaultProps={pageProps}>
          {children}
        </ButtonNode>
      </li>
    );
  }
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  selectHandler: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  labelText: PropTypes.string.isRequired,
  url: PropTypes.string,
  children: PropTypes.node.isRequired,
  getNode: PropTypes.func,
};

Page.defaultProps = {
  url: null,
  getNode: null,
};

const enhance = injectSheet(styles);

export { Page as Component, styles };
export default enhance(Page);
