import { USERS_SET } from '../constants/index';
import { applySetUsers } from '../actions';

const INITIAL_STATE = {
  users: {}
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USERS_SET: {
      return applySetUsers(state, action);
    }
    default:
      return state;
  }
}

export default userReducer;
