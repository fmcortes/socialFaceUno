import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostFacade } from 'src/app/shared/components/posts/store/posts-facade';
import { ProfilePhotoBoxComponent } from './profile-photo-box/profile-photo-box.component';
import { ProfileFiendListComponent } from './profile-friend-list/profile-friend-list.component';

@NgModule({
  declarations: [ProfileComponent, ProfilePhotoBoxComponent, ProfileFiendListComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
  providers: [PostFacade],
})
export class ProfileModule {}
