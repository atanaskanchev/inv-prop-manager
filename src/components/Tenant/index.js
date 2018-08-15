import React from 'react';
import TenantsList from './TenantsList';
import AddTenantForm from './AddTenantForm';
import withAuthorization from '../Session/withAuthorization';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const TenanatsPage = ({ authUser }) => {
  return (
    <div>
      <AddTenantForm />
      <TenantsList />
    </div>
  );
};

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(TenanatsPage);
