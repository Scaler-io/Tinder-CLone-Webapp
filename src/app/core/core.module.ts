import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppMaterialModule } from '../app-material.module';
import { FooterComponent } from './components/footer/footer.component';
import { FooterItemComponent } from './components/footer/footer-item/footer-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FooterItemComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    HttpClientModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }