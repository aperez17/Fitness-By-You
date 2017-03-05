const _sessions = {};
const _notifiers = {
  task: [],
  workout: []
};

export const tasks = [
  {
    id: 'task-1',
    name: 'Initializing instance',
    percentComplete: 0,
    status: 'Waiting'
  },
  {
    id: 'task-2',
    name: 'Adding components',
    percentComplete: 0,
    status: 'Waiting'
  },
  {
    id: 'task-3',
    name: 'Testing infrastructure',
    percentComplete: 0,
    status: 'Waiting'
  },
  {
    id: 'task-4',
    name: 'Removing instance',
    percentComplete: 0,
    status: 'Waiting'
  }
];

export const workouts = [
  {
    "id": 'workout-1',
    "name": 'Workout 1',
    "image": "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/workouts/strength.jpg",
    "steps": [
      '30 Deadlifts',
      '25 Squats',
      '30 Pushups',
      '25 Squat Jumps',
      '30 Tricep Dips'
    ],
    "time": 30
  },
  {
    id: 'workout-2',
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
];

const increments = [5, 10, 20, 25];

setInterval(
  () => {
    const task = tasks[
      Math.floor(Math.random() * tasks.length)
    ];

    if (!task.percentComplete) {
      task.status = 'Running';
    }

    _notifiers.task.forEach(notifier => notifier(task));
  },
  2000
);

setInterval(
  () => {
    tasks.forEach((task) => {
      if (task.status === 'Running') {
        if (task.percentComplete < 100) {
          task.percentComplete = Math.min(100, task.percentComplete +
            increments[
              Math.floor(Math.random() * increments.length)
            ]
          );
        } else {
          task.percentComplete = 0;
          task.status = 'Waiting';
        }
        _notifiers.task.forEach(notifier => notifier(task));
      }
    });
  },
  1000
);

export function addSession(token, data) {
  _sessions[token] = data;
}

export function getSession(token) {
  return _sessions[token];
}

export function addNotifier(type, cb) {
  _notifiers[type].push(cb);
}

export function getTasks(filters) {
  if (filters) {
    return Promise.resolve({
      tasks: tasks.filter(task =>
        Object.keys(filters).some(filter => task[filter] === filters[filter])
      )
    });
  }
  return Promise.resolve({ tasks });
}

export function getWorkouts(filters) {
  if (filters) {
    return Promise.resolve({
      workouts: workouts.filter(workout =>
        Object.keys(filters).some(filter => workout[filter] === filters[filter])
      )
    });
  }
  return Promise.resolve({ workouts });
}

export function getTask(id) {
  let task;
  tasks.some((t) => {
    if (t.id === id) {
      task = t;
      return true;
    }
    return false;
  });
  return Promise.resolve({ task });
}

export function getWorkout(id) {
  let workout;
  workouts.some((w) => {
    if (w.id === id) {
      workout = w;
      return true;
    }
    return false;
  });
  return Promise.resolve({ workout });
}

export default { addNotifier, addSession, getSession, getTask, getTasks, getWorkouts, getWorkout };
