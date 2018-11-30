import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
    constructor(public jwtHelper: JwtHelperService) { }

    public get Token(): string {
        return this.jwtHelper.tokenGetter();
    }

    public set Token(token) {
        localStorage.setItem('token', token);
    }
}
