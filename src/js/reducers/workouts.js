import { WORKOUTS_LOAD, WORKOUTS_UNLOAD, WORKOUT_LOAD, WORKOUT_UNLOAD } from '../actions';
import { createReducer } from './utils';

const initialState = {
  workouts: [],
  workout: undefined
};

const handlers = {
  [WORKOUTS_LOAD]: (state, action) => {
    if (!action.error) {
      action.payload.error = undefined;
      return action.payload;
    }
    return { error: action.payload };
  },
  [WORKOUTS_UNLOAD]: () => initialState,
  [WORKOUT_LOAD]: (state, action) => {
    if (!action.error) {
      action.payload.error = undefined;
      return action.payload;
    }
    return { error: action.payload };
  },
  [WORKOUT_UNLOAD]: () => initialState
};

export default createReducer(initialState, handlers);
