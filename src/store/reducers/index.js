import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import projectReducer from './projectReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  project: projectReducer,
  users: usersReducer,
  form: reduxForm
});
