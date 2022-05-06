import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private _HttpClient: HttpClient ) { }
  getUsers(number:number): Observable<any> {
    return this._HttpClient.get<any>(`${environment.api}admin/user/index?page=${number}&user_auth_id=1`)
  }
  // addUser(email:string , password:string, password_confirmation:string, name:string): Observable<any> {
  //   return this._HttpClient.get<any>(`${environment.api}admin/user/store?user_auth_id=1&email=${email}&password=${password}&password_confirmation=${password_confirmation}&name=${name}`)
  // }
  deleteUser(number:number): Observable<any> {
    return this._HttpClient.get<any>(`${environment.api}admin/user/delete/${number}?user_auth_id=1`)
  }
  updateUser(number:number): Observable<any> {
    return this._HttpClient.get<any>(`${environment.api}admin/user/update/${number}?user_auth_id=1`)
  }
  updateUserStatus(number:number , status:string): Observable<any> {
    return this._HttpClient.get<any>(`${environment.api}admin/user/active/${number}?user_auth_id=1&status=${status}`)
  }
}
