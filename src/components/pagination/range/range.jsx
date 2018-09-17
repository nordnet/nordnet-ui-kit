import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from '../page';
import Ellipsis from '../ellipsis';

class Range extends Component {
  getEllipsis = (hiddenOnDesktop, pos) => {
    const { advancedPagination } = this.props;

    return <Ellipsis key={`ellipsis-${pos}`} hiddenOnDesktop={hiddenOnDesktop || !advancedPagination} />;
  };

  getPage(pageNumber) {
    const { selectHandler, pagesCount, selected } = this.props;

    return (
      <Page
        key={pageNumber}
        pageNumber={pageNumber}
        selectHandler={selectHandler}
        isSelected={pageNumber === selected}
        isFirst={pageNumber === 1}
        isLast={pageNumber === pagesCount}
      >
        <span>{pageNumber}</span>
      </Page>
    );
  }

  render() {
    const { advancedPagination, selectedSiblings, anchors, selected, pagesCount, pagesToDraw } = this.props;
    const selectedPageIsOnTheLeftSide = selected - selectedSiblings <= 2;
    const selectedPageIsOnTheRightSide = selected + selectedSiblings >= pagesCount - 1;

    const items = [];

    if (!advancedPagination) {
      for (let i = 1; i <= pagesCount; i += 1) {
        items.push(this.getPage(i));
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
          items.push(this.getPage(i));
        }
      }
    }

    // Add ellipsis
    if (selected > 2) {
      items.splice(anchors, 0, this.getEllipsis(selectedPageIsOnTheLeftSide, 'left'));
    }

    if (selected < pagesCount - 1) {
      items.splice(items.length - anchors, 0, this.getEllipsis(selectedPageIsOnTheRightSide, 'right'));
    }

    return items;
  }
}

Range.propTypes = {
  advancedPagination: PropTypes.bool.isRequired,
  anchors: PropTypes.number.isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selectedSiblings: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
  pagesToDraw: PropTypes.number.isRequired,
  selectHandler: PropTypes.func.isRequired,
};

export default Range;
