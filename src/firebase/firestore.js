import { firestore } from './firebase';

export const doAddUser = (userId, username, email) => {
  return firestore
    .collection('users')
    .doc(userId)
    .set({
      username,
      email
    });
};

export const doCreateTenant = tenant => {
  console.log('doCreateTenant tenant :', tenant);
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
