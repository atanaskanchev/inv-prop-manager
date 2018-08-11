import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase';
import { SignInLink } from '../SignIn';

const SignUpPage = ({ history }) => (
  <div>
    <h1>Sign Up</h1>
    <SignUpForm history={history} />
    <SignInLink />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, passwordOne } = this.state;
    const { history } = this.props;
    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          type="text"
          name="username"
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
          placeholder="Full name"
          autoComplete="username"
        />
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
          value={passwordOne}
          type="password"
          name="passwordOne"
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
          placeholder="password"
          autoComplete="new-password"
        />
        <input
          value={passwordTwo}
          type="password"
          name="passwordTwo"
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
          placeholder="cofirm password"
          autoComplete="new-password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign up</Link>
  </p>
);
export default withRouter(SignUpPage);
export { SignUpForm, SignUpLink };
