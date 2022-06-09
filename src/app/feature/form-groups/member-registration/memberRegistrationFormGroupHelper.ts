import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseFormGroupHelper } from '../BaseFormGroupHelper';
import { AccountDetailsFormGroupHelper } from './accountDetailsFormGroupHelper';
import { ProfileDetailsFormGroupHelper } from './profileDetailsFormGroupHelper';

export class MemberRegistrationFormGroupHelper extends BaseFormGroupHelper {
  public static createMemberRegistrationForm(
    authService: AuthService
  ): FormGroup {
    return this.fb.group({
      account:
        AccountDetailsFormGroupHelper.createMemberAccountDetailsForm(
          authService
        ),
      profileDetails: ProfileDetailsFormGroupHelper.createProfileDetailsForm(),
    });
  }
}
