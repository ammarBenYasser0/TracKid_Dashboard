import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private _HttpClient: HttpClient) { }
  getQuestion(): Observable<any> {
    return this._HttpClient.get<any>(`${environment.api}admin/question/index?user_auth_id=1`)
  }
  addQuestion(answer:string , question:string): Observable<any> {
    return this._HttpClient.get<any>(`${environment.api}admin/question/store?user_auth_id=1&answer=${answer}&question=${question}`)
  }
  deleteQuestion(number:number): Observable<any> {
    return this._HttpClient.get<any>(`${environment.api}admin/question/delete/${number}?user_auth_id=1`)
  }
  updateQuestion(number:number ,answer:string , question:string): Observable<any> {
    return this._HttpClient.get<any>(`${environment.api}admin/question/update/${number}?user_auth_id=1&answer=${answer}&question=${question}`)
  }
}
