import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { MemberAuthRoutingModule } from './member-auth-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    MemberAuthRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class MemberAuthModule { }
