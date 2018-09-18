import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Icon } from '../../';
import Stepper from './stepper';
import Range from './range';
import styles from './pagination-styles';

class Pagination extends Component {
  state = {
    selected: parseInt(this.props.selected, 10),
  };

  calcPagesCount() {
    const { total, limit } = this.props;

    return Math.ceil(total / limit);
  }

  handlePreviousPage = () => {
    const { selected } = this.state;

    if (selected > 1) {
      this.handlePageSelected(selected - 1);
    }
  };

  handleNextPage = () => {
    const { selected } = this.state;
    const pagesCount = this.calcPagesCount();

    if (selected < pagesCount) {
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

  render() {
    const { classes, buttonTextPrevious, buttonTextNext, selectedSiblings, anchors } = this.props;
    const { selected } = this.state;

    const pagesCount = this.calcPagesCount();

    if (Number.isNaN(pagesCount) || pagesCount <= 1) {
      return null;
    }

    return (
      <nav className={classes.root}>
        <Stepper clickHandler={this.handlePreviousPage} clickable={selected !== 1}>
          <Icon.ArrowLeft className={classes.stepperIcon} />
          <span className={classes.stepperText}>{buttonTextPrevious}</span>
        </Stepper>
        <Range
          anchors={anchors}
          selected={selected}
          selectedSiblings={selectedSiblings}
          pagesCount={pagesCount}
          selectHandler={this.handlePageSelected}
        />
        <Stepper clickHandler={this.handleNextPage} clickable={selected !== pagesCount}>
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
  changeHandler: PropTypes.func,
  buttonTextPrevious: PropTypes.string,
  buttonTextNext: PropTypes.string,
  /** Number of constanstly visible pages at the beginning and at the end of the range */
  anchors: PropTypes.number,
  /** Number of the selected page */
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Number of constantly visible pages to the left and right of the selected page */
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
