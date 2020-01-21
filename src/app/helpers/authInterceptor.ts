import {Injectable, Injector} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Injectable()
export class AuthInterceptors implements HttpInterceptor {
  token: string;

  constructor(private injector: Injector, private router: Router,
              private location: Location) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.has('auth') && req.headers.get('auth') === 'true') {

      const user = JSON.parse(localStorage.getItem('user'));
      this.token = user.token;
      const authReq = req.clone({setHeaders: {'x-finpulse-token': this.token}
    })
      ;
      authReq.headers.delete('auth');
      return next.handle(authReq).pipe(
        catchError(error => {
          if (error.status === 401) {
            console.log('401 error');
            return of(error);
          }
          if (error.status === 403) {
            this.location.back();
          }
          throw error;
        })
      );
    } else {

      return next.handle(req.clone());
    }
  }
}
