export const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action.authUser
});

export const applyAddTenant = (state, action) => ({
  ...state, tenants: [...state.tenants, action.tenant]
});

export const applySetTenants = (state, action) => ({
  ...state,
  tenants: action.tenant
});

export const applySetUsers = (state, action) => ({
  ...state,
  users: action.users
});
