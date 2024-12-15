export class LoginPayload {
  email: string;
  password: string;
  constructor() {
    this.email = 'kinarsardhara22@gmail.com';
    this.password = `${new Date().getTime()}`;
  }
}
