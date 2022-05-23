import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { SvgIconRegistry } from './shared/svg/svg-markup';
import { AppState } from './store/app.state';
import * as authAction from './feature/state/auth/auth.actions';
import { getAuthError } from './feature/state/auth/auth.selector';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthError } from './shared/models/auth';
import { ErrorCodes } from './shared/models/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Tinder-CLone-Webapp';

  public subscriptions = {
    appLoadingState: null,
    appAuthenticationError: null
  }

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
    private store: Store<AppState>,
    private router: Router
    ){
    SvgIconRegistry.registerIcons(iconRegistry, sanitizer);
  }

  ngOnInit() {    
    this.store.dispatch(new authAction.PerformingAutLogin());

    this.subscriptions.appAuthenticationError = this.store.select(getAuthError).subscribe((error: AuthError) => {
      if(error.code === ErrorCodes.InternalServerError){
        this.router.navigateByUrl('/error');
      }
    })
  }

  ngOnDestroy(): void {
    if(this.subscriptions.appLoadingState){
      this.subscriptions.appLoadingState.unsubscribe();
    }
    if(this.subscriptions.appAuthenticationError){
      this.subscriptions.appAuthenticationError.unsubscribe();
    }
  }

  public get isGenericErrorPage(): boolean{
    return this.router.url.includes('/error');
  }
}
