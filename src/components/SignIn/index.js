import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const SignInPage = ({ history }) => (
  <div>
    <h1>Sign In</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;
    const { history } = this.props;
    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = email === '' || password === '';

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
        <input
          value={password}
          type="password"
          name="password"
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
          placeholder="password"
          autoComplete="new-password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const SignInLink = () => (
  <p>
    Already have an account? <Link to={routes.SIGN_IN}>Login</Link>
  </p>
);

export default withRouter(SignInPage);

export { SignInForm, SignInLink };
