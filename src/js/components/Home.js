import React, { Component } from 'react';
import HomeView from './HomeView';

const MAX_WORKOUT_TIME = 90;
const ANIMATION_SPEED = 500;
const dummyData = [
  {
    id: 1,
    name: 'Workout 1',
    image: 'https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/workouts/strength.jpg',
    steps: [
      '30 Deadlifts',
      '25 Squats',
      '30 Pushups',
      '25 Squat Jumps',
      '30 Tricep Dips'
    ],
    time: 30
  },
  {
    id: 2,
    name: 'Workout 2',
    image: 'http://images.shape.mdpcdn.com/sites/shape.com/files/1200-grokker-hiit-workout.jpg',
    steps : [
      '10 Curls',
      '20 Skull Crushers',
      '10 Squats',
      '30 Deadlifts',
      '15 Pullups'
    ],
    time: 45
  }
]

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWorkouts: dummyData,
      shouldShowImage: true
    };
  }

  addWorkout(workout) {
    const newWorkoutList = this.state.currentWorkouts.push(workout);
    this.setState({
      currentWorkouts: newWorkoutList
    });
  }

  onClickImageFn(ev) {
    ev.preventDefault();
    this.setState({
      currentWorkouts: this.state.currentWorkouts,
      shouldShowImage: !this.state.shouldShowImage
    });
    console.log(this.state.shouldShowImage);
  }

  render () {
    return (
      <HomeView />
    );
  }
};
