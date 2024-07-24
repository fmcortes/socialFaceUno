import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@NgModule({
  declarations: [HeaderComponent, SettingsComponent, MainLayoutComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, MainLayoutComponent, SettingsComponent],
})
export class CoreModule {}
