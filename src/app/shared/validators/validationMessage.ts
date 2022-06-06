import { FormGroup } from '@angular/forms';
import { ValidationMessage } from '../models/validation-message';

export const validationMessages: ValidationMessage[] = [
  {
    error: 'required',
    formControlName: ['username'],
    message: 'Please enter username',
  },
  {
    error: 'usernameExists',
    formControlName: ['username'],
    message: 'This username already exists',
  },
  {
    error: 'required',
    formControlName: ['password'],
    message: 'Please enter password',
  },
  {
    error: 'required',
    formControlName: ['newPassword'],
    message: 'Please enter password',
  },
  {
    error: 'pattern',
    formControlName: ['newPassword'],
    message: 'Please enter a strong password',
  },
  {
    error: 'password_mismatch',
    formControlName: ['passwordConfirm'],
    message: 'Pssword did not match',
  },
  {
    error: 'Unauthorized',
    formControlName: ['username'],
    message: 'Username or password was incorrect',
  },
  {
    error: 'required',
    formControlName: ['knownAs'],
    message: 'Please enter a public name',
  },
  {
    error: 'required',
    formControlName: ['gender'],
    message: 'Please select gender',
  },
  {
    error: 'required',
    formControlName: ['dateOfBirth'],
    message: 'Please enter date of birth',
  },
  {
    error: 'required',
    formControlName: ['unitNumber'],
    message: 'Please enter unit number',
  },
  {
    error: 'required',
    formControlName: ['streetNumber'],
    message: 'Please enter street number',
  },
  {
    error: 'required',
    formControlName: ['streetName'],
    message: 'Please enter street name',
  },
  {
    error: 'required',
    formControlName: ['streeyType'],
    message: 'Please select street type',
  },
  {
    error: 'required',
    formControlName: ['city'],
    message: 'Please enter city',
  },
  {
    error: 'required',
    formControlName: ['state'],
    message: 'Please enter state',
  },
  {
    error: 'required',
    formControlName: ['postCode'],
    message: 'Please enter postCode',
  },
];

export function validationMessage(
  formControlName: string,
  formGroup: FormGroup
): string {
  if (formGroup && formGroup.get(formControlName)) {
    for (let error of validationMessages) {
      if (
        !error.formControlName ||
        error.formControlName.length === 0 ||
        (error.formControlName.includes(formControlName) &&
          formGroup.get(formControlName).hasError(error.error))
      ) {
        return error.message;
      }
    }
  }

  return '';
}
