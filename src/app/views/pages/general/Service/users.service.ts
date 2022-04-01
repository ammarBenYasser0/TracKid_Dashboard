import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _baseUrl = "https://krombo.000webhostapp.com/api";
  private _token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wva3JvbWJvLjAwMHdlYmhvc3RhcHAuY29tXC9hcGlcL2FkbWluXC9sb2dpbiIsImlhdCI6MTY0ODI0NDM4NiwibmJmIjoxNjQ4MjQ0Mzg2LCJqdGkiOiJPN0ZuTFBwZzN0S09lVDhwIiwic3ViIjoxLCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.O3cTvFJzduKmuSbrqIr6uGPl1lQFEoyokDGPnQZKR6o`,
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Methods': "GET,POST,OPTIONS,DELETE,PUT",
    })
  }
  constructor(private _HttpClient: HttpClient) { }
  getUsers(): Observable<any> {
    return this._HttpClient.get<any>(`https://krombo.000webhostapp.com/api/admin/user/index`, this.httpOptions)
  }
  addUsers(): Observable<any> {
    return this._HttpClient.post<any>(`${this._baseUrl}/admin/question/store`, this.httpOptions)
  }
  deleteUsers(number:number): Observable<any> {
    return this._HttpClient.delete<any>(`${this._baseUrl}/admin/question/delete/${number}`, this.httpOptions)
  }
  updateUsers(number:number): Observable<any> {
    return this._HttpClient.put<any>(`${this._baseUrl}/admin/question/update/${number}`, this.httpOptions)
  }
}
