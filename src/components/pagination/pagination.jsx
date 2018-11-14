import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Icon } from '../../';
import Stepper from './stepper';
import Range from './range';
import styles from './pagination-styles';

class Pagination extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const selectedFromParent = parseInt(nextProps.selected, 10);
    if (!prevState || selectedFromParent !== prevState.selectedProp) {
      // Parent component forcing a reset/change of selected page
      return { selected: selectedFromParent, selectedProp: selectedFromParent };
    }

    return null;
  }

  state = {};

  calcPagesCount() {
    const { total, limit } = this.props;

    return Math.ceil(total / limit);
  }

  handlePreviousPage = e => {
    const { selected } = this.state;

    if (selected > 1) {
      this.handlePageSelected(selected - 1, 'PREV_PAGE', e);
    }
  };

  handleNextPage = e => {
    const { selected } = this.state;
    const pagesCount = this.calcPagesCount();

    if (selected < pagesCount) {
      this.handlePageSelected(selected + 1, 'NEXT_PAGE', e);
    }
  };

  handlePageSelected = (number, action, e) => {
    const { changeHandler } = this.props;

    this.setState({
      selected: number,
    });

    changeHandler(number, action, e);
  };

  render() {
    const {
      classes,
      title,
      buttonTextPrevious,
      buttonTextNext,
      selectedSiblings,
      anchors,
      pageLabelText,
      pageLabelTextSelected,
      urlGenerator,
      getNode,
    } = this.props;
    const { selected } = this.state;
    const pagesCount = this.calcPagesCount();

    if (Number.isNaN(pagesCount) || pagesCount <= 1) {
      return null;
    }

    return (
      <nav className={classes.root} role="navigation" aria-label={title}>
        <Stepper clickHandler={this.handlePreviousPage} disabled={selected === 1} url={urlGenerator(selected - 1)} getNode={getNode}>
          <Icon.ArrowLeft className={classes.stepperIcon} />
          <span className={classes.stepperText}>{buttonTextPrevious}</span>
        </Stepper>
        <Range
          anchors={anchors}
          selected={selected}
          selectedSiblings={selectedSiblings}
          pagesCount={pagesCount}
          selectHandler={this.handlePageSelected}
          pageLabelText={pageLabelText}
          pageLabelTextSelected={pageLabelTextSelected}
          urlGenerator={urlGenerator}
          getNode={getNode}
        />
        <Stepper clickHandler={this.handleNextPage} disabled={selected === pagesCount} url={urlGenerator(selected + 1)} getNode={getNode}>
          <Icon.ArrowRight className={classes.stepperIcon} />
          <span className={classes.stepperText}>{buttonTextNext}</span>
        </Stepper>
      </nav>
    );
  }
}

Pagination.propTypes = {
  classes: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  limit: PropTypes.number,
  /** Callback that returns the page chosen */
  changeHandler: PropTypes.func,
  /** Screenreader friendly title for the pagination */
  title: PropTypes.string,
  buttonTextPrevious: PropTypes.string,
  buttonTextNext: PropTypes.string,
  /** A page number will be appended to this string */
  pageLabelText: PropTypes.string,
  /** A page number will be appended to this string */
  pageLabelTextSelected: PropTypes.string,
  /** Number of constanstly visible pages at the beginning and at the end of the range */
  anchors: PropTypes.number,
  /** Number of the selected page */
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // eslint-disable-line react/no-unused-prop-types
  /** Number of constantly visible pages to the left and right of the selected page */
  selectedSiblings: PropTypes.number,
  /** A function that should return pagination link url's, if this is not set then the component will render buttons instead of links */
  urlGenerator: PropTypes.func,
  getNode: PropTypes.func,
};

Pagination.defaultProps = {
  selected: 1,
  selectedSiblings: 2,
  anchors: 1,
  limit: 10,
  pageLabelText: 'Go to Page',
  pageLabelTextSelected: 'Current Page, Page',
  buttonTextPrevious: 'Previous',
  buttonTextNext: 'Next',
  title: 'Pagination',
  changeHandler: () => {},
  urlGenerator: () => null,
  getNode: null,
};

const enhance = injectSheet(styles);

export { Pagination as Component, styles };
export default enhance(Pagination);
