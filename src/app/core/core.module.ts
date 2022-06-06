import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppMaterialModule } from '../app-material.module';
import { FooterComponent } from './components/footer/footer.component';
import { FooterItemComponent } from './components/footer/footer-item/footer-item.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GenericErrorComponent } from './components/generic-error/generic-error.component';
import { UppercaseInputDirective } from './directives/uppercase-input.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FooterItemComponent,
    GenericErrorComponent,
    UppercaseInputDirective,
  ],
  imports: [CommonModule, AppMaterialModule, HttpClientModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, UppercaseInputDirective],
})
export class CoreModule {}
