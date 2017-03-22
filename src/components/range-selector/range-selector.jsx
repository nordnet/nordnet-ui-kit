import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './range-selector.scss';

class RangeSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected,
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  componentDidMount() {
    // this.props.clickHandler(this.props.ranges[this.state.zoom]);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selected: nextProps.selected,
    });
  }

  handleClick(button) {
    this.setState({
      selected: button.type,
    });

    this.props.clickHandler(button);
  }

  renderButton(button) {
    const classes = classNames('range-selector__btn', {
      'range-selector__btn--selected': button.type === this.state.selected,
    });

    return (
      <button key={button.text} className={classes} onClick={() => this.handleClick(button)}>
        { button.text }
      </button>
    );
  }

  render() {
    return (
      <div className={`range-selector range-selector--${this.props.variant}`}>
        { this.props.ranges.map(this.renderButton) }
      </div>
    );
  }
}

RangeSelector.defaultProps = {
  zoom: 0,
  ranges: [{
    type: '1m',
    text: '1m',
  }, {
    type: '3m',
    text: '3m',
  }, {
    type: '6m',
    text: '6m',
  }, {
    type: 'ytd',
    text: 'YTD',
  }, {
    type: '1y',
    text: '1y',
  }, {
    type: 'all',
    text: 'All',
  }],
};

RangeSelector.propTypes = {
  ranges: PropTypes.arrayOf(React.PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.string,
  })),
  variant: PropTypes.oneOf(['light', 'dark', 'muted']),
  clickHandler: PropTypes.func,
  selected: PropTypes.string,
};

export default RangeSelector;
