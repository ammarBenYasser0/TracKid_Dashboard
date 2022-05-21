import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: HotToastService
  ) {}

  forgetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  ngOnInit(): void {}

  onForgetpassword() {
    const email = this.forgetPasswordForm.value.email;
    this.authService.forgetPassword(email).subscribe((resData) => {
      console.log(resData.message);
      if (resData.message == 'Admin Validation') {
        this.toastService.error('البريد الإلكتروني غير موجود');
      } else {
        this.toastService.success(resData.message);
        this.router.navigate(['']);
      }
    });
  }
}
