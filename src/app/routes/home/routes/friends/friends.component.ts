import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AuthFacade } from '../../../../core/layout/auth-layout/store/auth/auth-facade';
import { combineLatest, of, switchMap } from 'rxjs';

import { PostInterface } from '../../../../shared/components/posts/types/post.interface';
import { CurrentUserInterface } from '../../../../shared/types/current-user.interface';
import { PostFacade } from '../../../../shared/components/posts/store/posts-facade';
import { ProfileFacade } from '../profile/store/profile-facade';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  friendPosts: PostInterface[] = [];
  currentPage = 0;
  selectedFriendId: number | null = null;

  data$ = combineLatest({
    currentUser: this.authFacade.currentUser$,
    userProfile: this.profileFacade.userProfile$,
    posts: this.postFacade.posts$,
  });

  constructor(
    private authFacade: AuthFacade,
    private postFacade: PostFacade,
    private profileFacade: ProfileFacade
  ) {}

  ngOnInit(): void {}

  onFriendSelected(friend: Partial<CurrentUserInterface>): void {
    console.warn('friend', friend);

    if (friend.id) {
      this.selectedFriendId = friend.id;
      this.currentPage = 0;
      this.profileFacade.fetchUserProfile(this.selectedFriendId);
      this.getPostData(friend.id, this.currentPage);
    }
  }
  onCurrentPage() {
    if (this.selectedFriendId) {
      this.currentPage++;
      this.getPostData(this.selectedFriendId, this.currentPage);
    }
  }

  getPostData(userId: number, page: number) {
    this.postFacade.fetchPostsByUserId(page, userId);
  }
}
