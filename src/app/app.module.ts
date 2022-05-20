import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './feature/home/home.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './feature/state/auth/auth.effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppLoadingInterceptor } from './core/interceptors/app-loading.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    EffectsModule.forRoot([AuthEffect]),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppLoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
