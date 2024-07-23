import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, SettingsComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, SettingsComponent],
})
export class CoreModule {}
