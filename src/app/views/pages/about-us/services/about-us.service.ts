import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AboutUsRes } from '../models/aboutUsRes';

@Injectable({
  providedIn: 'root',
})
export class AboutUsService {
  constructor(private http: HttpClient) {}

  setAboutUs(body: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('ttitle', 'About-Us');
    queryParams = queryParams.append('body', body);

    return this.http.get<AboutUsRes>(
      `${environment.api}admin/about_us/update`,
      {
        params: queryParams,
      }
    );
  }

  getAboutUs() {
    return this.http.get<AboutUsRes>(`${environment.api}admin/about_us/index`);
  }
}
