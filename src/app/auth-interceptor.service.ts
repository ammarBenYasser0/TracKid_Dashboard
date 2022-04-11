import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, Observable, take } from 'rxjs';
import { AuthService } from './views/pages/auth/auth.service';
import { EncryptionService } from './views/pages/auth/encryption.service';
import { User } from './views/pages/auth/user.model';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private encryptionService: EncryptionService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add auth header with jwt if account is logged in and request is to the api url
    const userEncryptedData = localStorage.getItem('user') || '';
    const userDecryptedData = this.encryptionService.decrypt(userEncryptedData);
    const currentUser = JSON.parse(userDecryptedData);

    console.log('From Interseptor', `Bearer ${currentUser._accessToken}`);

    request = request.clone({

      setHeaders: {
        'content': 'application/json',
         Authorization: `Bearer ${currentUser._accessToken}`,
         'Accept': '*/*',
         'Access-Control-Allow-Origin' :'*',
         "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT",
         'Access-Control-Allow-Headers':'X-Requested-With,content-type',
         'Access-Control-Allow-Credentials': 'true'
     },
    });

    return next.handle(request);
  }
}
