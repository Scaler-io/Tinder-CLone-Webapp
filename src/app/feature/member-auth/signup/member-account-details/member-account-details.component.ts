import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormGroupHelper } from 'src/app/feature/form-groups/BaseFormGroupHelper';
import { validationMessage } from 'src/app/shared/validators/validationMessage';

@Component({
  selector: 'tinder-clone-member-account-details',
  templateUrl: './member-account-details.component.html',
  styleUrls: ['./member-account-details.component.scss'],
})
export class MemberAccountDetailsComponent implements OnInit {
  @Input() memberRegistrationForm: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  public get accountFormGroup(): FormGroup {
    return BaseFormGroupHelper.getChildForm(
      this.memberRegistrationForm,
      'accountFormGroup'
    );
  }

  public getErrorMessage(control: string): string {
    return validationMessage(control, this.accountFormGroup);
  }
}
