import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    ButtonComponent,
  ],
})
export class SharedModule { }
