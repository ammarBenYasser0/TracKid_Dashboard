import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EncryptionService } from '../../auth/services/encryption.service';
 
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  appRoot:string = environment.api;  
  constructor(
    private http: HttpClient,
    private encryptionService: EncryptionService,
    private router: Router 
  ) { }
   userEncryptedData = localStorage.getItem('user') || '';
   userDecryptedData = this.encryptionService.decrypt(this.userEncryptedData);
   currentUser = JSON.parse(this.userDecryptedData);

 
  getcontent()  {
     
    return this.http.get<any>(this.appRoot + `admin/dashboard/content?user_auth_id=1`).pipe(
      tap((data:any) => {
        
   
        

      }),
      map((data) => data),
      catchError(this.handleError)  
      )  
  }
 

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.log(err);
    
    if(err.status === 401){
      localStorage.removeItem('user');
      window.location.href = "/auth/login";
    }

    let errorMessage: string;
    if (err.error.error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `${err.error.error}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status} `;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
