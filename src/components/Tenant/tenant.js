export default class Tenant {
  constructor(
    id,
    uid,
    title,
    firstName,
    surname,
    email,
    phone,
    mobile,
    dob,
    niNumber,
    other
  ) {
    this.id = id;
    this.uid = uid;
    this.title = title;
    this.firstName = firstName;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.mobile = mobile;
    this.dob = dob;
    this.niNumber = niNumber;
    this.other = other;
  }
}
