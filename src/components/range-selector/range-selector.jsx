import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './range-selector.scss';

class RangeSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zoom: props.zoom,
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  componentDidMount() {
    // this.props.clickHandler(this.props.ranges[this.state.zoom]);
  }

  handleClick(button, i) {
    this.setState({
      zoom: i,
    });

    this.props.clickHandler(button);
  }

  renderButton(button, i) {
    const classes = classNames('range-selector__btn', {
      'range-selector__btn--selected': i === this.state.zoom,
    });

    return (
      <button key={ button.text } className={ classes } onClick={ () => this.handleClick(button, i) }>
        { button.text }
      </button>
    );
  }

  render() {
    return (
      <div className={ `range-selector range-selector--${this.props.variant}` }>
        { this.props.ranges.map(this.renderButton) }
      </div>
    );
  }
}

RangeSelector.defaultProps = {
  zoom: 0,
  ranges: [{
    type: 'month',
    count: 1,
    text: '1m',
  }, {
    type: 'month',
    count: 3,
    text: '3m',
  }, {
    type: 'month',
    count: 6,
    text: '6m',
  }, {
    type: 'ytd',
    text: 'YTD',
  }, {
    type: 'year',
    count: 1,
    text: '1y',
  }, {
    type: 'all',
    text: 'All',
  }],
};

RangeSelector.propTypes = {
  zoom: PropTypes.number,
  ranges: PropTypes.arrayOf(React.PropTypes.object),
  variant: PropTypes.oneOf(['light', 'dark']),
  clickHandler: PropTypes.func,
};

export default RangeSelector;
