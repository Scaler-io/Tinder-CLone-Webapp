import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { validationMessage } from 'src/app/shared/validators/validationMessage';
import { AuthFormGroupHelper } from '../../form-groups/auth-formgroup-helper';

@Component({
  selector: 'tinder-clone-home-login-panel',
  templateUrl: './home-login-panel.component.html',
  styleUrls: ['./home-login-panel.component.scss']
})
export class HomeLoginPanelComponent implements OnInit {

  public memberLoginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.memberLoginForm = AuthFormGroupHelper.createMemberLoginFormGroup(); 
  }

  public onSubmit(){
    console.log(this.memberLoginForm);
  }

  public getErrorMessage(control: string): string{
    return validationMessage(control, this.memberLoginForm);
  }

}
