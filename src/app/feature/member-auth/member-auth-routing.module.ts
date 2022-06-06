import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MemberAuthComponent } from './member-auth.component';

const routes: Routes = [
  {path: 'signup', component: MemberAuthComponent},
  {path: '',  redirectTo: 'signup'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class MemberAuthRoutingModule { }
