import { auth } from './firebase';

//create user
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

//sign in with email and password
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

//sign out
export const doSignOut = () => auth.signOut();

//password reset
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

//password change
export const doPasswordChange = password =>
  auth.currentUser.doPasswordChange(password);
