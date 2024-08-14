import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostFacade } from 'src/app/shared/components/posts/store/posts-facade';
import { ProfilePhotoBoxComponent } from './profile-photo-box/profile-photo-box.component';
import { ProfileFiendListComponent } from './profile-friend-list/profile-friend-list.component';
import { UserProfileService } from './services.ts/user-profile.service';
import { ProfileFacade } from './store/profile-facade';
import { userProfileFeature } from './store/reducers';
import { StoreModule } from '@ngrx/store';

import * as userProfileEffects from './store/effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfilePhotoBoxComponent,
    ProfileFiendListComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    StoreModule.forFeature(userProfileFeature),
    EffectsModule.forFeature([userProfileEffects]),
  ],
  providers: [PostFacade, ProfileFacade, UserProfileService],
})
export class ProfileModule {}
