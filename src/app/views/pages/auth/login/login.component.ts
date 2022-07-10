import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: HotToastService
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    remember: new FormControl(),
  });

  ngOnInit(): void {
    // this.authService.autoLogin();
  }

  onLogin() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const remember = this.loginForm.value.remember;
    this.authService.login(email, password, remember).subscribe((res) => {
      if (res.message == 'غير مصرح لك تسجيل الدخول أعد تسجيل الدخول مرة أخري') {
        this.toastService.error('كلمة المرور غير صحيحة');
      } else if (res.error?.email) {
        this.toastService.error('البريد الإلكتروني غير موجود');
      } else {
        this.toastService.success('مرحباً بعودتك');
      }
      this.router.navigate(['/dashboard']);
    });
  }
}
