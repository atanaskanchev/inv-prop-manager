import React from 'react';
import TenantsList from './TenantsList';
import AddTenantForm from './AddTenantForm';
import withAuthorization from '../Session/withAuthorization';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const TenanatsPage = props => {
  return (
    <div>
      <AddTenantForm />
      <TenantsList tenants={this.props} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authUser: state.sessionState.authUser,
    tenants: state.tenantsState.tenants
  };
};

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(TenanatsPage);
