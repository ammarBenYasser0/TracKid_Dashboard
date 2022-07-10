import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private toastService: HotToastService,
    private router: Router
  ) {}

  token: string;
  resetPasswordForm = new FormGroup({
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.token = param['token'];
    });
    this.route.queryParams.subscribe((param) => {
      console.log(param['email']);
    });
  }

  onResetpassword() {
    const password = this.resetPasswordForm.value.password;
    const passwordConfirmation =
      this.resetPasswordForm.value.passwordConfirmation;
    this.authService
      .resetPassword(this.token, password, passwordConfirmation)
      .subscribe((res) => {
        if (
          (res.message =
            'من فضلك تحقق من البريد الالكتروني ثم أعد المحاولة مرة أخري')
        ) {
          this.toastService.error('البريد الإلكتروني غير صحيح');
        } else {
          this.toastService.success('تم تغيير كلمة المرور');
          this.router.navigate(['/auth/login']);
        }
      });
    console.log(this.resetPasswordForm.value);
  }

  onPasswordChange() {
    if (this.passwordConfirmation.value == this.password.value) {
      this.passwordConfirmation.setErrors(null);
    } else {
      this.passwordConfirmation.setErrors({ mismatch: true });
    }
  }

  get password(): AbstractControl {
    return this.resetPasswordForm.controls['password'];
  }

  get passwordConfirmation(): AbstractControl {
    return this.resetPasswordForm.controls['passwordConfirmation'];
  }
}
