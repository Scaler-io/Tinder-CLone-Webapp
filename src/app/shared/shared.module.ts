import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';

@NgModule({
  declarations: [ButtonComponent, StepperComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    CdkStepperModule,
  ],
  exports: [
    // components
    ButtonComponent,
    StepperComponent,

    // modules
    ReactiveFormsModule,
    CdkStepperModule,
  ],
})
export class SharedModule {}
