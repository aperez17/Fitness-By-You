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
    console.log(this.state.shouldShowImage);
  }

  render () {
    return (
      <WorkoutCellView
        maxTime={this.props.maxWorkoutTime}
        shouldShowImage={this.state.shouldShowImage}
        onClickImageFn={this.onClickImageFn}
        title={this.props.title}
        image={this.props.image}
        steps={this.props.steps}
        time={this.props.time}
        animationSpeed={this.props.animationSpeed}/>
    );
  }
};
