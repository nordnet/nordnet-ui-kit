import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Button } from '../..';
import styles from './show-more-styles';

class ShowMore extends React.PureComponent {
  state = {
    isOverflowing: false,
    showMoreClicked: false,
  };

  componentDidMount() {
    const { children } = this.props;
    if (children) {
      this.checkIfOverflowing();
    }
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps) {
    const { children } = this.props;
    if (children !== prevProps.children) {
      this.checkIfOverflowing();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.checkIfOverflowing();
  };

  checkIfOverflowing = () => {
    const { showMoreClicked, isOverflowing } = this.state;

    if (!showMoreClicked) {
      const overflowing =
        this.descriptionContainer.clientHeight < this.descriptionContainer.scrollHeight;
      if (isOverflowing !== overflowing) this.setState({ isOverflowing: overflowing });
    }
  };

  handleShowMore = () => {
    const { onShowMore } = this.props;

    onShowMore();
    this.setState({ showMoreClicked: true });
  };

  render() {
    const { children, showMoreButtonContent, cutoffHeight, className, classes } = this.props;
    const { isOverflowing, showMoreClicked } = this.state;

    const showMoreButton = isOverflowing && !showMoreClicked;

    return (
      <div className={className}>
        <div
          ref={elem => {
            this.descriptionContainer = elem;
          }}
          className={cn(classes.text, {
            [classes.textShowAll]: showMoreClicked,
            [classes.disableOverlay]: !showMoreButton,
          })}
          style={{ maxHeight: showMoreClicked ? 'none' : cutoffHeight }}
        >
          {children}
        </div>
        {showMoreButton ? (
          <Button
            variant="link"
            modifier="action"
            onClick={this.handleShowMore}
            className={classes.button}
          >
            {showMoreButtonContent}
          </Button>
        ) : null}
      </div>
    );
  }
}

ShowMore.defaultProps = {
  children: null,
  className: '',
  showMoreButtonContent: 'Show more',
  cutoffHeight: 200,
  backgroundColor: 'white',
  onShowMore: () => {},
};

ShowMore.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  showMoreButtonContent: PropTypes.node,
  onShowMore: PropTypes.func,
  cutoffHeight: PropTypes.number,
  /* Needs to be provided for the gradient to work unless background color is white */
  backgroundColor: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  classes: PropTypes.shape().isRequired,
};

export { ShowMore as Component };

export default injectSheet(styles)(ShowMore);
