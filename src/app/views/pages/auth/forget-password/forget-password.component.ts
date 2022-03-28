import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { email } from 'ngx-custom-validators/src/app/email/validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isErr = false;
  popContent: string = '';

  forgetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  ngOnInit(): void {}

  onForgetpassword() {
    const email = this.forgetPasswordForm.value.email;
    this.authService.forgetPassword(email).subscribe(
      (resData) => {
        this.popContent = resData.message;
      },
      (err) => {
        this.isErr = true;
        this.popContent = err;
      }
    );
  }
}
