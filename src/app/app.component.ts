import { Component, ElementRef, NgZone, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { SvgIconRegistry } from './shared/svg/svg-markup';
import { AppState } from './store/app.state';
import * as authAction from './feature/state/auth/auth.actions';
import { getAuthError } from './feature/state/auth/auth.selector';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { AuthError } from './shared/models/auth';
import { ErrorCodes } from './shared/models/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  public isAppLoading: boolean = false;
  @ViewChild('pageLoader') spinner: ElementRef;

  public subscriptions = {
    appLoadingState: null,
    appAuthenticationError: null
  }

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
    private store: Store<AppState>,
    private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer2
    ){
    SvgIconRegistry.registerIcons(iconRegistry, sanitizer);
    router.events.subscribe((e: RouterEvent) => this._navigationInterceptors(e));
  }

  ngOnInit() {    
    this.store.dispatch(new authAction.PerformingAutLogin());

    this.subscriptions.appAuthenticationError = this.store.select(getAuthError).subscribe((error: AuthError) => {
      if(error?.code === ErrorCodes.InternalServerError){
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

  private _navigationInterceptors(event: RouterEvent): void{
    if(event instanceof NavigationStart){
      this.isAppLoading = true;
      this._showLoaderContent();
    }
    setTimeout(() => {
      if(event instanceof NavigationEnd){
        this.isAppLoading = false;
        this._hideLoaderContent();
      }
      if (event instanceof NavigationCancel) {
        this.isAppLoading = false;
        this._hideLoaderContent();
      }
      if (event instanceof NavigationError) {
        this.isAppLoading = false;
        this._hideLoaderContent();
      } 
    }, 1000);
  }

  private _showLoaderContent(): void{
    this.ngZone.runOutsideAngular(() => {
      this.renderer.setStyle(
        this.spinner.nativeElement,
        'opacity',
        1
      );
  
      this.renderer.setStyle(
        this.spinner.nativeElement,
        'z-index',
        1
      );
      this.renderer.setStyle(
        this.spinner.nativeElement,
        'transition',
        '.1s opacity ease-out'
      );
    });
  }

  private _hideLoaderContent(): void{
    this.ngZone.runOutsideAngular(() => {
      this.renderer.setStyle(
        this.spinner.nativeElement,
        'opacity',
        0
      );
  
      this.renderer.setStyle(
        this.spinner.nativeElement,
        'z-index',
        -1
      );
      this.renderer.setStyle(
        this.spinner.nativeElement,
        'transition',
        '.3s opacity ease-out'
      );
    });
  }
}
