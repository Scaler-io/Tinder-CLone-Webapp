import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthUser } from 'src/app/shared/models/auth';
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

  public setTokenToLocalStorage(token: string): void{
    localStorage.setItem('auth-token', token);
  }

  public getTokenFromLocalStorage(): string{
    return localStorage.getItem('auth-token');
  }

  public removeTokenFromLocalStorage(){
    localStorage.removeItem('auth-token');
  }
}
