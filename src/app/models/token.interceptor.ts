import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public tokenService: TokenService, public route: Router) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.tokenService.Token) {
            const newRequest = request.clone({
                setHeaders: {
                    Authorization: this.tokenService.Token
                }
            });

            return next.handle(newRequest);
        }

        return next.handle(request);
    }
}
