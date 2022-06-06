import { Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import {
  PasswordMatchValidator,
  StrongPasswordPatternValidator,
} from 'src/app/shared/validators/passwordValidators';
import { DuplicateUserName } from 'src/app/shared/validators/usernameCustomValidators';
import { BaseFormGroupHelper } from '../BaseFormGroupHelper';

export class AccountDetailsFormGroupHelper extends BaseFormGroupHelper {
  public static createMemberAccountDetailsForm(authService: AuthService) {
    return this.fb.group({
      username: ['', [Validators.required, Validators.max(20)], [DuplicateUserName(authService)]],
      newPassword: ['',[Validators.required,Validators.max(20),Validators.min(6),StrongPasswordPatternValidator]],
      passwordConfirm: ['',[Validators.required,Validators.max(20),Validators.min(6),PasswordMatchValidator]],
    });
  }
}
