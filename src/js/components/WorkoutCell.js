import React, { Component } from 'react';
import WorkoutCellView from './WorkoutCellView';

export default class WorkoutCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowImage: true
    };
     this.onClickImageFn = this.onClickImageFn.bind(this)
  }

  onClickImageFn(ev) {
    ev.preventDefault();
    this.setState({
      shouldShowImage: !this.state.shouldShowImage
    });
  }

  render () {
    const { workout, animationSpeed } = this.props;
    return (
      <WorkoutCellView
        maxTime={workout.maxWorkoutTime}
        shouldShowImage={this.state.shouldShowImage}
        onClickImageFn={this.onClickImageFn}
        title={workout.title}
        image={workout.image}
        steps={workout.steps}
        time={workout.time}
        animationSpeed={animationSpeed}/>
    );
  }
};
