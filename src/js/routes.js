import Login from './screens/Login';
import Workouts from './screens/Workouts';
import Main from './components/Main';
import Dashboard from './screens/Dashboard';
import Tasks from './screens/Tasks';
import Task from './screens/Task';
import NotFound from './screens/NotFound';

export default {
  path: '/',
  component: Main,
  childRoutes: [
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: 'tasks/:id', component: Task },
    { path: 'tasks', component: Tasks },
    { path: 'workouts', component: Workouts },
    { path: '*', component: NotFound }
  ],
  indexRoute: { component: Dashboard }
};
