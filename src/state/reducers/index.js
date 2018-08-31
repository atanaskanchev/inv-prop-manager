import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import tenantReducer from './tenant';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  tenantsState: tenantReducer,
  todos,
  visibilityFilter
});

export default rootReducer;
