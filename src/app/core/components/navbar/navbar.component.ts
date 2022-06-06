import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as authSelectors from 'src/app/feature/state/auth/auth.selector';
import { AuthUser } from 'src/app/shared/models/auth';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'tinder-clone-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  public isUserLoggedIn: boolean;
  public userClaim: AuthUser;

  private subscriptions = {
    userLoggedIn: null,
    userClaim: null,
  };

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscriptions.userLoggedIn = this.store
      .select(authSelectors.isUserLoggedIn)
      .subscribe((value) => {
        this.isUserLoggedIn = value;
      });

    this.subscriptions.userClaim = this.store
      .select(authSelectors.getUserClaim)
      .subscribe((value) => {
        this.userClaim = value;
      });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.userLoggedIn) {
      this.subscriptions.userLoggedIn.unsubscribe();
    }
    if (this.subscriptions.userClaim) {
      this.subscriptions.userClaim.unsubscribe();
    }
  }
}
