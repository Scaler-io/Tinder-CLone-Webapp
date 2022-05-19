import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions} from '@angular/material/core';
 

const globalRippleConfig: RippleGlobalOptions = {
  disabled: false,
  animation: {
    enterDuration: 300,
    exitDuration: 0,
  }
};

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatInputModule,
  MatDividerModule,
  MatIconModule,
  MatRippleModule
];

@NgModule({
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ],
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}
  ]
})
export class AppMaterialModule { }
