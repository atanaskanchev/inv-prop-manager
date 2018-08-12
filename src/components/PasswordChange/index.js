import React, { Component } from 'react';
import { auth } from '../../firebase';

const PasswordChangePage = () => (
  <div>
    <h1>PasswordChange</h1>
    <PasswordChangeForm />
  </div>
);

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { passwordOne } = this.state;

    auth
      .doPasswordChange(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={passwordOne}
          type="password"
          name="passwordOne"
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
          placeholder="New Password"
          autoComplete="new-password"
        />
        <input
          value={passwordTwo}
          type="password"
          name="passwordTwo"
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
          placeholder="Confirm New Password"
          autoComplete="new-password"
        />
        <button disabled={isInvalid} type="submit">
          Change password
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

export default PasswordChangePage;
