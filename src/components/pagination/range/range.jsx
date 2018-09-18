import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Page from '../page';
import Ellipsis from '../ellipsis';
import styles from './range-styles';

class Range extends Component {
  calcPagesToDraw() {
    const { anchors, selectedSiblings } = this.props;

    return 1 + anchors * 2 + selectedSiblings * 2; // 1 = the selected item
  }

  isAdvancedPagination() {
    const { pagesCount } = this.props;
    const pagesToDraw = this.calcPagesToDraw();

    return pagesCount > pagesToDraw;
  }

  renderEllipsis = (hiddenOnDesktop, pos) => (
    <Ellipsis key={`ellipsis-${pos}`} hiddenOnDesktop={hiddenOnDesktop || !this.isAdvancedPagination()} />
  );

  renderPage(pageNumber) {
    const { selectHandler, pagesCount, selected, pageLabelText, pageLabelTextSelected } = this.props;

    return (
      <Page
        key={pageNumber}
        pageNumber={pageNumber}
        selectHandler={selectHandler}
        isSelected={pageNumber === selected}
        isFirst={pageNumber === 1}
        isLast={pageNumber === pagesCount}
        labelText={pageNumber === selected ? `${pageLabelTextSelected} ${pageNumber}` : `${pageLabelText} ${pageNumber}`}
      >
        <span>{pageNumber}</span>
      </Page>
    );
  }

  render() {
    const { classes, anchors, selectedSiblings, selected, pagesCount } = this.props;
    const selectedPageIsOnTheLeftSide = selected - selectedSiblings <= 2;
    const selectedPageIsOnTheRightSide = selected + selectedSiblings >= pagesCount - 1;

    const pagesToDraw = this.calcPagesToDraw();

    const items = [];

    if (!this.isAdvancedPagination()) {
      for (let i = 1; i <= pagesCount; i += 1) {
        items.push(this.renderPage(i));
      }
    } else {
      /*
        Add pages to Pagination
          * Anchors (far left and far right)
          * Selected item
          * Siblings to the selected item
          * Lastly fills out with pages until no empty spots left
      */

      for (let i = 1; i <= pagesCount; i += 1) {
        const emptySpotsRemaining = pagesToDraw > items.length + 1;

        if (
          i <= anchors ||
          i === selected ||
          i > pagesCount - anchors ||
          (i >= selected - selectedSiblings && i <= selected + selectedSiblings) ||
          (selectedPageIsOnTheLeftSide && emptySpotsRemaining) ||
          (selectedPageIsOnTheRightSide && emptySpotsRemaining && i > pagesCount - pagesToDraw + emptySpotsRemaining)
        ) {
          items.push(this.renderPage(i));
        }
      }
    }

    // Add ellipsis
    if (selected > 2) {
      items.splice(anchors, 0, this.renderEllipsis(selectedPageIsOnTheLeftSide, 'left'));
    }

    if (selected < pagesCount - 1) {
      items.splice(items.length - anchors, 0, this.renderEllipsis(selectedPageIsOnTheRightSide, 'right'));
    }

    return <ul className={classes.list}>{items}</ul>;
  }
}

Range.propTypes = {
  classes: PropTypes.object.isRequired,
  anchors: PropTypes.number.isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selectedSiblings: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
  selectHandler: PropTypes.func.isRequired,
  pageLabelText: PropTypes.string.isRequired,
  pageLabelTextSelected: PropTypes.string.isRequired,
};

const enhance = injectSheet(styles);

export { Range as Component, styles };
export default enhance(Range);
