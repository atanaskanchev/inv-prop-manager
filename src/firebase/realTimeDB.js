import { realTimeDB } from './firebase';

export const doCreateUser = (id, username, email) =>
  realTimeDB.ref(`users/${id}`).set({
    username,
    email
  });

export const onceGetUsers = () => realTimeDB.ref('users').once('value');
