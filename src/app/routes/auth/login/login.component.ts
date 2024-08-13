import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { AuthFacade } from 'src/app/core/layout/auth-layout/store/auth/auth-facade';
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

  data$ = combineLatest({
    errors: this.authFacade.error$,
  });

  form = this.formBuilder.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    const request: LoginRequestInterface = {
      ...this.form.getRawValue(),
    };

    this.authFacade.login(request);
  }

  onClearErrors(): void {
    this.authFacade.clearErrors();
  }
}
