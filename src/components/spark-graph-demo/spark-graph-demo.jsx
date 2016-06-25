import React, { PropTypes } from 'react';
import SparkGraph from '../spark-graph';
import Button from '../button/button';
import Input from '../input/input';

class SparkGraphDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { points: props.points };
    this.updatePoints = this.updatePoints.bind(this);
  }

  updatePoints() {
    if (this.inputPoints) {
      this.setState({ points: this.inputPoints.split(',').map(Number) });
    }
    delete this.inputPoints;
  }


  render() {
    const { points } = this.state;
    const { stroke } = this.props;
    return (
      <div>
        <SparkGraph points={ points } stroke={ stroke } />
        <div style={ { display: '-webkit-box' } }>
          <Button
            onClick={ this.updatePoints }
            style={ { marginRight: '1.6rem' } }
          >
          Update
          </Button>
          <Input
            label="Points"
            placeholder="Enter array of points"
            value={ points.toString() }
            onChange={ event => {
              this.inputPoints = event.target.value;
            } }
          />
        </div>
      </div>
    );
  }

}

SparkGraphDemo.propTypes = {
  points: PropTypes.arrayOf(PropTypes.number).isRequired,
  stroke: PropTypes.string,
};

export default SparkGraphDemo;
