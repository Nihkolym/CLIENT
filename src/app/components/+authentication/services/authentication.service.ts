import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { IUser } from '../../../models/User';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/token.service';
import { RoleService } from '../../../services/role.service';
import { Observable } from 'rxjs';
import { IOrganisation } from 'src/app/models/Organization';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url: string = environment.url;

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    private router: Router,
    private tokenService: TokenService,
    private roleService: RoleService,
  ) { }

  public signUpAsUser(user: IUser): Observable<void> {
    return this.http.post<void>(`${this.url}/users/signup`, user);
  }

  public signUpAsOrganization(organization: FormData): Observable<void> {
    return this.http.post<void>(`${this.url}/organizations/signup`, organization);
  }

  public logIn(email: string, password: string): Observable<IUser> {
    return this.http.post<any>(`${this.url}/users/login`, { email, password }).pipe(
      tap((data) => {
        this.tokenService.Token = data.token;
        this.roleService.Role = data.role;
        this.router.navigate(['me']);
      })
    );
  }

  public logOut(): void {
    localStorage.clear();
    this.router.navigate(['authorization']);
  }

  public isAuthenticated(): boolean {
    const token: string = this.tokenService.Token;

    return !this.jwtHelper.isTokenExpired(token);
  }
}
