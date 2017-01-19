import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Button from 'grommet/components/Button';
import WorkoutCell from './WorkoutCell';

export default class DashboardView extends Component {
  render () {
    var cells = [];
    for(var workout of this.props.workoutList) {
      cells.push(<WorkoutCell
        key={workout.id}
        title={workout.name}
        image={workout.image}
        steps={workout.steps}
        time={workout.time}
        maxTime={this.props.maxTime}
        onClickImageFn={this.props.onClickImageFn}
        shouldShowImage={this.props.shouldShowImage}
        animationSpeed={this.props.animationSpeed}
        />);
    }
    return (
      <Section primary={true}>
        <Heading>Add New Workout</Heading>
        <table>
          <tbody>
            {cells}
          </tbody>
        </table>
      </Section>
    );
  }
};
