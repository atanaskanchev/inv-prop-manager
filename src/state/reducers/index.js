import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import tenantReducer from './tenant';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  tenantsState: tenantReducer
});

export default rootReducer;
