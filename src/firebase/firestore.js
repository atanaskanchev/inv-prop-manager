import { firestore } from './firebase';

let USERS_DOC_REF = firestore.collection('users');

export const doAddUser = (userId, username, email) => {
  return firestore
    .collection('users')
    .doc(userId)
    .set({
      username,
      email
    });
};

export const doGetUsers = () => {
  const result = USERS_DOC_REF.get();
  console.log('result :', result);
  return result;
};

export const doAddTenant = tenant => {
  return firestore
    .collection('users')
    .doc(tenant.uid)
    .collection('tenants')
    .doc(tenant.id)
    .set(JSON.parse(JSON.stringify(tenant)));
};

export const doGetTenants = uid => {
  return firestore
    .collection('tenancies')
    .where('uid', '==', uid)
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
      });
    })
    .catch(function(error) {
      console.log('Error getting documents: ', error);
    });
};
