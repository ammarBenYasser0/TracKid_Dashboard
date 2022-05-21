import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { authRes } from '../models/authRes.model';
import { EncryptionService } from '../services/encryption.service';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private encryptionService: EncryptionService,
    private router: Router
  ) {}

  // TODO: try after finishing
  userSubject = new BehaviorSubject<User | null>(null);

  login(email: string, password: string, remember: boolean) {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    return this.http
      .post<authRes>(
        `${environment.api}admin/login`,
        formData
        // this.httpOptions
      )
      .pipe(
        tap((resData) => {
          if (resData.code == 200) {
            this.handleUserData(
              email,
              resData.data.user_data.id,
              resData.data.access_token,
              remember
            );
          }
        })
      );
  }

  logout() {
    this.userSubject.next(null);
    localStorage.removeItem('user');
    document.cookie =
      'rememberUser=true; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    this.router.navigate(['/auth/login']);
  }

  autoLogin() {
    if (document.cookie === 'rememberUser=true') {
      const userEncryptedData = localStorage.getItem('user');
      if (userEncryptedData) {
        const userData = JSON.parse(
          this.encryptionService.decrypt(userEncryptedData)
        );
        const loadedUser = new User(
          userData.email,
          userData.userId,
          userData._accessToken
        );
        this.userSubject.next(loadedUser);
        this.router.navigate(['/dashboard']);
      } else {
        return;
      }
    } else {
      localStorage.removeItem('user');
    }
  }

  private handleUserData(
    email: string,
    userId: number,
    accessToken: string,
    remember: boolean
  ) {
    const user = new User(email, userId, accessToken);
    this.userSubject.next(user);
    const userJsonData = JSON.stringify(user);
    const userEncryptedData = this.encryptionService.encrypt(userJsonData);
    localStorage.setItem('user', userEncryptedData);
    if (remember == true) {
      document.cookie =
        'rememberUser=true; expires=Fri, 31 Dec 9999 23:59:59 GMT ';
    } else {
      let date = new Date();
      date.setTime(date.getTime() + 120 * 60 * 1000);
      document.cookie = `rememberUser=true; expires=${date.toUTCString()}`;
    }
  }

  forgetPassword(email: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('email', email);
    return this.http.get<authRes>(`${environment.api}admin/forget-password`, {
      params: queryParams,
    });
  }
}
