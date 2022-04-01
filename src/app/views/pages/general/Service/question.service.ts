import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private _baseUrl = "https://krombo.000webhostapp.com/api";
  private _token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  }

  constructor(private _HttpClient: HttpClient) { }
  getQuestion(): Observable<any> {
    return this._HttpClient.get<any>(`${this._baseUrl}/admin/question/index` )
  }
  addQuestion(newQuestion:any): Observable<any> {
    return this._HttpClient.post<any>(`${this._baseUrl}/admin/question/store`, newQuestion )
  }
  deleteQuestion(number:number): Observable<any> {
    return this._HttpClient.post<any>(`${this._baseUrl}/admin/question/delete/${number}`, null)
  }
  updateQuestion(number:number): Observable<any> {
    return this._HttpClient.post<any>(`${this._baseUrl}/admin/question/update/${number}`, null)
  }
}
