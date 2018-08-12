import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const PasswordForgetPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email } = this.state;

    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          type="email"
          name="email"
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
          placeholder="email"
          autoComplete="username"
        />
        <button disabled={isInvalid} type="submit">
          Reset my password
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const PasswordForgetLink = () => (
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default withRouter(PasswordForgetPage);

export { PasswordForgetForm, PasswordForgetLink };
