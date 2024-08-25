import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ReactiveFormsModule } from '@angular/forms';

import { PostFacade } from '../../../../shared/components/posts/store/posts-facade';


@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, SettingsRoutingModule, ReactiveFormsModule],
  providers: [PostFacade],
})
export class SettingsModule {}
