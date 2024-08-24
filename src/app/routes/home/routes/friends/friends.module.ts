import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './friends.component';
import { SharedModule } from '../../../../shared/shared.module';

import { PostFacade } from '../../../../shared/components/posts/store/posts-facade';
import { ProfileFacade } from '../../../../routes/home/routes/profile/store/profile-facade';

@NgModule({
  declarations: [FriendsComponent],
  imports: [CommonModule, FriendsRoutingModule, SharedModule],
  providers: [PostFacade, ProfileFacade],
})
export class FriendsModule {}
