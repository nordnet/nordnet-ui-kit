import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './widget.scss';
import SparkGraph from '../spark-graph';

function renderHeader(header) {
  let headerBody = header;

  if (typeof header === 'string') {
    headerBody = <h4 className="widget__heading">{ header }</h4>;
  }

  return (
    <div className="widget__header">
      { headerBody }
    </div>
  );
}

export default class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [
        3, 1, 3, 1, 3, 3, 1, 3, 1, 3, 3, 1, 3, 1,
      ],
    };
    const that = this;
    this.interval = setInterval(() => {
      const points = [...that.state.points, this.getRandom()];
      that.setState({
        points,
      });
    }, 2000);

    this.onStopInterval = this.onStopInterval.bind(this);
  }

  onStopInterval() {
    clearInterval(this.interval);
  }

  getRandom() {
    return Math.floor(Math.random() * 10);
  }

  render() {
    const { header, children, fullWidth, className, ...rest } = this.props;
    const classes = classNames('widget', className);
    const bodyClasses = classNames('widget__body', {
      'widget__body--full-width': fullWidth,
      'widget__body--no-header': !header,
    });

    return (
      <div { ...rest } className={ classes }>
        { header ? renderHeader(header) : <span /> }
        <div className={ bodyClasses }>
          { children }
          <SparkGraph points={ this.state.points } />
          <button onClick={ this.onStopInterval }>STOPPA</button>
        </div>
      </div>
    );
  }
}

Widget.defaltProps = {
  fullWidth: false,
};

Widget.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
};
