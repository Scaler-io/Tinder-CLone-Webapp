import { MemberRegistrationRequest } from '../models/auth';
import { IMemberRegistrationFormData } from '../models/form-group-model/memberRegistrationFormModel';
import { MomentToStringDateMapper } from './date.mapper';

export class MemberRegistrationRequestMapper {
  public static mapToRegistrationPayload(
    registrationRequest: IMemberRegistrationFormData
  ): MemberRegistrationRequest {
    return <MemberRegistrationRequest>{
      username: registrationRequest.account.username,
      password: registrationRequest.account.newPassword,
      confirmPassword: registrationRequest.account.passwordConfirm,
      Profile: {
        knownAs: registrationRequest.profileDetails.knownAs,
        gender: registrationRequest.profileDetails.gender,
        dateOfBirth: MomentToStringDateMapper.toDateString(
          registrationRequest.profileDetails.dateOfBirth
        ),
        address: {
          unitNumber: registrationRequest.profileDetails.unitNumber,
          streetNumber: registrationRequest.profileDetails.streetNumber,
          streetName: registrationRequest.profileDetails.streetName,
          streetType: registrationRequest.profileDetails.streetType,
          city: registrationRequest.profileDetails.city,
          state: registrationRequest.profileDetails.state,
          postCode: registrationRequest.profileDetails.postCode,
        },
      },
    };
  }

  private static convertDate(value) {
    MomentToStringDateMapper.toDateString(value);
  }
}
