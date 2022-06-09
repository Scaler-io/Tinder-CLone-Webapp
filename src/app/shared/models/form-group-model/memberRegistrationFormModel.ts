export interface IMemberRegistrationFormData {
  account: IAccountDetailsFormData;
  profileDetails: IProfileDetailsFormData;
}

export interface IAccountDetailsFormData {
  username: string;
  newPassword: string;
  passwordConfirm: string;
}

export interface IProfileDetailsFormData {
  knownAs: string;
  gender: string;
  dateOfBirth: moment.Moment;
  unitNumber: string;
  streetNumber: string;
  streetName: string;
  streetType: string;
  city: string;
  state: string;
  postCode: string;
}
