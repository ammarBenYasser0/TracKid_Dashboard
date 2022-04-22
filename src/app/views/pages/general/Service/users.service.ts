import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient: HttpClient) { }
  getUsers(): Observable<any> {
    return this._HttpClient.get<any>(`${environment.api}admin/user/index?user_auth_id=1`)
  }
  deleteUsers(number:number): Observable<any> {
    return this._HttpClient.get<any>(`${environment.api}admin/question/delete/${number}?user_auth_id=1`)
  }
  updateUsers(number:number): Observable<any> {
    return this._HttpClient.get<any>(`${environment.api}admin/question/update/${number}?user_auth_id=1`)
  }
}
