import React from 'react';
import PropTypes from 'prop-types';

const TenantListItem = ({ tenant }) => {
  <li>{tenant.id}</li>;
};

TenantListItem.propTypes = {
  tenant: PropTypes.object.isRequired
};

export default TenantListItem;
