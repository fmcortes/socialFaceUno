import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFacade } from 'src/app/core/layout/auth-layout/store/auth-facade';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginRequestInterface } from 'src/app/core/types/login-request.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authFacade: AuthFacade,
    private formBuilder: FormBuilder
  ) {}

  form = this.formBuilder.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit(): void {
    const request: LoginRequestInterface = {
      ...this.form.getRawValue()
    }

    this.authFacade.login(request);
  }
}
