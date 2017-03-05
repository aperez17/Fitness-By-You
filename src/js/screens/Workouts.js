import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import Spinning from 'grommet/components/icons/Spinning';

import WorkoutCell from '../components/WorkoutCell';
import Notification from 'grommet/components/Notification';
import { getMessage } from 'grommet/utils/Intl';

import NavControl from '../components/NavControl';
import {
  loadWorkouts, unloadWorkouts
} from '../actions/workouts';

import { pageLoaded } from './utils';

const MAX_WORKOUT_TIME = 90;
const ANIMATION_SPEED = 500;

class Workouts extends Component {
  componentDidMount() {
    pageLoaded('Workouts');
    this.props.dispatch(loadWorkouts());
  }

  componentWillUnmount() {
    this.props.dispatch(unloadWorkouts());
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentWorkouts: dummyData,
  //     shouldShowImage: true
  //   };
  // }

  addWorkout(workout) {
    const newWorkoutList = this.state.currentWorkouts.push(workout);
    this.setState({
      currentWorkouts: newWorkoutList
    });
  }

  render () {
    const { error, workouts } = this.props;
    const { intl } = this.context;

    let errorNode;
    let listNode;
    console.log(this.props);
    if (error) {
      errorNode = (
        <Notification status='critical' size='large' state={error.message}
          message='An unexpected error happened, please try again later' />
      );
    } else if (workouts.length === 0) {
      listNode = (
        <Box direction='row' responsive={false}
          pad={{ between: 'small', horizontal: 'medium', vertical: 'medium' }}>
          <Spinning /><span>Loading...</span>
        </Box>
      );
    } else {
      const workoutsNode = (workouts || []).map((workout, index) => (
        <ListItem key={index} justify='between'>
          <WorkoutCell workout={workout} />
        </ListItem>
      ));

      listNode = (
        <List>
          {workoutsNode}
        </List>
      );
    }
    return (
      <Article primary={true}>
        <Header direction='row' justify='between' size='large'
          pad={{ horizontal: 'medium', between: 'small' }}>
          <NavControl name={getMessage(intl, 'Workouts')} />
        </Header>
        {errorNode}
        <Box pad={{ horizontal: 'medium' }}>
          <Paragraph size='large'>
            The backend here is using websocket.
          </Paragraph>
        </Box>
        {listNode}
      </Article>
    );
  }
};

Workouts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  workouts: PropTypes.arrayOf(PropTypes.object)
};

Workouts.contextTypes = {
  intl: PropTypes.object
};

const select = state => ({ ...state.workouts });

export default connect(select)(Workouts);
