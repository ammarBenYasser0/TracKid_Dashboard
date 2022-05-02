import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AddAdminRes } from '../models/addAdminRes';
import { AdminOpRes } from '../models/AdminOpRes';

@Injectable({
  providedIn: 'root',
})
export class AdminsService {
  constructor(private http: HttpClient) {}

  addAdmin(
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string
  ) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('email', email);
    queryParams = queryParams.append('password', password);
    queryParams = queryParams.append(
      'password_confirmation',
      passwordConfirmation
    );
    queryParams = queryParams.append('name', name);
    queryParams = queryParams.append('permission_id', 2);

    return this.http.get<AddAdminRes>(
      `${environment.api}admin/dashboard/store`,
      {
        params: queryParams,
      }
    );
  }

  getAdmins(page = 1) {
    let queryParams = new HttpParams().set('page', page);
    return this.http.get<any>(`${environment.api}admin/dashboard/index`, {
      params: queryParams,
    });
  }

  deleteAdmin(id: number) {
    return this.http.get<AdminOpRes>(
      `${environment.api}admin/dashboard/delete/${id}`
    );
  }

  updateAdmin(
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string,
    id: number
  ) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('email', email);
    queryParams = queryParams.append('password', password);
    queryParams = queryParams.append(
      'password_confirmation',
      passwordConfirmation
    );
    queryParams = queryParams.append('name', name);
    queryParams = queryParams.append('permission_id', 2);

    // TODO : admin id

    return this.http.get<AdminOpRes>(
      `${environment.api}admin/dashboard/update/${id}`,
      {
        params: queryParams,
      }
    );
  }
}
