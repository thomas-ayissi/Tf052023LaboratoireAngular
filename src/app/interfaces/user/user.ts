export interface User {
  indexUser: number;
  surnameUser: string;
  familyNameUser: string;
  loginUser: string;
  passwordUser: string;
  emailUser: string;
  telephoneUser: string;
  streetNumberAdressUser :string;
  streetNameAdressUser: string;
  categoryUser: 'employee' | 'customer';
  roleUser: 'editor' | 'writer' | 'subscriptionOn' | 'subscriptionOff' | 'trialOn';
  validityDateUser: string;

}
