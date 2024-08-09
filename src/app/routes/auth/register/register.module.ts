import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountriesFacade } from 'src/app/core/layout/auth-layout/store/country/country-facade';




@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    CountriesFacade
  ]
})
export class RegisterModule { }
