import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginRequest } from 'src/app/shared/models/auth';
import { ErrorCodes } from 'src/app/shared/models/constants';
import { validationMessage } from 'src/app/shared/validators/validationMessage';
import { AppState } from 'src/app/store/app.state';
import { AuthFormGroupHelper } from '../../form-groups/auth-formgroup-helper';
import * as authAction from '../../state/auth/auth.actions';
import { getAuthError } from '../../state/auth/auth.selector';
import * as sharedAction from '../../state/shared/shared.actions';
import { isApplicationBusy } from '../../state/shared/shared.selector';

@Component({
  selector: 'tinder-clone-home-login-panel',
  templateUrl: './home-login-panel.component.html',
  styleUrls: ['./home-login-panel.component.scss']
})
export class HomeLoginPanelComponent implements OnInit, OnDestroy {
  public memberLoginForm: FormGroup;
  public isBusy: boolean;

  public subscriptions = {
    authErrorMessage: null,
    applicationBusy: null
  }

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.memberLoginForm = AuthFormGroupHelper.createMemberLoginFormGroup(); 

    this.subscriptions.applicationBusy = this.store.select(isApplicationBusy).subscribe(state => this.isBusy = state);
    
    this.subscriptions.authErrorMessage = this.store.select(getAuthError).subscribe(error => {
      if(error?.code === ErrorCodes.Unauthorized){
        this.memberLoginForm.get('username').setErrors({'Unauthorized': true});
      }
    });
    
  }

  ngOnDestroy(): void {
    if(this.subscriptions.authErrorMessage) this.subscriptions.authErrorMessage.unsubscribe();
    if(this.subscriptions.applicationBusy) this.subscriptions.applicationBusy.unsubscribe();
  }

  public onSubmit(){
    if(this.memberLoginForm.get('username').hasError('Unauthorized')){
      this.memberLoginForm.get('username').setErrors(null);
    }
    if(this.memberLoginForm.valid){
      const request = <LoginRequest> this.memberLoginForm.value;
      this.store.dispatch(new sharedAction.AppLoadingStateChange(true));
      this.store.dispatch(new authAction.MemberLoginStart(request));
    }
  }

  public getErrorMessage(control: string): string{
    return validationMessage(control, this.memberLoginForm);
  }
}
