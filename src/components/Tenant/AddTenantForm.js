import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { applyAddTenant } from '../../state/actions';
import withAuthorization from '../Session/withAuthorization';
import { firestore } from '../../firebase/index';
import uuidv1 from 'uuid';
import Tenant from './tenant';

const INITIAL_STATE = {
  id: uuidv1(),
  uid: '',
  title: '',
  firstName: '',
  surname: '',
  email: '',
  phone: '',
  mobile: '',
  dob: '',
  niNumber: '',
  other: '',
  error: null
};

class AddTenantForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const {
      id,
      title,
      firstName,
      surname,
      email,
      phone,
      mobile,
      dob,
      niNumber,
      other
    } = this.state;
    const { authUser } = this.props;
    const tenant = new Tenant(
      id,
      authUser.uid,
      title,
      firstName,
      surname,
      email,
      phone,
      mobile,
      dob,
      niNumber,
      other
    );
    // this.props.applyAddTenant({ tenant });
    console.log('authUser :', authUser.uid);
    console.log('tenant :', tenant);
    firestore
      .doAddTenant(tenant)
      .then(this.setState(() => ({ ...INITIAL_STATE })))
      .then(this.setState({ id: uuidv1() }))
      .catch(error => this.setState('error', error));

    firestore.doGetTenants('skbLLgBLogdvnIz2VHppBkCNePE3');
  };

  render() {
    const { error } = this.state;
    return (
      <div className="addTenanatsForm">
        <h5>Add a new tenanat</h5>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.title}
            onChange={this.handleInput}
            type="text"
            name="title"
            className="title"
            placeholder="Title"
          />
          <input
            value={this.state.firstName}
            onChange={this.handleInput}
            type="text"
            name="firstName"
            className="firstName"
            placeholder="First Name"
          />
          <input
            value={this.state.surname}
            onChange={this.handleInput}
            type="text"
            name="surname"
            className="surname"
            placeholder="Surname"
          />
          <input
            value={this.state.email}
            onChange={this.handleInput}
            type="email"
            name="email"
            className="email"
            placeholder="Email"
          />
          <input
            value={this.state.phone}
            onChange={this.handleInput}
            type="tel"
            name="phone"
            className="phone"
            placeholder="Phone"
          />
          <input
            value={this.state.mobile}
            onChange={this.handleInput}
            type="tel"
            name="mobile"
            className="mobile"
            placeholder="Mobile"
          />
          <input
            value={this.state.dob}
            onChange={this.handleInput}
            type="date"
            name="dob"
            className="dob"
            placeholder="Date of birth"
          />
          <input
            value={this.state.niNumber}
            onChange={this.handleInput}
            type="text"
            name="niNumber"
            className="niNumber"
            placeholder="NIN"
          />
          <input
            value={this.state.other}
            onChange={this.handleInput}
            type="textarea"
            name="other"
            className="other"
            placeholder="other"
          />
          <button type="submit">Save Tenant</button>
        </form>
        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { applyAddTenant: tenant => dispatch(applyAddTenant(tenant)) };
};

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  tenants: state.tenantsState.tenants
});

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddTenantForm);
