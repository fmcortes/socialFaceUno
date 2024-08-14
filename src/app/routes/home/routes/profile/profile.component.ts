import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AuthFacade } from 'src/app/core/layout/auth-layout/store/auth/auth-facade';
import { PostFacade } from 'src/app/shared/components/posts/store/posts-facade';
import { ProfileFacade } from './store/profile-facade';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(
    private postFacade: PostFacade,
    private authFacade: AuthFacade,
    private route: ActivatedRoute,
    private profileFacade: ProfileFacade
  ) {}
  currentPage = 0;
  userId: number | null = null;

  data$ = combineLatest({
    posts: this.postFacade.posts$,
    currentUser: this.authFacade.currentUser$,
    userProfile: this.profileFacade.userProfile$,
  });

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.userId = params['userId'];
      this.currentPage = 0;
      if (this.userId) {
        this.fetchUserProfile(this.userId);
        this.getPostData(this.userId, this.currentPage);
      }
    });
  }

  fetchUserProfile(userId: number): void {
    this.profileFacade.fetchUserProfile(userId);
  }

  onCurrentPage() {
    if (this.userId) {
      this.currentPage++;
      this.getPostData(this.userId, this.currentPage);
    }
  }

  getPostData(userId: number, page: number) {
    this.postFacade.fetchPostsByUserId(page, userId);
  }
}
