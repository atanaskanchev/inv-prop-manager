import { TENANT_ADD } from '../constants/index';
import { TENANS_SET } from '../constants/index';
import { applyAddTenant } from '../actions';
import { applySetTenants } from '../actions';

const INITIAL_STATE = {
  tenants: []
};

const tenantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TENANT_ADD:
      return applyAddTenant(state, action);
    case TENANS_SET:
      return applySetTenants(state, action);
    default:
      return state;
  }
};

export default tenantReducer;
