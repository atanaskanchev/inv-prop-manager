import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withAuthorization from '../Session/withAuthorization';
import { firestore } from '../../firebase';

import { USERS_SET } from '../../state/constants';

class HomePage extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;

    let arr = [];
    firestore.doGetUsers().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.data());
        arr.push(doc.data());
      });
    });
    onSetUsers(arr);
  }
  render() {
    const { users } = this.props;
    console.log('this.props.users :', this.props.users);
    return (
      <div>
        <h1>Home</h1>
        {console.log('users in render :', users)}
        <p>The Home Page is accessible by every signed in user.</p>
        {!!users && <UserList users={users} />}
        <hr />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>
    {console.log('users in UsersList : ', users)}
  </div>
);

const mapStateToProps = state => ({
  users: state.userState.users
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: USERS_SET, users })
});

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage);
