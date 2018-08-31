import React from 'react';
import TenantListItem from './TenantListItem';

const TenantsList = ({ tenants }) => {
  return (
    <div>
      <h3>Tenanats list</h3>
      <ul>
        {tenants.map((tenant, index) => {
          <TenantListItem key={tenant.id} tenant={tenant} />;
        })}
      </ul>
    </div>
  );
};
export default TenantsList;
