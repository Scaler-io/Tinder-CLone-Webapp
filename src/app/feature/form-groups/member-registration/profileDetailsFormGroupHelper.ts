import { FormGroup, Validators } from '@angular/forms';
import { BaseFormGroupHelper } from '../BaseFormGroupHelper';

export class ProfileDetailsFormGroupHelper extends BaseFormGroupHelper {
  public static createProfileDetailsForm(): FormGroup {
    return this.fb.group({
      knownAs: ['', [Validators.required]],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      unitNumber: [''],
      streetNumber: ['', Validators.required],
      streetName: ['', Validators.required],
      streetType: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postCode: ['', Validators.required],
    });
  }
}
