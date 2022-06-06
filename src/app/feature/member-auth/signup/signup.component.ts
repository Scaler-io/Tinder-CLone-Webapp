import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { MemberRegistrationFormGroupHelper } from '../../form-groups/member-registration/memberRegistrationFormGroupHelper';

@Component({
  selector: 'tinder-clone-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public memberRegistrationForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.memberRegistrationForm =
      MemberRegistrationFormGroupHelper.createMemberRegistrationForm(
        this.authService
      );
  }

  onClick() {
    alert('submitted');
  }
}
