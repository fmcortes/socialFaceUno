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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {
  authFeature,
  authFeatureKey,
} from './layout/auth-layout/store/reducer';
import { AuthFacade } from './layout/auth-layout/store/auth-facade';
import { EffectsModule } from '@ngrx/effects';

import * as authEffects from './layout/auth-layout/store/effects';

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
    EffectsModule.forFeature(authEffects),
  ],
  exports: [
    HeaderComponent,
    MainLayoutComponent,
    SettingsComponent,
    SpinnerComponent,
  ],
  providers: [SpinnerService, AuthFacade],
})
export class CoreModule {}
