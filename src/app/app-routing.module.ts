import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericErrorComponent } from './core/components/generic-error/generic-error.component';
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { HomeComponent } from './feature/home/home.component';

const routes: Routes = [
  {path: '', canActivate: [GuestGuard], component: HomeComponent},
  {path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'products', loadChildren: () => import('./feature/product/product.module').then(m => m.ProductModule)},
  {path: 'account', loadChildren: () => import('./feature/member-auth/member-auth.module').then(m => m.MemberAuthModule)},
  {path: 'error', component: GenericErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
