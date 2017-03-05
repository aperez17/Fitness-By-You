import RequestWatcher from './request-watcher';

let protocol = 'ws:';
if (window.location.protocol === 'https:') {
  protocol = 'wss:';
}
const host = ((process.env.NODE_ENV === 'development') ?
  'localhost:8102' : `${window.location.host}`);
const webSocketUrl = `${protocol}//${host}`;

const socketWatcher = new RequestWatcher({ webSocketUrl });

let workoutsWatcher;

export function watchWorkouts() {
  workoutsWatcher = socketWatcher.watch('/api/workout');
  return workoutsWatcher;
}

export function unwatchWorkouts() {
  if (workoutsWatcher) {
    workoutsWatcher.stop();
  }
}

const workoutWatcher = {};

export function watchWorkout(id) {
  workoutWatcher[id] = socketWatcher.watch(`/api/workout/${id}`);
  return workoutWatcher[id];
}

export function unwatchWorkout(id) {
  if (workoutWatcher[id]) {
    workoutWatcher[id].stop();
  }
}
