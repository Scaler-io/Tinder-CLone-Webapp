export interface AuthUser {
  username: string;
  token: string;
  photoUrl: string;
  knownAs: string;
  gender: string;
  roles: string[];
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface AuthError {
  code: string;
  message: string;
}

export interface Address {
  unitNumber: string;
  streetNumber: string;
  streetName: string;
  streetType: string;
  city: string;
  state: string;
  postCode: string;
}

export interface Profile {
  dateOfBirth: string;
  knownAs: string;
  gender: string;
  address: Address;
}

export interface MemberRegistrationRequest {
  username: string;
  password: string;
  confirmPassword: string;
  Profile: Profile;
}
