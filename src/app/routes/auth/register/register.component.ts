import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { AuthFacade } from 'src/app/core/layout/auth-layout/store/auth/auth-facade';
import { CountriesFacade } from 'src/app/core/layout/auth-layout/store/country/country-facade';
import { RegisterRequestInterface } from 'src/app/core/types/register-request.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private authFacade: AuthFacade,
    private countriesFacade: CountriesFacade,
    private formBuilder: FormBuilder
  ) {}

  data$ = combineLatest({
    errors: this.authFacade.error$,
    countries: this.countriesFacade.countries$,
  });

  form = this.formBuilder.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    country: ['', Validators.required],
    notification: ['', Validators.required],
  });

  ngOnInit(): void {
    // Fetch countries
    this.countriesFacade.fetchCountries();
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      ...this.form.getRawValue(),
    };

    this.authFacade.register(request);
  }

  onClearErrors(): void {
    this.authFacade.clearErrors();
  }

}
