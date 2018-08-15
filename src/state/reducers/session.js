import { AUTH_USER_SET } from '../constants/index';
import { applySetAuthUser } from '../actions';

const INITIAL_STATE = {
  authUser: null
};

function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER_SET: {
      return applySetAuthUser(state, action);
    }
    default:
      return state;
  }
}

export default sessionReducer;
