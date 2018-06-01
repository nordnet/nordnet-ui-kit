import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipe from 'react-easy-swipe';
import cn from 'classnames';
import injectSheet from 'react-jss';
import ChevronDown from '../icon/icons/chevronDown';
import styles from './carousel-styles';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.wrapperClickHandler = this.wrapperClickHandler.bind(this);

    this.state = {
      initialized: false,
      selectedItem: props.selectedItem,
      hasMount: false,
      handledDelta: 0,
      restLoaded: false,
    };
  }

  componentDidMount() {
    this.setupCarousel();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedItem !== this.state.selectedItem) {
      this.updateSizes();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSizes);
    window.removeEventListener('DOMContentLoaded', this.updateSizes);
  }

  onSwipeStart = () => {
    this.onInitialScroll();
    this.setState({
      swiping: true,
    });
  };

  onSwipeEnd = () => {
    this.setState({
      swiping: false,
    });
  };

  onSwipeMove = delta => {
    const list = this.itemList.swiper;
    const initialBoundary = 0;
    const currentPosition = -this.state.selectedItem * this.state.percentage;
    const itemsPerPage = parseInt(list.clientWidth / this.state.itemSize, 10);
    const finalBoundary = -(this.props.children.length - itemsPerPage) * this.state.percentage;

    const axisDelta = delta.x;
    let handledDelta = axisDelta;

    // prevent user from swiping left out of boundaries
    if (currentPosition >= initialBoundary && axisDelta > 0) {
      handledDelta = 0;
    }

    // prevent user from swiping right out of boundaries
    if (currentPosition <= finalBoundary && axisDelta < 0) {
      handledDelta = 0;
    }

    const position = currentPosition + 100 / (list.clientWidth / handledDelta);
    list.style.transform = this.calcTransform(position);

    // allows scroll if the swipe was within the tolerance
    const hasMoved = Math.abs(axisDelta) > this.props.swipeScrollTolerance;

    if (hasMoved) {
      this.setState({
        handledDelta,
      });
    }

    return hasMoved;
  };

  onInitialScroll() {
    if (!this.state.restLoaded) {
      setTimeout(() => {
        this.props.intialScrollCallback();
      }, 300);

      this.setState({
        restLoaded: true,
      });
    }
  }

  setupCarousel() {
    window.addEventListener('resize', this.updateSizes);
    window.addEventListener('DOMContentLoaded', this.updateSizes);

    this.setState({
      initialized: true,
    });

    this.updateSizes();
  }

  updateSizes = () => {
    if (!this.itemList || !this.itemList.swiper) {
      return;
    }

    const firstItem = this.indexBox0;
    const itemSize = firstItem ? firstItem.clientWidth : this.props.defaultItemSize;
    const percentage = itemSize / this.itemList.swiper.clientWidth * 100;

    this.setState({
      percentage,
      itemSize,
      wrapperSize: this.itemList.swiper.clientWidth,
    });
  };

  calcTransform = position => `translate3d(${position}%, 0, 0)`;

  calcMovePositions = delta => parseInt(Math.abs(delta) / this.state.itemSize, 10);

  decrement = () => {
    const movedPositions = this.calcMovePositions(this.state.handledDelta) + 1;
    this.moveTo(this.state.selectedItem - movedPositions);
  };

  increment = () => {
    this.onInitialScroll();
    const movedPositions = this.calcMovePositions(this.state.handledDelta) + 1;
    this.moveTo(this.state.selectedItem + movedPositions);
  };

  scrollLeft = () => {
    this.moveTo(this.state.selectedItem - this.calcMovePositions(this.state.wrapperSize));
  };

  scrollRight = () => {
    this.onInitialScroll();
    this.moveTo(this.state.selectedItem + this.calcMovePositions(this.state.wrapperSize));
  };

  moveTo = position => {
    const swiper = this.itemList.swiper;
    const itemsPerPage = parseInt(swiper.clientWidth / this.state.itemSize, 10);

    const lastPosition = this.props.children.length - itemsPerPage;
    let newPosition = position;

    if (position < 0) {
      newPosition = 0;
    }

    if (position > lastPosition) {
      newPosition = lastPosition;
    }

    this.setState({
      selectedItem: newPosition,
      handledDelta: 0,
    });
  };

  wrapperClickHandler(e) {
    const left = this.wrapper.getBoundingClientRect().left;

    if (e.nativeEvent.clientX - left > this.calcMovePositions(this.state.wrapperSize) * this.state.itemSize - 1) {
      this.increment();
    }
  }

  renderItems() {
    return React.Children.map(this.props.children, (item, index) => (
      <div
        ref={c => {
          this[`indexBox${index}`] = c;
        }}
        key={`itemKey${index}`}
      >
        {item}
      </div>
    ));
  }

  render() {
    const { classes } = this.props;
    const itemsLength = this.props.children.length;

    const hasPrev = this.state.selectedItem > 0;
    const hasNext = this.state.selectedItem < itemsLength - this.calcMovePositions(this.state.wrapperSize);

    const currentPosition = -this.state.selectedItem * this.state.percentage;

    let itemListStyles = {
      transform: this.calcTransform(currentPosition),
    };

    if (!this.state.swiping) {
      itemListStyles = {
        ...itemListStyles,
        transitionDuration: `${this.props.transitionTime}ms`,
      };
    }

    const swiperProps = {
      selectedItem: this.state.selectedItem,
      className: cn(classes.slider, { [classes.swiping]: this.state.swiping }),
      onSwipeMove: this.onSwipeMove,
      onSwipeStart: this.onSwipeStart,
      onSwipeEnd: this.onSwipeEnd,
      onSwipeLeft: this.increment,
      onSwipeRight: this.decrement,
      style: itemListStyles,
      tolerance: this.props.swipeScrollTolerance,
    };

    return (
      <div
        className={classes.wrapper}
        ref={c => {
          this.wrapper = c;
        }}
      >
        {/* eslint-disable jsx-a11y/no-static-element-interactions */}
        <div className={classes.swipeContainer} onClick={this.wrapperClickHandler}>
          {/* eslint-enable jsx-a11y/no-static-element-interactions */}
          <Swipe
            {...swiperProps}
            ref={c => {
              this.itemList = c;
            }}
            allowMouseEvents
          >
            {this.renderItems()}
          </Swipe>
        </div>
        <div className={classes.buttonContainer}>
          <div className={cn(classes.scrollButton)}>
            <button className={cn(classes.button, classes.arrowLeft, { [classes.invisible]: !hasPrev })} onClick={this.scrollLeft}>
              <ChevronDown stroke="currentColor" fill="currentColor" width={14} height={14} style={{ paddingBottom: 3 }} />
            </button>
          </div>
          <div className={cn(classes.scrollButton)}>
            <button className={cn(classes.button, classes.arrowRight, { [classes.invisible]: !hasNext })} onClick={this.scrollRight}>
              <ChevronDown stroke="currentColor" fill="currentColor" width={14} height={14} style={{ paddingBottom: 3 }} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node,
  selectedItem: PropTypes.number,
  transitionTime: PropTypes.number,
  swipeScrollTolerance: PropTypes.number,
  intialScrollCallback: PropTypes.func,
  classes: PropTypes.object.isRequired,
  defaultItemSize: PropTypes.number.isRequired,
};

Carousel.defaultProps = {
  children: [],
  selectedItem: 0,
  transitionTime: 350,
  swipeScrollTolerance: 5,
  intialScrollCallback: () => {},
};

const Enhanced = injectSheet(styles)(Carousel);

export { Carousel as Component };
export default Enhanced;
