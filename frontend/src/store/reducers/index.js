import { combineReducers } from 'redux';

import { preferencesReducer } from './userPreferences';
import { authorizationReducer } from './auth';
import { notificationsReducer } from './notifications';
import { tasksReducer } from './tasks';
import { userReducer } from './user';
import { projectReducer } from './project';
import { loaderReducer } from './loader';

export default combineReducers({
  preferences: preferencesReducer,
  auth: authorizationReducer,
  notifications: notificationsReducer,
  lockedTasks: tasksReducer,
  user: userReducer,
  project: projectReducer,
  loader: loaderReducer,
});
