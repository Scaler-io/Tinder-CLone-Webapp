import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { MemberAuthRoutingModule } from './member-auth-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MemberAuthComponent } from './member-auth.component';
import { MemberAccountDetailsComponent } from './signup/member-account-details/member-account-details.component';
import { MemberProfileDetailsComponent } from './signup/member-profile-details/member-profile-details.component';



@NgModule({
  declarations: [
    SignupComponent,
    MemberAuthComponent,
    MemberAccountDetailsComponent,
    MemberProfileDetailsComponent
  ],
  imports: [
    CommonModule,
    MemberAuthRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class MemberAuthModule { }
