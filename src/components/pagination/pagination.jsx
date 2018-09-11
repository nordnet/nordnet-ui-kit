import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Icon } from '../../';
import Page from './page';
import Stepper from './stepper';
import Ellipsis from './ellipsis';
import styles from './pagination-styles';

const getRandomString = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);

class Pagination extends Component {
  constructor(props) {
    super(props);
    const { total, limit, selected, anchors, selectedSiblings } = this.props;

    this.state = {
      selected: parseInt(selected, 10),
    };

    this.pagesCount = Math.ceil(total / limit);
    this.pagesToDraw = 1 + anchors * 2 + selectedSiblings * 2; // 1 = the selected item
    this.advancedPagination = this.pagesCount > this.pagesToDraw;
  }

  getEllipsis = hiddenOnDesktop => <Ellipsis key={getRandomString()} hiddenOnDesktop={hiddenOnDesktop || !this.advancedPagination} />;

  getPage(pageNumber) {
    const { selected } = this.state;
    return (
      <Page
        key={pageNumber}
        pageNumber={pageNumber}
        clickHandler={this.handlePageSelected}
        isSelected={pageNumber === selected}
        isFirst={pageNumber === 1}
        isLast={pageNumber === this.pagesCount}
      >
        <span>{pageNumber}</span>
      </Page>
    );
  }

  handlePreviousPage = () => {
    const { selected } = this.state;

    if (selected > 1) {
      this.handlePageSelected(selected - 1);
    }
  };

  handleNextPage = () => {
    const { selected } = this.state;

    if (selected < this.pagesCount) {
      this.handlePageSelected(selected + 1);
    }
  };

  handlePageSelected = number => {
    const { changeHandler } = this.props;
    this.setState({
      selected: number,
    });

    changeHandler(number);
  };

  paginate() {
    const { selected } = this.state;
    const { selectedSiblings, anchors } = this.props;
    const selectedPageIsOnTheLeftSide = selected - selectedSiblings <= 2;
    const selectedPageIsOnTheRightSide = selected + selectedSiblings >= this.pagesCount - 1;

    const items = [];

    if (!this.advancedPagination) {
      for (let i = 1; i <= this.pagesCount; i += 1) {
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

      for (let i = 1; i <= this.pagesCount; i += 1) {
        const emptySpotsRemaining = this.pagesToDraw > items.length + 1;

        if (
          i <= anchors ||
          i === selected ||
          i > this.pagesCount - anchors ||
          (i >= selected - selectedSiblings && i <= selected + selectedSiblings) ||
          (selectedPageIsOnTheLeftSide && emptySpotsRemaining) ||
          (selectedPageIsOnTheRightSide && emptySpotsRemaining && i > this.pagesCount - this.pagesToDraw + emptySpotsRemaining)
        ) {
          items.push(this.getPage(i));
        }
      }
    }

    // Add ellipsis
    if (selected > 2) {
      items.splice(anchors, 0, this.getEllipsis(selectedPageIsOnTheLeftSide));
    }

    if (selected < this.pagesCount - 1) {
      items.splice(items.length - anchors, 0, this.getEllipsis(selectedPageIsOnTheRightSide));
    }

    return items;
  }

  render() {
    const { classes, buttonTextPrevious, buttonTextNext } = this.props;
    const { selected } = this.state;

    if (Number.isNaN(this.pagesCount) || this.pagesCount <= 1) {
      return null;
    }

    return (
      <nav>
        <ul className={classes.list}>
          <Stepper clickHandler={this.handlePreviousPage} clickable={selected !== 1}>
            <Icon.ArrowLeft className={classes.stepperIcon} />
            <span className={classes.stepperText}>{buttonTextPrevious}</span>
          </Stepper>
          {this.paginate()}
          <Stepper clickHandler={this.handleNextPage} clickable={selected !== this.pagesCount}>
            <Icon.ArrowRight className={classes.stepperIcon} />
            <span className={classes.stepperText}>{buttonTextNext}</span>
          </Stepper>
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  classes: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  limit: PropTypes.number,
  changeHandler: PropTypes.func,
  buttonTextPrevious: PropTypes.string,
  buttonTextNext: PropTypes.string,
  anchors: PropTypes.number,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectedSiblings: PropTypes.number,
};

Pagination.defaultProps = {
  selected: 1,
  selectedSiblings: 2,
  anchors: 1,
  limit: 10,
  buttonTextPrevious: 'Previous',
  buttonTextNext: 'Next',
  changeHandler: () => {},
};

const enhance = injectSheet(styles);

export { Pagination as Component, styles };
export default enhance(Pagination);
