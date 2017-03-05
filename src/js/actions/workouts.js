import { WORKOUTS_LOAD, WORKOUTS_UNLOAD, WORKOUT_LOAD, WORKOUT_UNLOAD } from '../actions';
import {
  watchWorkout, unwatchWorkout, watchWorkouts, unwatchWorkouts
} from '../api/workouts';

export function loadWorkouts() {
  return dispatch => (
    watchWorkouts()
      .on('success',
        payload => dispatch({ type: WORKOUTS_LOAD, payload })
      )
      .on('error',
        payload => dispatch({ type: WORKOUTS_LOAD, error: true, payload })
      )
      .start()
  );
}

export function unloadWorkouts() {
  unwatchWorkouts();
  return { type: WORKOUTS_UNLOAD };
}

export function loadWorkout(id) {
  return dispatch => (
    watchWorkout(id)
      .on('success',
        payload => dispatch({ type: WORKOUT_LOAD, payload })
      )
      .on('error',
        payload => dispatch({ type: WORKOUT_LOAD, error: true, payload })
      )
      .start()
  );
}

export function unloadWorkout(id) {
  unwatchWorkout(id);
  return { type: WORKOUT_UNLOAD };
}
