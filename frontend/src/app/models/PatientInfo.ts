export class PatientInfo {
  id: number;
  username: String;
  password: String;
  firstName: String;
  lastName: String;


  constructor(id: number, username: String, password: String, firstName: String, lastName: String) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
