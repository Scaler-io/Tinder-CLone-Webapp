import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { CoreModule } from 'src/app/core/core.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeLoginPanelComponent } from './home-login-panel/home-login-panel.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeLoginPanelComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AppMaterialModule,
    SharedModule,
  ]
})
export class HomeModule { }
