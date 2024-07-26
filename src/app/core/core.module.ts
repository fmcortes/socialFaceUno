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

@NgModule({
  declarations: [HeaderComponent, SettingsComponent, MainLayoutComponent, AuthLayoutComponent, FooterComponent, AuthHeaderComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HeaderComponent, MainLayoutComponent, SettingsComponent],
})
export class CoreModule {}
