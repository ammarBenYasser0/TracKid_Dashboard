import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { EncryptionService } from './services/encryption.service';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

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
      {
        path: 'forget-password',
        component: ForgetPasswordComponent,
      },
      {
        path: 'reset-password/:token',
        component: ResetPasswordComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, EncryptionService],
})
export class AuthModule {}
