import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './graph-zoom.scss';

class GraphZoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zoom: props.zoom,
    };

    this.buttons = [{
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
    }];

    this.handleClick = this.handleClick.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  componentDidMount() {
    // this.props.clickHandler(this.buttons[this.state.zoom]);
  }

  handleClick(button, i) {
    this.setState({
      zoom: i,
    });

    this.props.clickHandler(button);
  }

  renderButton(button, i) {
    const classes = classNames('graph-zoom__btn', {
      'graph-zoom__btn--selected': i === this.state.zoom,
    });

    return (
      <button key={ button.text } className={ classes } onClick={ () => this.handleClick(button, i) }>
        { button.text }
      </button>
    );
  }

  render() {
    return (
      <div className={ `graph-zoom graph-zoom--${this.props.variant}` }>
        { this.buttons.map(this.renderButton) }
      </div>
    );
  }
}

GraphZoom.defaultProps = {
  zoom: 0,
};

GraphZoom.propTypes = {
  zoom: PropTypes.number,
  /** Theme variant of the chart. */
  variant: PropTypes.oneOf(['light', 'dark']),
  clickHandler: PropTypes.func,
};

export default GraphZoom;
