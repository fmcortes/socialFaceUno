import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFacade } from 'src/app/core/layout/auth-layout/store/auth/auth-facade';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  constructor(
    private authFacade: AuthFacade,
    private formBuilder: FormBuilder
  ) {}

  form = this.formBuilder.nonNullable.group({
    email: ['', Validators.required],
  });

  onSubmit(): void {
    const email = this.form.getRawValue().email;
    this.authFacade.forgotPassword(email);
  }
}
