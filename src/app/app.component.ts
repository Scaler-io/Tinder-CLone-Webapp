import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { SvgIconRegistry } from './shared/svg/svg-markup';
import { AppState } from './store/app.state';
import * as authAction from './feature/state/auth/auth.actions';
import { isApplicationBusy } from './feature/state/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Tinder-CLone-Webapp';

  public subscriptions = {
    appLoadingState: null
  }

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
    private store: Store<AppState>, 
    ){
    SvgIconRegistry.registerIcons(iconRegistry, sanitizer);
  }

  ngOnInit() {    
    this.store.dispatch(new authAction.PerformingAutLogin());
  }

  ngOnDestroy(): void {
    if(this.subscriptions.appLoadingState){
      this.subscriptions.appLoadingState.unsubscribe();
    }
  }
}
