import { MemberRegistrationRequest } from '../models/auth';

export function MemberRegistrationRequestMapper(
  registrationRequest
): MemberRegistrationRequest {
  return <MemberRegistrationRequest>{
    username: registrationRequest.accountFormGroup.username,
    password: registrationRequest.accountFormGroup.newPassword,
    confirmPassword: registrationRequest.accountFormGroup.confirmPassword,
    Profile: {
      knownAs: registrationRequest.profileDetailsFormGroup.knownAs,
      gender: registrationRequest.profileDetailsFormGroup.gender,
      dateOfBirth: registrationRequest.profileDetailsFormGroup.dateOfBirth,
      address: {
        unitNumber: registrationRequest.profileDetailsFormGroup.unitNumber,
        streetNumber: registrationRequest.profileDetailsFormGroup.streetNumber,
        streetName: registrationRequest.profileDetailsFormGroup.streetName,
        streetType: registrationRequest.profileDetailsFormGroup.streetType,
        city: registrationRequest.profileDetailsFormGroup.city,
        state: registrationRequest.profileDetailsFormGroup.state,
        postCode: registrationRequest.profileDetailsFormGroup.postCode,
      },
    },
  };
}
