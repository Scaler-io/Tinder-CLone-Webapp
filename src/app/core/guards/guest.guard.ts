import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { isUserLoggedIn } from 'src/app/feature/state/auth/auth.selector';
import { AppState } from 'src/app/store/app.state';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.select(isUserLoggedIn).pipe(
        map(auth => {
          if(!auth) return true;
          this.router.navigateByUrl('/dashboard');
        })
      );
  }
  
  constructor(
    private store: Store<AppState>,
    private router: Router){}
}
