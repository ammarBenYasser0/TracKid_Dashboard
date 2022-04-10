import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    remember: new FormControl(),
  });
  errMsg = null;

  ngOnInit(): void {
    // this.authService.userSubject.subscribe((u) => {
    //   console.log(u);
    // });
    // this.authService.test().subscribe((d) => {
    //   console.log(d);
    // });
    // this.authService.autoLogin();
  }

  onLogin() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const remember = this.loginForm.value.remember;
    this.authService.login(email, password, remember).subscribe(
      () => {
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        this.errMsg = err;
      }
    );
  }

  // testapi() {
  //   this.authService.test().subscribe((d) => {
  //     console.log(d);
  //   });
  // }
}
