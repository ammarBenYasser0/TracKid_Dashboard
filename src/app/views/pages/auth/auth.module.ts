import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { EncryptionService } from './encryption.service';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { AuthInterceptorService } from '../../../auth-interceptor.service';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
// import { AuthInterceptorService } from './auth-interceptor.service';
=======
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
<<<<<<< HEAD
      {
        path: 'forget-password',
        component: ForgetPasswordComponent,
      },
=======
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
    ],
  },
];

@NgModule({
<<<<<<< HEAD
  declarations: [LoginComponent, AuthComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, EncryptionService],
=======
  declarations: [LoginComponent, AuthComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
>>>>>>> 874d03440757be2b48b5b10f97a28a54e6c9cc6d
})
export class AuthModule {}
