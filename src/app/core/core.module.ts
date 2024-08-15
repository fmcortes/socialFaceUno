import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthHeaderComponent } from './layout/auth-layout/components/auth-header/auth-header.component';
import { SpinnerComponent } from './layout/spinner/spinner.component';
import { SpinnerService } from './layout/spinner/spinner.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import * as authEffects from './layout/auth-layout/store/auth/effects';
import * as countriesEffects from './layout/auth-layout/store/country/effects';
import { CountryService } from './services/country.service';
import { authFeature } from './layout/auth-layout/store/auth/reducer';
import { AuthFacade } from './layout/auth-layout/store/auth/auth-facade';
import { countriesFeature } from './layout/auth-layout/store/country/reducer';
import { AdsenseComponent, AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    HeaderComponent,
    SettingsComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    FooterComponent,
    AuthHeaderComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forFeature(authFeature),
    StoreModule.forFeature(countriesFeature),
    EffectsModule.forFeature([authEffects, countriesEffects]),
  ],
  exports: [
    HeaderComponent,
    MainLayoutComponent,
    SettingsComponent,
    SpinnerComponent,
  ],
  providers: [SpinnerService, AuthFacade, CountryService],
})
export class CoreModule {}
