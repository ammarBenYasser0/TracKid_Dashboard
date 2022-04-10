import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, Observable, take } from 'rxjs';
import { AuthService } from './views/pages/auth/services/auth.service';
import { EncryptionService } from './views/pages/auth/services/encryption.service';
import { User } from './views/pages/auth/models/user.model';

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
      setHeaders: { Authorization: `Bearer ${currentUser._accessToken}` },
    });

    return next.handle(request);
  }
}
