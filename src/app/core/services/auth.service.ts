import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { AuthUser } from 'src/app/shared/models/auth';
import { UserRoles } from 'src/app/shared/models/user-role';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(loginRequest): Observable<AuthUser>{
    return this.http.post<AuthUser>(`${environment.tinderCloneApiUrl}/account/login`, loginRequest)
    .pipe(map(response => {
      return response;
    }));
  }

  public performAutoLogin(): Observable<AuthUser>{
    const token = this.getTokenFromLocalStorage();
    if(token){
      return this.http.get<AuthUser>(`${environment.tinderCloneApiUrl}/account`).pipe(map(response => {
        return response;
      }));
    }
    return of();
  }

  public checkUserNameExists(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${environment.tinderCloneApiUrl}/account/IsUsernameExists?username=${username}`).pipe(map(response => {
      return response;
    }));
  }

  public setTokenToLocalStorage(token: string): void{
    localStorage.setItem('auth-token', token);
  }

  public getTokenFromLocalStorage(): string{
    return localStorage.getItem('auth-token');
  }

  public removeTokenFromLocalStorage(){
    localStorage.removeItem('auth-token');
  }
  
  public isUserIsASuperAdmin(user: AuthUser): boolean{
    if(user.roles.includes(UserRoles.Administrator) && user.roles.includes(UserRoles.Moderator)) return true;
    return false;
  }

  public isUserIsASystemAdmin(user: AuthUser): boolean{
    if(user.roles.length == 1 && user.roles.includes(UserRoles.Administrator)) return true;
    return false;
  }

  public isUserIsAModerator(user: AuthUser): boolean{
    if(user.roles.length == 1 && user.roles.includes(UserRoles.Moderator)) return true;
    return false;
  }

  public isUserIsAMember(user: AuthUser): boolean{
    if(user.roles.length == 1 && user.roles.includes(UserRoles.Member)) return true;
    return false;
  }
}
