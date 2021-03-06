import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { startWith } from 'rxjs';
import { BaseFormGroupHelper } from 'src/app/feature/form-groups/BaseFormGroupHelper';
import { MemberRegistrationRequestMapper } from 'src/app/shared/mappers/member-registration.mapper';
import {
  StreetTypeModel,
  StreetTypes,
} from 'src/app/shared/models/address-helpers';
import { ApprovedGenderList } from 'src/app/shared/models/constants';
import { IMemberRegistrationFormData } from 'src/app/shared/models/form-group-model/memberRegistrationFormModel';
import { validationMessage } from 'src/app/shared/validators/validationMessage';
import { AppState } from 'src/app/store/app.state';
import * as sharedActions from '../../../state/shared/shared.actions';
import * as authActions from '../../../state/auth/auth.actions';

@Component({
  selector: 'tinder-clone-member-profile-details',
  templateUrl: './member-profile-details.component.html',
  styleUrls: ['./member-profile-details.component.scss'],
})
export class MemberProfileDetailsComponent implements OnInit, OnDestroy {
  @Input() memberRegistrationForm: FormGroup;

  public genderDropdownItems: string[] = [
    ApprovedGenderList.Male,
    ApprovedGenderList.Female,
  ];

  public approvedStreetTypes: StreetTypeModel[] = [];
  public streetTypeSuggestionsList: StreetTypeModel[];

  private currentYear = new Date().getFullYear();
  public maxDate: Date = new Date(this.currentYear + 1, 11, 31);

  public subscriptions = {
    streetTypeSuggestions: null,
  };
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.approvedStreetTypes = StreetTypes;

    this.subscriptions.streetTypeSuggestions = this.profileDetailsFormGroup
      .get('streetType')
      .valueChanges.pipe(startWith(''))
      .subscribe((value) => {
        this.streetTypeSuggestionsList = this.getStreetTypeSuggestion(value);
      });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.streetTypeSuggestions)
      this.subscriptions.streetTypeSuggestions.unsubscribe();
  }

  public get profileDetailsFormGroup(): FormGroup {
    return BaseFormGroupHelper.getChildForm(
      this.memberRegistrationForm,
      'profileDetails'
    );
  }

  public get accountDetailsFormGroup(): FormGroup {
    return BaseFormGroupHelper.getChildForm(
      this.memberRegistrationForm,
      'account'
    );
  }

  public submitSubscription() {
    let formData = this.memberRegistrationForm
      .value as IMemberRegistrationFormData;
    let request =
      MemberRegistrationRequestMapper.mapToRegistrationPayload(formData);
    this.store.dispatch(new sharedActions.AppLoadingStateChange(true));
    this.store.dispatch(new authActions.MemberRegistrationStart(request));
  }

  public getErrorMessage(control: string): string {
    return validationMessage(control, this.profileDetailsFormGroup);
  }

  private getStreetTypeSuggestion(value: string): StreetTypeModel[] {
    const filter = value.toLocaleLowerCase();

    return value.length >= 1
      ? this.approvedStreetTypes.filter((option) =>
          option.type.toLocaleLowerCase().startsWith(filter)
        )
      : [];
  }
}
